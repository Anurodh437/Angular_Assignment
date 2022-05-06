import { Component, OnInit } from '@angular/core';
import { User } from 'src/User';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  constructor() {}
  inputs: User[] = [];
  ngOnInit(): void {}

  userModel = new User('', '', 0, null, null, '', null);

  onSubmit(e:any) {
    this.inputs.push(e);
    console.log(this.inputs);
  }
}
