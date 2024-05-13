package com.esercizio.es.entity;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.w3c.dom.html.HTMLOptGroupElement;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class MyAppConfig {

    //Ingredienti
    @Bean(name = "top_mozzarella")
    public Topping mozzarella() {
        return new Topping(10,1,"Mozzarella");
    }

    @Bean(name = "top_tomato")
    public Topping tomato() {
        return new Topping(0,3,"Tomato");
    }

    @Bean(name = "top_french_fries")
    public Topping french_fries() {
        return new Topping(13,4,"French Fries");
    }

    @Bean(name = "top_wrustel")
    public Topping wrustel() {
        return new Topping(30,6,"Wrustel");
    }

    @Bean(name = "top_onion")
    public Topping onion(){
        return new Topping(1,2,"Onion");
    }

    @Bean(name = "top_tuna")
    public Topping tuna(){
        return new Topping(4,3,"Tuna");
    }

    //Bevande
    @Bean(name = "cocaCola")
    public Drink cocaCola() {
        return new Drink(30,2,"Coca Cola");
    }
    @Bean(name = "fanta")
    public Drink fanta() {
        return new Drink(18,2,"Fanta");
    }
    @Bean(name = "sprite")
    public Drink sprite() {
        return new Drink(25,2,"Sprite");
    }

    //Pizze
    @Bean(name = "Margherita")
    public Pizza margherita() {
        List<Topping> toppings = new ArrayList<>();
        toppings.add(mozzarella());
        toppings.add(tomato());
        return new Pizza("Margherita", false,toppings);
    }
    @Bean(name = "tonnoCipolla")
    public Pizza tonnoCipolla() {
        List<Topping> toppings = new ArrayList<>();
        toppings.add(onion());
        toppings.add(tuna());
        return new Pizza("Tonno e Cipolla", true, toppings);
    }
    @Bean(name = "wrustelPatatine")
    public Pizza wrustelPatatine() {
        List<Topping> toppings = new ArrayList<>();
        toppings.add(wrustel());
        toppings.add(french_fries());
        return new Pizza("Wrustel e Patatine", false, toppings);
    }

}
