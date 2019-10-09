import { Routes } from '@angular/router';
import {CreateGroceryItemComponent} from "./components/create-grocery-item/create-grocery-item.component";
import {GroceryItemCategoriesResolve} from "./grocery-item-categories.resolve";
import {ManageGroceryItemComponent} from "./components/manage-grocery-item/manage-grocery-item.component";
import {GroceryItemsResolve} from "./grocery-items.resolve";
import {SearchGroceryItemComponent} from "./components/search-grocery-item/search-grocery-item.component";

export const appRoutes: Routes = [
  { path: 'create',
    component: CreateGroceryItemComponent,
    resolve: {
      tagCategories: GroceryItemCategoriesResolve
    }
  },
  { path: 'manage',
    component: ManageGroceryItemComponent,
    resolve: {
      tagCategories: GroceryItemCategoriesResolve,
      groceryItems: GroceryItemsResolve
    }
  },
  { path: 'search',
    component: SearchGroceryItemComponent,
    resolve: {
      tagCategories: GroceryItemCategoriesResolve
    }
  }
];
