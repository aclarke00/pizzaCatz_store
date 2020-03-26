User.destroy_all
Pizza.destroy_all
OrderedPizza.destroy_all

user1 = User.create(name: "Bobby")
user2 = User.create(name: "George")
user3 = User.create(name: "Alice")


#name, ingredients, description, price, image_url
pizza1 = Pizza.create(name: "Classic", ingredients: "tomato, mozzarella", price: 21)
pizza2 = Pizza.create(name: "Fresca", ingredients: "fresh mozzarella, tomato, basil", price: 21)
pizza3 = Pizza.create(name: "Supreme", ingredients: "tomato, mozzarella, pepperoni, mini meatball, garlic", price: 25)
pizza4 = Pizza.create(name: "Tie Dye", ingredients: "vodka sauce, tomato, pesto, fresh mozarella", price: 24)
pizza5 = Pizza.create(name: "Bianca", ingredients: "ricotta, mozzarella, garlic, oregano", price: 22)

op1 = OrderedPizza.create(user_id: User.all.sample.id, pizza_id: Pizza.all.sample.id)
op2 = OrderedPizza.create(user_id: User.all.sample.id, pizza_id: Pizza.all.sample.id)
op3 = OrderedPizza.create(user_id: User.all.sample.id, pizza_id: Pizza.all.sample.id)
op4 = OrderedPizza.create(user_id: User.all.sample.id, pizza_id: Pizza.all.sample.id)


