import { TestBed, inject } from '@angular/core/testing';

import { GroceryService } from './grocery.service';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {Observable} from "rxjs";

describe('GroceryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [
        HttpClientModule
      ],
      providers: [GroceryService]
    });
  });

  it('should be created', inject([GroceryService], (service: GroceryService) => {
    expect(service).toBeTruthy();
  }));

  it('#getCategories should return Observable', inject([GroceryService], (service: GroceryService) => {
    expect(service.getCategories()).toEqual(jasmine.any(Observable));
  }));

  it('#getItemsByCategories should return Observable', inject([GroceryService], (service: GroceryService) => {
    expect(service.getItemsByCategories(['heavy'])).toEqual(jasmine.any(Observable));
  }));

  it('#addGroceryItem should be called', inject([GroceryService], (service: GroceryService) => {
    expect(service.addGroceryItem('item1', ['heavy'])).toBe(undefined);
  }));
});

