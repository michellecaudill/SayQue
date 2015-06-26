class Post < ActiveRecord::Base

validates :comment, presence: { message: "por favor, enter a phrase" }
# validates :comment, format: { with: /\A[a-zA-Z]+\z/, message: "only allows letters" }

end
