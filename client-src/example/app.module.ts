import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { FormToolsModule } from '../form-tools.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormToolsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
