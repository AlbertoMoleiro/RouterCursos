import { Component } from '@angular/core';
import { Course } from '../_models/Course';
import { CoursesService } from '../services/courses.service';
@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent {
courses:Course[] = [];

  constructor(private coursesService:CoursesService) {
    this.courses = this.coursesService.courses;
   }
   

}
