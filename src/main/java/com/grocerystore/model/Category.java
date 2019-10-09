package com.grocerystore.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Category {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    @Column(nullable = false)
    private String name;
    @ManyToMany(mappedBy = "tags")
    @JsonIgnore
    private Set<GroceryItem> items = new HashSet<>();

    public Category() {
    }

    public Category(String name) {
        this.name = name;
    }

    public Category(String name, Set<GroceryItem> items) {
        this.name = name;
        this.items = items;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<GroceryItem> getItems() {
        return items;
    }

    public void setItems(Set<GroceryItem> items) {
        this.items = items;
    }
}
