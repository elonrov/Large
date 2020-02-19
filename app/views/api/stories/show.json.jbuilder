json.story do 
    json.partial! "api/stories/story", story: @story
end

json.author do
    json.partial! "api/users/user", user: @story.author
end
