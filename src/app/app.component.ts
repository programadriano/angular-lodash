import { Component } from '@angular/core';
import { PersonService } from "./services/person.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public personService: PersonService) {   

    console.log(personService.getAll());
    
    console.log(personService.getById(1));

  }


}
