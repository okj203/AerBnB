class ModifyHostIdIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :spots, name: "index_spots_on_host_id"
  end
end
