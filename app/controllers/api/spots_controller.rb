class Api::SpotsController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def index 
        @spots = Spot.all 
    end

    def create
        @spot = Spot.new(spot_params)
        if @spot.save 
            render :show
        else
            render json: @spot.errors.full_messages, status: 422
        end
    end
    
    def show
        @spot = Spot.find(params[:id])
        render :show 
    end

    def update 
        @spot = Spot.find(params[:id])
        if @spot && @spot.update(spot_params)
            render :show
        else
            render json: @spot.errors.full_messages, status: 422
        end
    end

    def search
        search_spots = Spot.filtered(params[:query])
        if search_spots
            @spots = search_spots
            render :index
        else 
            render json: ["Sorry! No spot was found!"], status: 404
        end
    end

    private

    def spot_params 
        params.require(:spot).permit(:spot_name, :description, :address, :price, :city, :lat, :lng, images: [])
    end

    def bounds
        params[:bounds]
    end

end
