import { createAction, props } from '@ngrx/store';
import { Course } from './model/course';
import { Update } from '@ngrx/entity';

// a resolver is going to trigger this
export const loadAllCourses = createAction(
    "[Courses Resolver] Load All Courses"
);

// the effect will listen for the loadAllCourses and call the backend.
// more of an event than a command
export const allCoursesLoaded = createAction(
    "[Load Courses Effect] All Courses Loaded",
    props<{courses: Course[]}>() // payload. when this is done a reducer will grab it.
);

export const courseUpdated = createAction(
    "[Edit Course Dialog] CourseUpdated",
    props<{update: Update<Course>}>()
);