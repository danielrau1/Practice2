import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'; // (3) Importing the Service

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  users: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }






//   constructor(private data: DataService) {} // (3)Create dependancy injection in the constructor for the Service
//
//
//   //(1) Define the firstClick method that referenced in the home.compoenent.html
//
//   message:string;
//   firstClick1(e){
// this.message=e;
//   }
//
//   //(2) 2 way binding components
//   email1:string = "dan@ex.com"; // The starting default value of the bound variable
//
//
// //(4) Import from the web
// users: Object; // The imported data will be stored in users
//   // As the web page opens import he data and put it into the users object created above
//   ngOnInit() {
//     this.data.getUsers().subscribe(data => {
//       this.users = data;
//     });
//   }


}
