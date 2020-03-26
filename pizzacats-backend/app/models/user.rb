class User < ApplicationRecord
    has_many :ordered_pizzas
    has_many :pizzas, through: :ordered_pizzas
end
