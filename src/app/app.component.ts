import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SampleProject';

  
  isDisplay= true;
  buttonName = 'Hide';
  items = [1,2,3,4,5,6,7,8,9,10];
  selectedNum=1;

  students = [

    {
      id :101,
      name: 'John',
         },
         { 
          id :102,
          name: 'Smith',
         },

  ]

  toggle(): void {
    this.isDisplay = !this.isDisplay; // Toggles the display state
    if (this.buttonName === 'Hide') {
      this.buttonName = 'show';
    }
  else {
    this.buttonName = 'Hide';
  }
}

}
