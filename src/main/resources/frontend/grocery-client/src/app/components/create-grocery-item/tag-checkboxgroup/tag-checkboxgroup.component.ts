import {Component, Input, OnInit} from '@angular/core';
import {TagCheckboxComponent} from "../tag-checkbox.component";

@Component({
  selector: 'app-tag-checkboxgroup',
  templateUrl: './tag-checkboxgroup.component.html',
  styleUrls: ['./tag-checkboxgroup.component.css']
})
export class TagCheckboxgroupComponent implements OnInit {
  @Input() options;
  constructor() { }

  ngOnInit() {
  }

}
