class Api::SessionsController < ApplicationController
    # before_action :require_logged_in, only: [:destroy]
    skip_before_action :verify_authenticity_token
    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render "api/users/show"
        else
            # flash.now[:errors] = ['Invalid username or password.']
            # render json: { error: "invalid credentials" }
            # render json: { errors: @user.errors }
            render json: @user.errors.full_messages, status: 404
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 404
            # render json: {
            #         errors: "no user logged in",
            #         status: 404
            #     }, status: 404
        end
    end
end

