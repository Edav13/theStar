import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from 'src/app/shared/services/people.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  public film: any;
  public idPeople: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peopleService: PeopleService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.idPeople = parseInt(params['id']);
        this.peopleService.getFilmsId(params['film']).subscribe(
          (resp: any) => {
            console.log(resp)
            this.film = resp;
          });
      }
    });
  };

}
