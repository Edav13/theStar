import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../shared/services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  public listPeople: Array<any> = [];

  constructor(
    private peopleService: PeopleService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData(): void {
    this.peopleService.getPeoples().subscribe(
      (resp: any) => {
        this.listPeople = resp.results;
      });
  };

}
