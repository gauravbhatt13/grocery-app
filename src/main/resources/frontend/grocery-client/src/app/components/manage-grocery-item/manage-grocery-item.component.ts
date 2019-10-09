import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GroceryItem} from "../../grocery-item";
import {TagCheckboxComponent} from "../create-grocery-item/tag-checkbox.component";
import {GroceryService} from "../../services/grocery.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-manage-grocery-item',
  templateUrl: './manage-grocery-item.component.html',
  styleUrls: ['./manage-grocery-item.component.css']
})
export class ManageGroceryItemComponent implements OnInit {
  groceryItems: GroceryItem[] = [];
  selectedItem: GroceryItem;
  tagOptions = new Array<TagCheckboxComponent>();
  subscriptions: Subscription[];

  constructor(private groceryService: GroceryService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.tagOptions = this.route.snapshot.data.tagCategories.map(x => new TagCheckboxComponent(x, x));
    this.route.snapshot.data.groceryItems.forEach((element) => {
      this.groceryItems.push(new GroceryItem(element.id, element.name, element.tags));
    });
  }

  onSelect(groceryItem: GroceryItem) {
    this.selectedItem = groceryItem;
    this.tagOptions.forEach(e=> e.checked = false);
    this.tagOptions.filter(e => this.selectedItem.tags.includes(e.label)).map(e => e.checked = true);
  }

  onUpdate() {
    const tags = this.tagOptions.filter(item => item.checked).map(e => e.label);
    this.selectedItem.tags = tags;
    this.groceryService.updateGroceryItem(this.selectedItem, tags);
    this.selectedItem = undefined;
  }

  onDelete() {
    this.groceryService.deleteGroceryItem(this.selectedItem.id);
    const removeIndex = this.groceryItems.map(function (item) {
      return item.id;
    }).indexOf(this.selectedItem.id);
    ~removeIndex && this.groceryItems.splice(removeIndex, 1);
    this.selectedItem = undefined;
  }
}
