class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def create
        @user = User.new(
                username: params[:user][:username], 
                password: params[:user][:password],
                first_name: params[:user][:first_name],
                last_name: params[:user][:last_name],
                birthday: params[:user][:birthday], # 1990-08-22 / yr-mth-day
                email: params[:user][:email]
                )
                # debugger
        if @user.save
            # debugger
            login!(@user)
            render "api/users/show"
        else
            # debugger
            render json: @user.errors.full_messages, status: 404
            # doesn't work- nesting prob
            # render json: {
            #         error: ["invalid credentials"],
            #         status: 404
            #     }, status: 404
            # works:
            # render json: ["Invalid Credentials"], status: 404
        end
    end
end