import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'assessment-form-answer',
  templateUrl: './form-answer.component.html',
  styleUrls: ['./form-answer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormAnswerComponent {}
