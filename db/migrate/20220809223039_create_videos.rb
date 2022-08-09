class CreateVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :videos do |t|
      t.string :name
      t.string :link
      t.string :category
      t.string :description

      t.timestamps
    end
  end
end
