import {Injectable} from '@angular/core';
import {Hero} from '../../entity/hero';
import {HEROS} from '../../entity/mock-heroes';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {
  }

  getHeroes(): Observable<Hero[]> {
    return of(HEROS);
  }

  getHero(id: number): Observable<Hero> {
    return of(HEROS.find(w => w.id === id));
  }
}
