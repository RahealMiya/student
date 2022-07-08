import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=[{"name":"Rahul","age":23,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8__Nzyv7MNSIA71YRqKt0rPoqEiSiZMZBOw&usqp=CAU"},
  {"name":"Miya","age":20,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8__Nzyv7MNSIA71YRqKt0rPoqEiSiZMZBOw&usqp=CAU"},
  {"name":"Akshaya","age":20,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8__Nzyv7MNSIA71YRqKt0rPoqEiSiZMZBOw&usqp=CAU"},
  {"name":"Sona","age":20,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8__Nzyv7MNSIA71YRqKt0rPoqEiSiZMZBOw&usqp=CAU"},
  {"name":"Aadhi","age":20,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8__Nzyv7MNSIA71YRqKt0rPoqEiSiZMZBOw&usqp=CAU"},
  {"name":"Anisha","age":20,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8__Nzyv7MNSIA71YRqKt0rPoqEiSiZMZBOw&usqp=CAU"}

  ]

}
