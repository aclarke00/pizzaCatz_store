class OrderedPizzasController < ApplicationController

    def index
        ordered_pizzas = OrderedPizza.all 
        render json: ordered_pizzas
    end

    def show 
        ordered_pizza = OrderedPizza.find(params[:id])
        render json: ordered_pizza
    end

end