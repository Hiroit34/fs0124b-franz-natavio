package com.esercizio.es.entity;



public class Drink extends Product{
    private String name;

    public Drink(int calories, int price, String name) {
        super(calories, price);
        this.name = name;
    }

    @Override
    public String toString() {
        return "Drink{" +
                "name='" + name + '\'' +
                ", calories=" + calories +
                ", price=" + price +
                '}';
    }
}
