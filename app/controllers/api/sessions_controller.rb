class Api::SessionsController < ApplicationController
    # before_action :require_logged_in, only: [:destroy]
    skip_before_action :verify_authenticity_token
    def create
        # debugger
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render "api/users/show"
        else
            # debugger
            # flash.now[:errors] = ['Invalid username or password.']
            # render json: { error: "invalid credentials" }
            # render json: { errors: @user.errors }
            render json: ["Invalid credentials."], status: 404
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render "api/users/show"
        else
            render json: ["No user logged in."], status: 404
            # b/c no user is found
            # b/c I don't have a user class (nill class) to call errors messages on 
            # 

            # render json: {
            #         errors: "no user logged in",
            #         status: 404
            #     }, status: 404
        end
    end
end

