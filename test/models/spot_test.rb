# == Schema Information
#
# Table name: spots
#
#  id          :bigint           not null, primary key
#  host_id     :integer          not null
#  description :text             not null
#  spot_name   :string           not null
#  price       :float            not null
#  address     :string           not null
#  city        :string           not null
#  country     :string           not null
#  lng         :float            not null
#  ltd         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class SpotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
