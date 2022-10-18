import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from 'src/app/shared/services/people.service';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit {

  public people: any;
  public idPeople: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peopleService: PeopleService
  ) {
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.idPeople = parseInt(params['id']);
        this.peopleService.getPeoplesId(params['id']).subscribe(
          (resp: any) => {
            this.people = resp;
          });
      }
    });
  };

  splitLast(film: string): any{
    let array = film.split("/");
    return array[array.length - 2];
  }

}
