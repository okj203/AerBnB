class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render "api/users/show"
        else
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

    def show
        @user = User.find(params[:id])
        render "api/users/show" # ex. /api/users/404 
    end

    private 

    def user_params
        params.require(:user).permit(:username, :password, :first_name, :last_name, :birthday, :email)
    end
end