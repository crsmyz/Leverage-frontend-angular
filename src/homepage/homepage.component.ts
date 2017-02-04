import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../appfooter/leveragefooter.component';
import { HeaderComponent } from '../appheader/leverageheader.component';

@Component({
  selector: 'leverage-homepage',
  template: `
  <leverage-header></leverage-header>
  <leverage-footer></leverage-footer>`,
  styles: [`
body {
  padding-top: 50px;
  padding-bottom: 20px;
}
`]
})
export class HomepageComponent  { 
    private homepage: string;
    private home: string;
    private finance: string;
    private about: string;
    
    constructor() {
        this.home = 'Home';
        this.finance = 'Finance';
        this.about = 'About';
    }    

}
