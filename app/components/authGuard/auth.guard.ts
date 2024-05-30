import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const token = localStorage.getItem('token');
  if (token) {
    // Token exists, allow navigation to requested page
    return true;
  } else {
    // Token does not exist, redirect to signup page
    window.location.href = '/signup';
    return false;
  }
};
