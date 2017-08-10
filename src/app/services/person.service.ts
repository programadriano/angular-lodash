import { Injectable } from '@angular/core';

const persons = require('./persons.json');

import * as _ from 'lodash';

@Injectable()
export class PersonService {

  constructor() { }

  getAll() {
    let result = persons;
    return result;
  }

  getById(id: number) {
    let result = persons;

    result = _.find(persons, (person) => {
      return person.id = id;
    })

    return result;


  }

}
