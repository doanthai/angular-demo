import { Injectable } from '@angular/core';
import {Hero} from '../../heroes/hero';
import {HEROS} from '../../heroes/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes(): Hero[] {
    return HEROS;
  }
}
