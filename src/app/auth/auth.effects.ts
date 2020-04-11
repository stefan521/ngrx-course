import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthActions} from './action-types';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable() // this should not be injected anywhere in the code. it's only for NgRx magic
export class AuthEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.login),
    tap(action => localStorage.setItem(
      'user',
      JSON.stringify(action))
    )
  ),
    {dispatch: false});

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logout),
    tap(action => {
      localStorage.removeItem('user');

      this.router.navigateByUrl('/login');
    })
  ),
    {dispatch: false});

  constructor(private actions$: Actions,
              private router: Router) {
  }
}
