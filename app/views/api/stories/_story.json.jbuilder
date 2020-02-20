json.extract! story, :id, :title, :body, :author_id

if story.photo.attached?
    json.photo_url url_for(story.photo)
end
