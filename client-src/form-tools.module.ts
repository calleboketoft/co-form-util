import { NgModule } from '@angular/core'
import { ErrorMessageComponent } from './error-message.component'
import { InputWrapComponent } from './input-wrap.component'

@NgModule({
  declarations: [
    ErrorMessageComponent,
    InputWrapComponent
  ],
  exports: [
    ErrorMessageComponent,
    InputWrapComponent
  ]
})
export class FormToolsModule {}
