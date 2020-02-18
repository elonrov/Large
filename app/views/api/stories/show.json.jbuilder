json.story do 
    # json.photoUrl url_for(story.photo)
    json.partial! "api/stories/story", story: @story
end

json.author do
    # json.author @story.author.username
    json.partial! "api/users/user", user: @story.author
end
