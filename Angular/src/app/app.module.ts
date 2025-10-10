import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxMenuModule } from 'devextreme-angular/ui/menu';
import { DxCheckBoxModule } from 'devextreme-angular/ui/check-box';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DxMenuModule, DxCheckBoxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
