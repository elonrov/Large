json.story do 
    json.partial! "api/stories/story", story: @story 
    json.author @story.author.username
end
