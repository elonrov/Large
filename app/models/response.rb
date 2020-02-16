class Response < ApplicationRecord 
    validates :body, presence: true

    belongs_to :user, 
        primary_key: :id, 
        foreign_key: :user_id, 
        class_name: "User"
    
    belongs_to :story, 
        primary_key: :id, 
        foreign_key: :story_id, 
        class_name: "Story"

end
