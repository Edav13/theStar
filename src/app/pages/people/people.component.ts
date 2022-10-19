import { Component, OnDestroy, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Subscription } from 'rxjs';

import { PeopleService } from '../../shared/services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, OnDestroy {

  private _subscription: Subscription[] = new Array<any>;
  public ColumnMode = ColumnMode;
  public listPeople: Array<any> = [];
  public columns: Array<any> = [
    { prop: 'name', name: 'Name' },
    { prop: 'gender', name: 'Gender' },
    { prop: 'hair_color', name: 'Hair Color' },
    { prop: 'height', name: 'Height' },
    { prop: 'id', name: 'Action', sortable: true }
  ];

  constructor(
    private peopleService: PeopleService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData(): void {
    this._subscription.push(
      this.peopleService.getPeoples().subscribe(
        (resp: any) => {
          this.listPeople = resp.results;
          this.listPeople.forEach((element, i) => {
            element.id = i + 1;
          });
        })
    );
  };

  ngOnDestroy(): void {
    this._subscription.map((next) => next.unsubscribe);
  }
}
