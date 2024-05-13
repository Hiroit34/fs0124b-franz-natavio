package com.esercizio.es;

import com.esercizio.es.entity.Drink;
import com.esercizio.es.entity.MyAppConfig;
import com.esercizio.es.entity.Pizza;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

@SpringBootApplication
public class EsApplication {

	public static void main(String[] args) {
		SpringApplication.run(EsApplication.class, args);

		try (var ctx = new AnnotationConfigApplicationContext(MyAppConfig.class)) {
			var cocaCola = (Drink)ctx.getBean("cocaCola");
			var fanta = (Drink)ctx.getBean("fanta");
			var sprite = (Drink)ctx.getBean("sprite");

			var margherita = (Pizza)ctx.getBean("Margherita");
			var tonnoCipolla = (Pizza)ctx.getBean("tonnoCipolla");
			var wrustelPatatine = (Pizza)ctx.getBean("wrustelPatatine");

			//Mostro in console le bevande
			System.out.println(cocaCola);
			System.out.println(fanta);
			System.out.println(sprite);

			//Mostro in console le pizze
			System.out.println(margherita);
			System.out.println(tonnoCipolla);
			System.out.println(wrustelPatatine);
		}
	}

}
