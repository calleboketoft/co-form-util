import {bootstrap} from '@angular/platform-browser-dynamic'
import {provideForms, disableDeprecatedForms} from '@angular/forms'
import {AppComponent} from './app.component'
bootstrap(AppComponent, [
  provideForms(),
  disableDeprecatedForms()
])
  .catch(err => console.error(err))