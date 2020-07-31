# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  date       :date             not null
#  author_id  :integer          not null
#  spot_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
    validates :body, :rating, :guest_id, :spot_id, presence: true

    belongs_to :spot,
    class_name: :Spot,
    foreign_key: :spot_id

    belongs_to :author,
    class_name: :User,
    foreign_key: :author_id
end
