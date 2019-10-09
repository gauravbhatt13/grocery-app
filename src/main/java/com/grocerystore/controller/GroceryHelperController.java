package com.grocerystore.controller;

import com.grocerystore.CategoriesConfig;
import com.grocerystore.model.GroceryItem;
import com.grocerystore.service.GroceryHelperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
public class GroceryHelperController {
    @Autowired
    private CategoriesConfig categoriesConfig;

    @Autowired
    private GroceryHelperService groceryHelperService;

    @PostMapping("/items")
    @CrossOrigin(origins = "http://localhost:4200")
    public GroceryItem saveItem(@RequestBody GroceryItem groceryItem){
        return this.groceryHelperService.saveOrUpdateGroceryItem(groceryItem);
    }

    @GetMapping("/items")
    @CrossOrigin(origins = "http://localhost:4200")
    public @ResponseBody List<GroceryItem> getAllGroceryItems(){
        return this.groceryHelperService.getGroceryItems();
    }

    @DeleteMapping("/items/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public void deleteGroceryItem(@PathVariable Long id){
        this.groceryHelperService.deleteGroceryItemById(id);
    }

    @PutMapping("/items")
    @CrossOrigin(origins = "http://localhost:4200")
    public GroceryItem updateGroceryItem(@RequestBody GroceryItem groceryItem){
        return this.groceryHelperService.saveOrUpdateGroceryItem(groceryItem);
    }

    @GetMapping(value = "/items", params = "category")
    @CrossOrigin(origins = "http://localhost:4200")
    public Set<GroceryItem> getAllByTags(@RequestParam("category") String[] categories){
        Set<GroceryItem> groceryItems = new HashSet<>();
        for(String category: categories) {
            groceryItems.addAll(this.groceryHelperService.findByTag(category));
        }
        return groceryItems;
    }

    @GetMapping("/items/categories")
    @CrossOrigin(origins = "http://localhost:4200")
    public @ResponseBody List<String> getCategories(){
        return this.categoriesConfig.getTags();
    }
}
