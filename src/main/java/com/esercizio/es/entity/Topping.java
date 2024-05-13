package com.esercizio.es.entity;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Topping extends Product{

    private String name;

    public Topping(int calories, int price, String name) {
        super(calories, price);
        this.name = name;
    }

    @Override
    public String toString() {
        return "Topping{" +
                "name='" + name + '\'' +
                ", calories=" + calories +
                ", price=" + price +
                '}';
    }

}
