import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})

export class InmemoryService {

  constructor() { }

  getPlayers(): Observable<Player[]> {
    return of([
      {
        name: "Sven Ulreich",
        position: "Keeper",
        jerseyNumber: 26,
        dateOfBirth: "1988-08-03",
        nationality: "Germany",
        contractUntil: "2018-06-30",
        marketValue: null
      }, {
        name: "Tom Starke",
        position: "Keeper",
        jerseyNumber: 22,
        dateOfBirth: "1981-03-18",
        nationality: "Germany",
        contractUntil: "2018-06-30",
        marketValue: null
      }, {
        name: "Javi Martínez",
        position: "Defensive-Midfield",
        jerseyNumber: 8,
        dateOfBirth: "1988-09-02",
        nationality: "Spain",
        contractUntil: "2021-06-30",
        marketValue: null
      }, {
        name: "David Alaba",
        position: "Left-Back",
        jerseyNumber: 27,
        dateOfBirth: "1992-06-24",
        nationality: "Austria",
        contractUntil: "2021-06-30",
        marketValue: null
      }, {
        name: "Juan Bernat",
        position: "Left-Back",
        jerseyNumber: 14,
        dateOfBirth: "1993-03-01",
        nationality: "Spain",
        contractUntil: "2019-06-30",
        marketValue: null
      }, {
        name: "Rafinha",
        position: "Right-Back",
        jerseyNumber: 13,
        dateOfBirth: "1985-09-07",
        nationality: "Brazil",
        contractUntil: "2018-06-30",
        marketValue: null
      }, {
        name: "Niklas Dorsch",
        position: "Defensive-Midfield",
        jerseyNumber: 30,
        dateOfBirth: "1998-01-15",
        nationality: "Germany",
        contractUntil: "2018-06-30",
        marketValue: null
      }, {
        name: "Arturo Vidal",
        position: "Central-Midfield",
        jerseyNumber: 23,
        dateOfBirth: "1987-05-22",
        nationality: "Chile",
        contractUntil: "2019-06-30",
        marketValue: null
      }, {
        name: "Franck Ribéry",
        position: "Left-Wing",
        jerseyNumber: 7,
        dateOfBirth: "1983-04-07",
        nationality: "France",
        contractUntil: "2018-06-30",
        marketValue: null
      }, {
        name: "Fabian Benko",
        position: "Attacking-Midfield",
        jerseyNumber: 40,
        dateOfBirth: "1998-06-05",
        nationality: "Croatia",
        contractUntil: "2018-06-30",
        marketValue: null
      }, {
        name: "Kingsley Coman",
        position: "Left-Wing",
        jerseyNumber: 29,
        dateOfBirth: "1996-06-13",
        nationality: "France",
        contractUntil: "2023-06-30",
        marketValue: null
      }, {
        name: "Arjen Robben",
        position: "Right-Wing",
        jerseyNumber: 10,
        dateOfBirth: "1984-01-23",
        nationality: "Netherlands",
        contractUntil: "2018-06-30",
        marketValue: null
      }, {
        name: "Sandro Wagner",
        position: "Centre-Forward",
        jerseyNumber: 2,
        dateOfBirth: "1987-11-29",
        nationality: "Germany",
        contractUntil: "2020-06-30",
        marketValue: null
      }, {
        name: "Christian Früchtl",
        position: "Keeper",
        jerseyNumber: 36,
        dateOfBirth: "2000-01-28",
        nationality: "Germany",
        contractUntil: "2018-06-30",
        marketValue: null
      }, {
        name: "Felix Götze",
        position: "Centre-Back",
        jerseyNumber: 20,
        dateOfBirth: "1998-02-11",
        nationality: "Germany",
        contractUntil: "2019-06-30",
        marketValue: null
      }, {
        name: "Kwasi Okyere Wriedt",
        position: "Centre-Forward",
        jerseyNumber: 28,
        dateOfBirth: "1994-07-10",
        nationality: "Ghana",
        contractUntil: "2020-06-30",
        marketValue: null
      },
      {
        name: "Roman Weidenfeller",
        position: "Keeper",
        jerseyNumber: 1,
        dateOfBirth: "1980-08-06",
        nationality: "Germany",
        contractUntil: "2018-06-30",
        marketValue: null
      }, {
        name: "Sokratis",
        position: "Centre-Back",
        jerseyNumber: 25,
        dateOfBirth: "1988-06-09",
        nationality: "Greece",
        contractUntil: "2019-06-30",
        marketValue: null
      }, {
        name: "Marcel Schmelzer",
        position: "Left-Back",
        jerseyNumber: 29,
        dateOfBirth: "1988-01-22",
        nationality: "Germany",
        contractUntil: "2021-06-30",
        marketValue: null
      }, {
        name: "Erik Durm",
        position: "Right-Back",
        jerseyNumber: 37,
        dateOfBirth: "1992-05-12",
        nationality: "Germany",
        contractUntil: "2019-06-30",
        marketValue: null
      }, {
        name: "Julian Weigl",
        position: "Defensive-Midfield",
        jerseyNumber: 33,
        dateOfBirth: "1995-09-08",
        nationality: "Germany",
        contractUntil: "2021-06-30",
        marketValue: null
      }, {
        name: "Gonzalo Castro",
        position: "Central-Midfield",
        jerseyNumber: 27,
        dateOfBirth: "1987-06-11",
        nationality: "Germany",
        contractUntil: "2020-06-30",
        marketValue: null
      }, {
        name: "Sebastian Rode",
        position: "Central-Midfield",
        jerseyNumber: 18,
        dateOfBirth: "1990-10-11",
        nationality: "Germany",
        contractUntil: "2020-06-30",
        marketValue: null
      }, {
        name: "Nuri Sahin",
        position: "Defensive-Midfield",
        jerseyNumber: 8,
        dateOfBirth: "1988-09-05",
        nationality: "Turkey",
        contractUntil: "2019-06-30",
        marketValue: null
      }, {
        name: "Mario Götze",
        position: "Attacking-Midfield",
        jerseyNumber: 10,
        dateOfBirth: "1992-06-03",
        nationality: "Germany",
        contractUntil: "2020-06-30",
        marketValue: null
      }, {
        name: "André Schürrle",
        position: "Left-Wing",
        jerseyNumber: 21,
        dateOfBirth: "1990-11-06",
        nationality: "Germany",
        contractUntil: "2021-06-30",
        marketValue: null
      }, {
        name: "Christian Pulisic",
        position: "Right-Wing",
        jerseyNumber: 22,
        dateOfBirth: "1998-09-18",
        nationality: "United States",
        contractUntil: "2020-06-30",
        marketValue: null
      }, {
        name: "Alexander Isak",
        position: "Centre-Forward",
        jerseyNumber: 14,
        dateOfBirth: "1999-09-21",
        nationality: "Sweden",
        contractUntil: "2022-06-30",
        marketValue: null
      }, {
        name: "Mahmoud Dahoud",
        position: "Central-Midfield",
        jerseyNumber: 19,
        dateOfBirth: "1996-01-01",
        nationality: "Germany",
        contractUntil: "2022-06-30",
        marketValue: null
      }, {
        name: "Ömer Toprak",
        position: "Centre-Back",
        jerseyNumber: 36,
        dateOfBirth: "1989-07-21",
        nationality: "Turkey",
        contractUntil: "2021-06-30",
        marketValue: null
      }, {
        name: "Maximilian Philipp",
        position: "Left-Wing",
        jerseyNumber: 20,
        dateOfBirth: "1994-03-01",
        nationality: "Germany",
        contractUntil: "2022-06-30",
        marketValue: null
      }, {
        name: "Jeremy Toljan",
        position: "Right-Back",
        jerseyNumber: 15,
        dateOfBirth: "1994-08-08",
        nationality: "Germany",
        contractUntil: "2022-06-30",
        marketValue: null
      }, {
        name: "Dominik Reimann",
        position: "Keeper",
        jerseyNumber: 35,
        dateOfBirth: "1997-06-18",
        nationality: "Germany",
        contractUntil: "2018-06-30",
        marketValue: null
      }, {
        name: "Dan-Axel Zagadou",
        position: "Centre-Back",
        jerseyNumber: 2,
        dateOfBirth: "1999-06-03",
        nationality: "France",
        contractUntil: "2022-06-30",
        marketValue: null
      }, {
        name: "Jadon Sancho",
        position: "Left-Wing",
        jerseyNumber: 7,
        dateOfBirth: "2000-03-25",
        nationality: "England",
        contractUntil: "2020-06-30",
        marketValue: null
      }, {
        name: "Sergio Gómez",
        position: "Left-Wing",
        jerseyNumber: 34,
        dateOfBirth: "2000-09-04",
        nationality: "Spain",
        contractUntil: "2021-06-30",
        marketValue: null
      }, {
        name: "Andriy Yarmolenko",
        position: "Right-Wing",
        jerseyNumber: 9,
        dateOfBirth: "1989-10-23",
        nationality: "Ukraine",
        contractUntil: "2021-06-30",
        marketValue: null
      }
    ]);
  }
}
