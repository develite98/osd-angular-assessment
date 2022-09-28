import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { FormQuestionBuilderDialogComponent } from './components/form-question-builder-dialog/form-question-builder-dialog.component';
import { FormBuilderComponent } from './routes/form-builder/form-builder.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, FormBuilderComponent, FormQuestionBuilderDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    MatDialogModule,
    MatRadioModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
