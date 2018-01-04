import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormioComponent} from 'angular-formio';
import {Entity} from '../../shared/models';
import {FormioHelper, FormioRefreshType} from '../../shared/utils';
import {FormService} from '../services';
import {AbstractViewComponent} from "../abstract-view-component";

@Component({
  selector: 'xcs-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.scss']
})
export class EditViewComponent extends AbstractViewComponent implements OnInit {
  formJson: any;
  @Input() formSrc: string;
  @Output() submitted: EventEmitter<Entity> = new EventEmitter<Entity>();
  @ViewChild('form') form: FormioComponent;

  constructor(private formService: FormService) {
    super();
  }

  ngOnInit() {
    if (this.formSrc) {
      this.formService.loadForm(this.formSrc).subscribe(value => this.formJson = value);
      this.form.submit.subscribe(submission => {
        this.submitted.emit(FormioHelper.extractOnlyPayload(submission));
      }, error => {
        console.log(error);
      });
    }
  }

  loadPayload(payload: any) {
    this.form.onRefresh({property: FormioRefreshType.SUBMISSION, value: {data: payload}});
  }
}
