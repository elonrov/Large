class Story < ApplicationRecord 
    validates :title, presence: true, uniqueness: true
    validates :body, presence: true 

    belongs_to :author, 
        primary_key: :id, 
        foreign_key: :author_id, 
        class_name: "User"
    
    has_one_attached :photo

    has_many :responses, 
        primary_key: :id, 
        foreign_key: :story_id, 
        class_name: "Response"
end
