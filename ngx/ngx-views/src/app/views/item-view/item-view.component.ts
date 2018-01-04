import {Component, OnInit} from '@angular/core';
import {EntityService} from '../services';
import {ActivatedRoute} from '@angular/router';
import {AbstractViewComponent} from '../abstract-view-component';
import {Entity} from "../../shared/models";

@Component({
  selector: 'xcs-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent extends AbstractViewComponent implements OnInit {
  keys: string[];
  columnFirstKeys: string[];
  columnSecondKeys: string[];
  entity: Entity;

  constructor(private entityService: EntityService,
              private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.route.params.subscribe(value => {
      this.entityService.findOne(value['id'], {key: ''})
        .subscribe(entity => {
          this.entity = entity;
          this.keys = Object.keys(entity);
          const splitter = this.keys.length / 2 + 1;
          this.columnFirstKeys = this.keys.slice(0, splitter);
          this.columnSecondKeys = this.keys.slice(splitter, this.keys.length);
        });
    });
  }
}
