import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PeopleService } from '../../shared/services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, OnDestroy {

  private _subscription: Subscription[] = new Array<any>;
  public listPeople: Array<any> = [];

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
        })
    );
  };

  ngOnDestroy(): void {
    this._subscription.map((next) => next.unsubscribe);
  }
}
