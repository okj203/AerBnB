class Api::BookingController < ApplicationController
    before_action :ensure_logged_in!
    def index
        if params[:user_id]
            @bookings = Booking.includes(:spot).where(guest_id: params[:user_id])
        else
            @bookings = Booking.includes(:spot).all
        end
        render :index
    end

    def create
        @booking = Booking.new(booking_params)
        @booking.guest_id = current_user.id
        
        if @booking.save
            render :show
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end

    def show
        @booking = Booking.find(params[:id])
        if @booking
            render :show
        else
            render json: @booking.errors.full_messages, status: 404
        end
    end

    def update 
        @booking = Booking.find(params[:id]) # find the booking with its primary id
        if @booking.update(booking_params)
            render :show
        else
            render json: @booking.errors.full_messages
        end
    end

    def destroy 
        @booking = Booking.find(params[:id])
        # find the booking with its primary id
        if @booking.destroy # attempt to destroy
             if params[:user_id]
                @bookings = Booking.includes(:spot).where(guest_id: params[:user_id]) 
                # if there's a booking of a spot, and the user_id matches with the guest_id,
                # show the index of all @bookings 
              else
               @bookings = Booking.includes(:spot).all
              end
            render :index
        else 
            render json: ["No booking found"], status: 404
        end
    end

    private

    def booking_params
        params.require(:booking).permit(:spot_id, :guest_id, :check_in, :check_out, :num_guests)
    end
end
