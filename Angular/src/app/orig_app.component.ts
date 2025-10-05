import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  toggle: boolean = false;

  onItemClick(e: any) {
    if (e.itemData.text) {
      console.log(e.itemData.text + ' has been clicked!');
    }
    else if (e.itemData.icon) {
      console.log(e.itemData.icon.charAt(0).toUpperCase() + e.itemData.icon.slice(1) + ' has been clicked!');
    }
  }

  onValueChanged(e: any) {
    this.toggle = e.value;
  }
}
