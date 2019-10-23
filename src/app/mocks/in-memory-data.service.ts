import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const todosMock = [
      {
        id: 1,
        title: 'Develop',
        description: 'I have to develop a wonderful project called Overkill Todo ;)',
        completed: false
      },
      {
        id: 2,
        title: 'Eat',
        description: 'Otherwise I can\'t develop anymore ;p',
        completed: false
      },
      {
        id: 3,
        title: 'Read computer science review',
        description: 'I should stay informed about computer science :) ',
        completed: false
      }
    ];
    return { todosMock };
  }
}
