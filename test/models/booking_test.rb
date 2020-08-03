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
require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
