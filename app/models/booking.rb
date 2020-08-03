# == Schema Information
#
# Table name: bookings
#
#  id         :bigint           not null, primary key
#  check_in   :datetime         not null
#  check_out  :datetime         not null
#  num_guests :integer          not null
#  spot_id    :integer          not null
#  guest_id   :integer          not null
#  host_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Booking < ApplicationRecord
    validates :check_in, :check_out, :num_guests, presence: true

    belongs_to :spot,
    class_name: :Spot,
    foreign_key: :spot_id 

    belongs_to :guest,
    class_name: :User,
    foreign_key: :guest_id 

    has_one :host,
    through: :spot,
    source: :host
end
