import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateGroceryItemComponent } from './components/create-grocery-item/create-grocery-item.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routerConfig';
import {GroceryItemCategoriesResolve} from "./grocery-item-categories.resolve";
import {FormsModule} from "@angular/forms";
import { TagCheckboxgroupComponent } from './components/create-grocery-item/tag-checkboxgroup/tag-checkboxgroup.component';
import { ManageGroceryItemComponent } from './components/manage-grocery-item/manage-grocery-item.component';
import {GroceryItemsResolve} from "./grocery-items.resolve";
import { SearchGroceryItemComponent } from './components/search-grocery-item/search-grocery-item.component';
import {LocationStrategy, PathLocationStrategy} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    CreateGroceryItemComponent,
    TagCheckboxgroupComponent,
    ManageGroceryItemComponent,
    SearchGroceryItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [GroceryItemCategoriesResolve, GroceryItemsResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
