class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :username, length: {maximum: 20}
  # after_initialize :ensure_session_token

  def is_password?(password)

  end

  def password=(password)

  end

  def reset_session_token!

  end

  def ensure_session_token

  end
end
