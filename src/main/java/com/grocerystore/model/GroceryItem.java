package com.grocerystore.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class GroceryItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(nullable = false)
    private String name;
    @ManyToMany(cascade=CascadeType.ALL)
    @JoinTable(
            name = "item_category",
            joinColumns = @JoinColumn(name = "item_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id"))
    private Set<Category> tags = new HashSet<>();

    public GroceryItem() {
    }

    public GroceryItem(String name) {
        this.name = name;
    }

    public GroceryItem(String name, Set<Category> tags) {
        this.name = name;
        this.tags = tags;
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

    public Set<Category> getTags() {
        return tags;
    }

    public void setTags(Set<Category> tags) {
        this.tags = tags;
    }
}
