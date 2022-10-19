import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { PeopleService } from 'src/app/shared/services/people.service';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit, OnDestroy {

  private _subscription: Subscription[] = new Array<any>;
  public people: any;
  public idPeople: number = 0;
  public films: Array<any> = new Array<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peopleService: PeopleService
  ) { };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.idPeople = parseInt(params['id']);
        this._subscription.push(
          this.peopleService.getPeoplesId(this.idPeople).subscribe(
            (resp: any) => {
              this.people = resp;
              this.films = [];
              let arrayFilm: Array<any> = new Array;
              resp.films.forEach((element: any) => {
                arrayFilm = element.split('/');
                this._getNameFilm(arrayFilm[arrayFilm.length - 2])
              });
            })
        );
      }
    });
  };

  private async _getNameFilm(idFilm: number) {
    try {
      let test: any = await this.peopleService.getFilmsId(idFilm).toPromise();
      if (test) {
        this.films.push({ id: idFilm, name: test.title });
      }
    } catch (err) {
      console.error(err);
    };
  };

  public splitLast(film: string): any {
    let array = film.split('/');
    return array[array.length - 2];
  };

  ngOnDestroy(): void {
    this._subscription.map((next) => next.unsubscribe);
  }
}
