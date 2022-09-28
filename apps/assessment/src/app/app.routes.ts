import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormAnswerComponent } from './routes/form-answer/form-answer.component';
import { FormBuilderComponent } from './routes/form-builder/form-builder.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'form/builder',
        component: FormBuilderComponent
      },
      {
        path: 'form/answers',
        component: FormAnswerComponent
      },
      {
        path: '**',
        redirectTo: 'form/builder',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
