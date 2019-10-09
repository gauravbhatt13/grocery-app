import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {GroceryService} from "../../services/grocery.service";
import {ActivatedRoute} from "@angular/router";
import {TagCheckboxComponent} from "./tag-checkbox.component";

@Component({
  selector: 'app-create-grocery-item',
  templateUrl: './create-grocery-item.component.html',
  styleUrls: ['./create-grocery-item.component.css']
})
export class CreateGroceryItemComponent implements OnInit {
  itemName: string;
  tagOptions = new Array<TagCheckboxComponent>();
  @ViewChild('itemNameRef') itemNameRef: ElementRef;

  constructor(private groceryService: GroceryService, private route: ActivatedRoute) {
  }

  addGroceryItem() {
    if (this.itemName) {
      const tags = this.tagOptions.filter(item => item.checked).map(e => e.label);
      this.groceryService.addGroceryItem(this.itemName, tags);
      this.clearForm();
    }
  }

  clearForm() {
    this.itemName = '';
    this.itemNameRef.nativeElement.focus();
    this.tagOptions.forEach(e=> e.checked = false);
  }

  ngOnInit() {
    this.tagOptions = this.route.snapshot.data.tagCategories.map(x => new TagCheckboxComponent(x, x));
  }
}
