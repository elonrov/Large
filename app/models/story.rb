class Story < ApplicationRecord 
    validates :title, presence: true, uniqueness: true
    validates :body, presence: true 

    belongs_to :author, 
        primary_key: :id, 
        foreign_key: :author_id, 
        class_name: "User"
    
end
