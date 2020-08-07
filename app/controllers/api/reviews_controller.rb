class Api::ReviewsController < ApplicationController
    before_action :require_logged_in

    def create
        @review = current_user.reviews.new(review_params)

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def index 
        if params[:spot_id]
            @review = Review.where(spot_id: params[:spotId].includes(:author))
        else
            @reviews = Review.all
        end
        render :index
    end

    private

    def review_params
        params.require(:review).permit(:author_id, :body, :spot_id, :rating)
    end
end
