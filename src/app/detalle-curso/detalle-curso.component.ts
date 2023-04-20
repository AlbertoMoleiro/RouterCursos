import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { Course, Level } from '../_models/Course';




@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.css']
})
export class DetalleCursoComponent {

    action: string |null="";
    course: Course = new Course('', 0, Level.BEGINNER);

    name: string = '';
    duration: number = 0;
    level: Level = Level.BEGINNER;

    levels: Level[] = Object.values(Level);


    constructor(private route: ActivatedRoute, private coursesService: CoursesService, private router: Router) { }

    ngOnInit(): void {
        this.route.queryParamMap.subscribe((params: ParamMap) => {
            this.action = params.get('action');
            let id = params.get('id');
            this.course = this.coursesService.getCourseById(Number(id));

            this.name = this.course.name;
            this.duration = this.course.duration;
            this.level = this.course.level;
        });
    }

    updateCourse(): void {
        this.course.name = this.name;
        this.course.duration = this.duration;
        this.course.level = this.level;
        this.coursesService.updateCourse(this.course);
    }

}
