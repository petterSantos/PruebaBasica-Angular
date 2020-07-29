import { Component } from '@angular/core';

import {DataService} from './data.service';
//import { Data } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 name: string = "Petter Santos";
 age:number;
 address: {
   street: string;
   city: string;
 };
 hobbies: string[];
 users: string[] = ['Petter','Carla','Frescia'];
 posts = [];

 sayHello(){
   alert('Hola a todos');
 };

 deleteUser(user){
  for(let i=0; i < this.users.length; i++){
    if(user == this.users[i]){
      this.users.splice(i,1);
    }
  }
 };
 addUser(newUser){
  console.log(newUser.value);
  this.users.push(newUser.value); 
  newUser.value = "";
  newUser.focus(); 
  return false;
  
 };
 constructor(private dataService:DataService){
   this.dataService.getData().subscribe(data =>{
     this.posts = data;
   })
   this.age = 44;
   this.address = {
     street:'Mariscal Caceres D-9',
     city: 'Quillabamba',
   };
   this.hobbies=['basketball','farmer','read'];
 }
}
