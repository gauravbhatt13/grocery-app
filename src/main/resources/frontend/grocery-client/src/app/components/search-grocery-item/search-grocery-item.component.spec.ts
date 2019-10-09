import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGroceryItemComponent } from './search-grocery-item.component';
import {TagCheckboxgroupComponent} from "../create-grocery-item/tag-checkboxgroup/tag-checkboxgroup.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";

describe('SearchGroceryItemComponent', () => {
  let component: SearchGroceryItemComponent;
  let fixture: ComponentFixture<SearchGroceryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({imports: [
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([])
      ],
      declarations: [ SearchGroceryItemComponent, TagCheckboxgroupComponent ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGroceryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
