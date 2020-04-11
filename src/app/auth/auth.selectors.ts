import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState} from './reducers';
import {throwMatDialogContentAlreadyAttachedError} from '@angular/material/dialog';

export const selectAuthenticationState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
  selectAuthenticationState,
  auth => !!auth.user
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);
