import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { DxMenuTypes } from 'devextreme-angular/ui/menu';
import { DxCheckBoxTypes } from 'devextreme-angular/ui/check-box';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  toggle = false;

  onItemClick(e: DxMenuTypes.ItemClickEvent): void {
    if (e.itemData?.text) {
      notify(`${e.itemData.text} has been clicked!`, 'info', 2000);
    } else if (e.itemData?.icon) {
      notify(
        `${this.capitalize(e.itemData.icon)} has been clicked!`,
        'info',
        2000,
      );
    }
  }

  onValueChanged(e: DxCheckBoxTypes.ValueChangedEvent): void {
    this.toggle = e.value;
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
