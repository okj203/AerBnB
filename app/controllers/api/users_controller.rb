class Api::UsersController < ApplicationController
    def create
        @user = User.new(
                username: params[:user][:username], 
                password: params[:user][:password])
        if @user.save
            login!(@user)
            render :show
        else
            render json: {
                    error: "invalid credentials",
                    status: 404
                }, status: 404
        end
    end
end
