json.partial! "api/responses/response", response: @response

# json.story do
#   json.id @response.story.id
#   json.response_array @response.story.responses.map { |response| response.id }
# end

# json.response do
#   json.extract! @response, :id, :body, :story_id, :user_id
#   # json.date @response.date
# end