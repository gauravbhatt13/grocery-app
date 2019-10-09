import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGroceryItemComponent } from './manage-grocery-item.component';
import {FormsModule} from "@angular/forms";
import {TagCheckboxgroupComponent} from "../create-grocery-item/tag-checkboxgroup/tag-checkboxgroup.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";

describe('ManageGroceryItemComponent', () => {
  let component: ManageGroceryItemComponent;
  let fixture: ComponentFixture<ManageGroceryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({imports: [
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([])
      ],
      declarations: [ ManageGroceryItemComponent, TagCheckboxgroupComponent ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGroceryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
