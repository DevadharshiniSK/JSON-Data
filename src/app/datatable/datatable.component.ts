import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit{
  
       constructor(private httpClient: HttpClient) {
        this.userdata=[];
       }

       ngOnInit(): void{
       this.Getallusers();
       }
    

       public userdata:any; 
        
       public Getallusers(){
           this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((result:any)=>
           {
            this.userdata=result;
            console.log(this.userdata);
           }
           )
        };
       }

