class ModifyBookings < ActiveRecord::Migration[5.2]
  def change
    remove_column :bookings, :host_id
  end
end
