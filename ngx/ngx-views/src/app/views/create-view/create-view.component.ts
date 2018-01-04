import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AbstractViewComponent} from '../abstract-view-component';
import {FormService} from '../services';
import {Entity} from "../../shared/models";
import {FormioComponent} from "angular-formio";
import {FormioHelper} from "../../shared/utils";

@Component({
  selector: 'xcs-create-view',
  templateUrl: './create-view.component.html',
  styleUrls: ['./create-view.component.scss']
})
export class CreateViewComponent extends AbstractViewComponent implements OnInit {

  createFormJson: any;
  @Input() formSrc: string;
  @Output() submitted: EventEmitter<Entity> = new EventEmitter<Entity>();
  @ViewChild('createEntityForm') createEntityForm: FormioComponent;

  constructor(private formService: FormService) {
    super();
  }

  ngOnInit() {
    if (this.formSrc) {
      this.formService.loadForm(this.formSrc).subscribe(value => this.createFormJson = value);
      this.createEntityForm.submit.subscribe(submission => {
        this.submitted.emit(FormioHelper.extractOnlyPayload(submission));
      }, error => {
        console.log(error);
      });
    }
  }

}
