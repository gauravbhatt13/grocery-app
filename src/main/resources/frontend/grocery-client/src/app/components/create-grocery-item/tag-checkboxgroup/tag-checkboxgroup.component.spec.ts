import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagCheckboxgroupComponent } from './tag-checkboxgroup.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

describe('TagCheckboxgroupComponent', () => {
  let component: TagCheckboxgroupComponent;
  let fixture: ComponentFixture<TagCheckboxgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({imports: [
        FormsModule
      ],
      declarations: [ TagCheckboxgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagCheckboxgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize options', () => {
    component.options = ['daily', 'weekly', 'monthly'];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('input').checked).toEqual(false);
  });
});
