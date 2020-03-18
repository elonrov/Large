json.extract! response, :id, :body, :date, :story_id, :user_id
json.username response.user.username
json.user_id response.user.id
# json.month response.created_at.month
# json.day response.created_at.day
# json.user do
#   json.extract! response.user, :id, :username
# end

# json.story do
#   json.extract! response.story, :id, :title, :body, :user_id
# end