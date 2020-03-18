json.story do 
    json.partial! "api/stories/story", story: @story
    # json.extract! @story, :id, :title,  :body, :author_id,
    # json.response_array @story.responses.map { |response| response.id }
end

json.author do
    json.partial! "api/users/user", user: @story.author
end

# json.responses do 
#     @story.responses.each do |response| 
#         json.set! response.id do 
#             json.extract! response, :id, :body, :story_id, :user_id
#             json.data response.date
#         end
#     end
# end
