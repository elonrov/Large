json.extract! story, :id, :title, :body, :author_id
json.month story.created_at.month
json.day story.created_at.day
if story.photo.attached?
    json.photo_url url_for(story.photo)
end
