package com.esercizio.es.entity;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public abstract class Product {
    public int calories;
    public int price;

    public Product(int calories, int price) {
        this.calories = calories;
        this.price = price;
    }
}
