import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ReactWrapperComponent } from "../app/react/new-feature/src/ReactComponentWrapper";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, ReactWrapperComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
