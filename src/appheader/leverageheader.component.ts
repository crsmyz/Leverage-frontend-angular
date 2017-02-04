import { Component } from '@angular/core';

@Component({
  selector: 'leverage-header',
  template: `
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <ul class="nav navbar-nav"> 
        <li class="active"><a href="/">{{ home }}</a></li>
        <li><a href="/">{{ finance }}</a></li>
        <li><a href="/">{{ about }}</a></li>
      </ul>
    </div>
  </nav>
  `,
  styles: [`
`]
})
export class HeaderComponent  { 
    constructor() {
    }    

}
