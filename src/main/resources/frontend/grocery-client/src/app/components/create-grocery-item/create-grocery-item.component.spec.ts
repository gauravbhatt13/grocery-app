import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { CreateGroceryItemComponent } from './create-grocery-item.component';
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {TagCheckboxgroupComponent} from "./tag-checkboxgroup/tag-checkboxgroup.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {APP_BASE_HREF} from '@angular/common';
import {GroceryService} from "../../services/grocery.service";

describe('CreateGroceryItemComponent', () => {
  let component: CreateGroceryItemComponent;
  let fixture: ComponentFixture<CreateGroceryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({imports: [
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([])
      ],
      declarations: [ CreateGroceryItemComponent, TagCheckboxgroupComponent ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGroceryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
