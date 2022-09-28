import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { FormQuestionBuilderDialogComponent } from '../../components/form-question-builder-dialog/form-question-builder-dialog.component';
import { QuestionModel } from '../../models/question.model';
import { FormService } from '../../services/form-builder.service';

@Component({
  selector: 'assessment-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormBuilderComponent {
  constructor(public dialog: MatDialog, public formService: FormService) {}

  public openDialog(): void {
    const dialogRef: MatDialogRef<FormQuestionBuilderDialogComponent, QuestionModel> = this.dialog.open(
      FormQuestionBuilderDialogComponent,
      {
        width: '450px'
      }
    );

    dialogRef.afterClosed().subscribe((result: QuestionModel | undefined) => {
      if (result) {
        const currentQ: QuestionModel[] = this.formService.questions$.getValue();
        currentQ.push(result);
        this.formService.questions$.next(currentQ);
      }
    });
  }
}
