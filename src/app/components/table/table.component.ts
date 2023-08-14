import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  constructor(private api:ApiService){}
  users:User[]=[]


  ngOnInit(){
    this.api.getUsers().subscribe((data)=>this.users=data)
  }
  test(){
    console.log(this.users)
  }
}
