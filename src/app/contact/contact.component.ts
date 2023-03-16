import { Component, Input, OnInit } from '@angular/core';
import PhoneBookItem from 'src/model/PhoneBookItem';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact!: PhoneBookItem;

  constructor( public contactsService: ContactsService){}

  ngOnInit(): void{

  }
  
}
