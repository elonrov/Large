@stories.each do |story|
    json.set! story.id do
        json.author story.author.username
        # json.photoUrl url_for(story.photo)
        json.partial! "api/stories/story", story: story
    end
end

