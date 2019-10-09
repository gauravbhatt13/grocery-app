package com.grocerystore.model.repo;

import com.grocerystore.model.GroceryItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(path = "items")
public interface GroceryRepository extends JpaRepository<GroceryItem, Long> {
    public List<GroceryItem> findByTagsName(String tag);
}
