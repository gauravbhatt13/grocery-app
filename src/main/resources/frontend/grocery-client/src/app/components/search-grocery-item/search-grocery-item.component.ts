import {Component, OnDestroy, OnInit} from '@angular/core';
import {TagCheckboxComponent} from "../create-grocery-item/tag-checkbox.component";
import {GroceryService} from "../../services/grocery.service";
import {ActivatedRoute} from "@angular/router";
import {GroceryItem} from "../../grocery-item";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-search-grocery-item',
  templateUrl: './search-grocery-item.component.html',
  styleUrls: ['./search-grocery-item.component.css']
})
export class SearchGroceryItemComponent implements OnInit, OnDestroy {
  tagOptions = new Array<TagCheckboxComponent>();
  searchItems: GroceryItem[] = [];
  categorySubscription: Subscription;

  constructor(private groceryService: GroceryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.tagOptions = this.route.snapshot.data.tagCategories.map(x => new TagCheckboxComponent(x, x));;
  }

  onSearch() {
    let categories = [];
    this.searchItems.length = 0;
    this.tagOptions.forEach(
      e=> {if(e.checked)categories.push(e.label)}
    );
    if(categories.length > 0) {
      this.categorySubscription = this.groceryService.getItemsByCategories(categories).subscribe(elems => {
        elems.forEach(e=>{
          this.searchItems.push(new GroceryItem(e['id'], e['name'], e['tags']));
        })
      });
    }
  }

  ngOnDestroy(): void {
    if(this.categorySubscription){
      this.categorySubscription.unsubscribe();
    }
  }
}
