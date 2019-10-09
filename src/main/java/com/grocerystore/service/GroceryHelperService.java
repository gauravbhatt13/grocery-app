package com.grocerystore.service;

import com.grocerystore.model.GroceryItem;

import java.util.List;

public interface GroceryHelperService {
    GroceryItem saveOrUpdateGroceryItem(GroceryItem groceryItem);
    List<GroceryItem> getGroceryItems();
    void deleteGroceryItemById(Long itemId);
    List<GroceryItem> findByTag(String tagName);
}
