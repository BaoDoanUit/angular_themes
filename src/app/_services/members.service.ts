import { Injectable } from '@angular/core';
import { PersonInfo, PersonReply, PersonRequest, UserInfo, UserRequest } from 'src/proto/user.pb';
import { PersonClient, UserClient } from 'src/proto/user.pbsc';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MembersService {

  persons: PersonReply= new PersonReply();

  constructor(private userClient: UserClient, private personClient : PersonClient) {
    
  }

  logIn(request: UserInfo) {
    return this.userClient.logIn(request);
  }

  getPersons(request: PersonRequest) {
    console.log(this.persons);
    if(this.persons.data!.length > 0) return of(this.persons);
    return this.personClient.getListPerson(request).pipe(
      map((response:PersonReply)=> {
        this.persons = response;
        // console.log(response);
        console.log('get data');

        return this.persons;
      })
    )
  }

  getPerson(codePerson: string){
    const person = this.persons.data!.find(p => p.codePerson === codePerson);
    if(person !== undefined) return of(person);
    return of(null);
  }

  updatePerson(person: PersonInfo){
    return this.personClient.updatePerson(person).pipe(
      map(()=>{
        const index = this.persons.data!.indexOf(person);
        this.persons.data![index] = person;
      })
      )
  }
}
