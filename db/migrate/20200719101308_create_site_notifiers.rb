class CreateSiteNotifiers < ActiveRecord::Migration[5.2]
  def change
    create_table :site_notifiers do |t|
      t.string :title,              null: false, default: ""
      t.string :url,              null: false, default: ""

      t.integer :connect_telegram, default: 0
      t.integer :status, default: 0
      t.float :reliability, default: 0
      
      ## Trackable
      t.string :location,              null: false, default: ""
      t.string :ip,              null: false, default: ""

      t.timestamps null: false
    end
  end
end
