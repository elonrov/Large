json.extract! response, :id, :body, :date, :story_id, :user_id
json.username response.user.username
json.user_id response.user.id
