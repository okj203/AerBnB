# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string
#  first_name      :string
#  last_name       :string
#  birthday        :date
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :first_name, :last_name, :birthday, presence: true
    validates :username, :email, presence: true, uniqueness: true
    validates :session_token, :password_digest, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    has_many :spots,
    class_name: :Spot,
    foreign_key: :host_id

    has_many :bookings,
    class_name: :Booking,
    foreign_key: :guest_id 
    
    has_many :reviews,
    class_name: :Review,
    foreign_key: :guest_id 

    after_initialize :ensure_session_token!
    attr_reader :password

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        # debugger
        self.session_token = SecureRandom::urlsafe_base64
        self.save
        self.session_token
    end

    def ensure_session_token!
        # debugger
        self.session_token || self.reset_session_token!
    end
end

