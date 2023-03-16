import { Injectable } from '@angular/core';
import PhoneBook from '../../model/PhoneBook'
import PhoneBookItem from '../../model/PhoneBookItem';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  phonebook: PhoneBook;
  constructor() { 
    this.phonebook = new PhoneBook;
  }

  addItem(name: any, number: any){
    //alert(`Name: ${name}\nPhone number: ${number}`);
    let contact = new PhoneBookItem(name, number, new Date());
    this.phonebook.add(contact);
  }

  deleteItem(contact: any){
    this.phonebook.delete(contact);
  }

}
