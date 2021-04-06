import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'partt3Homework2';

  currentTab! : string;

  selectTab(tab : string) {
    this.currentTab = tab;
  }

}
