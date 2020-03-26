class Pizza < ApplicationRecord
    has_many :ordered_pizzas
    has_many :users, through: :ordered_pizzas
end
