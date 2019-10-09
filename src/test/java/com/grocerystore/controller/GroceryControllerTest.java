package com.grocerystore.controller;

import com.grocerystore.model.Category;
import com.grocerystore.model.GroceryItem;
import com.grocerystore.service.GroceryHelperService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest
public class GroceryControllerTest {
    @Autowired
    MockMvc mockMvc;

    @MockBean
    private GroceryHelperService helperService;

    @Test
    public void createGroceryItem() throws Exception {
        Set<Category> tags = new HashSet<>();
        String content = "{\n" +
                "\t\"name\":\"item1\",\n" +
                "\t\"tags\":[\"heavy\"]\n" +
                "}";
        tags.add(new Category("heavy"));
        GroceryItem groceryItem = new GroceryItem("item1", tags);
        when(helperService.saveOrUpdateGroceryItem(groceryItem)).thenReturn(groceryItem);
        mockMvc.perform(MockMvcRequestBuilders.post("/items").content(content)
                .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().is2xxSuccessful());
    }

    @Test
    public void getAllByTagName() throws Exception {
        List<GroceryItem> itemList = new ArrayList<GroceryItem>();
        Set<Category> tags = new HashSet<>();
        tags.add(new Category("heavy"));
        itemList.add(new GroceryItem("item1", tags));
        itemList.add(new GroceryItem("item2", tags));
        when(helperService.findByTag("heavy")).thenReturn(itemList);
        mockMvc.perform(MockMvcRequestBuilders.get("/items?category=heavy")
                .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(jsonPath("$", hasSize(2))).andDo(print());
    }

    @Test
    public void deleteGroceryItem() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.delete("/items/1")).andExpect(status().is2xxSuccessful());
    }

    @Test
    public void updateGroceryItem() throws Exception {
        Set<Category> tags = new HashSet<>();
        String content = "{\n" +
                "\t\"name\":\"item1\",\n" +
                "\t\"tags\":[\"heavy\"]\n" +
                "}";
        tags.add(new Category("heavy"));
        GroceryItem groceryItem = new GroceryItem("item1", tags);
        when(helperService.saveOrUpdateGroceryItem(groceryItem)).thenReturn(groceryItem);
        mockMvc.perform(MockMvcRequestBuilders.put("/items").content(content)
                .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().is2xxSuccessful());
    }
}
