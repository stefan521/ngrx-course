import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { CourseActions } from "./action-types";
import { CoursesHttpService } from "./services/courses-http.service";
import { concatMap, map } from "rxjs/operators";
import { allCoursesLoaded } from "./course.actions";

@Injectable()
export class CoursesEffects {
    loadCourses$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(CourseActions.loadAllCourses), // react to this
                concatMap(action => this.coursesHttpService.findAllCourses()), // make one api call for all the courses
                map(courses => allCoursesLoaded({courses})) // dispatch a new action
            )
    )

    saveCourse$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(CourseActions.courseUpdated),
                concatMap(action => this.coursesHttpService.saveCourse(
                    action.update.id,
                    action.update.changes
                ))
            ),
            {dispatch: false}
    )

    constructor(private actions$: Actions, private coursesHttpService: CoursesHttpService) {

    }
}