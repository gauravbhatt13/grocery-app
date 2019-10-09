package com.grocerystore.service.impl;

import com.grocerystore.model.GroceryItem;
import com.grocerystore.model.repo.GroceryRepository;
import com.grocerystore.service.GroceryHelperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroceryHelperServiceImpl implements GroceryHelperService {
    @Autowired
    private GroceryRepository groceryRepository;

    @Override
    public GroceryItem saveOrUpdateGroceryItem(GroceryItem groceryItem) {
        return this.groceryRepository.save(groceryItem);
    }

    @Override
    public List<GroceryItem> getGroceryItems() {
        return this.groceryRepository.findAll();
    }

    @Override
    public void deleteGroceryItemById(Long itemId) {
        this.groceryRepository.deleteById(itemId);
    }

    @Override
    public List<GroceryItem> findByTag(String categoryName) {
        return this.groceryRepository.findByTagsName(categoryName);
    }
}
