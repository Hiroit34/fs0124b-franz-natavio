package com.esercizio.es.entity;


import lombok.Getter;

import java.util.List;

@Getter
public class Pizza extends Product{
    private String name;
    private boolean xL;
    private List<Topping> toppingList;

    public Pizza(String name, boolean xL, List<Topping> toppingList) {
        super(1000, 5);
        this.name = name;
        this.xL = xL;
        this.toppingList = toppingList;
        this.calories = setCalories(toppingList, xL);
        this.price = setPrice(toppingList, xL);
    }

    public int setCalories(List<Topping> toppingList, boolean xL) {
        int totalCalories = 266;
        if (toppingList != null) {
            for (Topping topping : toppingList) {
                totalCalories += topping.getCalories();
            }
        }
        if (xL) return (totalCalories += (totalCalories * 5) / 100);
        else return totalCalories;
    }

    public int setPrice(List<Topping> t, boolean xL) {
        int totalPrice = 5;
        if (t != null) {
            for (Topping topping : t) {
                totalPrice += topping.getPrice();
            }
        }
        if (xL) {
            return totalPrice += totalPrice;
        } else {
            return totalPrice;
        }
    }

    @Override
    public String toString() {
        return "Pizza{" +
                "name='" + name + '\'' +
                ", xL=" + xL +
                ", toppingList=" + toppingList +
                ", calories=" + calories +
                ", price=" + price +
                '}';
    }
}
