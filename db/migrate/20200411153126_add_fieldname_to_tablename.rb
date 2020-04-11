class AddFieldnameToTablename < ActiveRecord::Migration[5.2]
  def change
    add_column :stories, :date, :datetime
  end
end
