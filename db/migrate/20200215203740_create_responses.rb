class CreateResponses < ActiveRecord::Migration[5.2]
  def change
    create_table :responses do |t|
      t.string :body, null: false
      t.integer :story_id
      t.integer :user_id
    end
    add_index :responses, :story_id
    add_index :responses, :user_id
  end
end
