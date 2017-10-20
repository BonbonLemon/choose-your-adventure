OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '122951645071348', 'd799605f0b5cf904b8dbf4afbd67d904'
end
