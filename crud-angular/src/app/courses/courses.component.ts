import { Component, OnInit } from '@angular/core';
import { Courses } from '../models/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Courses [] = [

    { _id: '1', name: 'Angular', categoria: 'front-end'}
  ];
  displayedColumns = ['name', 'categoria']

  constructor() { }

  ngOnInit(): void {
  }

}
