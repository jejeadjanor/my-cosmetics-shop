import { Component } from '@angular/core';

@Component({
  selector: 'root',
  template:`
  <div><h1>{{pageTitle}}</h1>
  <products></products> 
  </div>
  `
})

export class AppComponent{
  pageTitle: string = 'Hephzi Product Management';
}