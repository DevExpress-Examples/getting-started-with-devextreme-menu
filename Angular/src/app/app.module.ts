import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
 
import { DxMenuModule, DxCheckBoxModule } from "devextreme-angular";
 
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        DxMenuModule,
        DxCheckBoxModule
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule { }