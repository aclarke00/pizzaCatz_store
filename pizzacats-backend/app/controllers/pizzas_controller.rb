class PizzasController < ApplicationController
    def index
        pizzas = Pizza.all 
        render json: pizzas
    end

    def show
        pizza = Pizza.find(params[:id])
        render json: pizza
    end

    def create 
        pizza = Pizza.create(pizza_params)
        render json:pizza
    end

    private
    
    def pizza_params
        params.permit(:ingredients)
    end

end