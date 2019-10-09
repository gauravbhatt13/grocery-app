package com.grocerystore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(CategoriesConfig.class)
public class GroceryAppApplication {
    public static void main(String[] args) {
        SpringApplication.run(GroceryAppApplication.class, args);
    }
}
