class CreateOrderedPizzas < ActiveRecord::Migration[6.0]
  def change
    create_table :ordered_pizzas do |t|
      t.references :user, null: false, foreign_key: true
      t.references :pizza, null: false, foreign_key: true

      t.timestamps
    end
  end
end
