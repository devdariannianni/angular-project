import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  person = {
    name: "Dennis Schulist",
      isStudent: false,
      email: "Karley_Dach@jasper.info",
      address: {
        street: "Norberto Crossing",
        suite: "Apt. 950",
        city: "South Christy",
        zipcode: 23505-1337,
  }
}

getActivatedPerson(activatedPerson:any){
  this.person = activatedPerson;
  console.log(this.person);
  
}

}
