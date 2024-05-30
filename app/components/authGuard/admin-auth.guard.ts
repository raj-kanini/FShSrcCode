import { CanActivateFn } from '@angular/router';

export const adminAuthGuard: CanActivateFn = (route, state) => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('userRole'); 

    if (token && userRole === 'Admin') {
      return true;
    } else {
      window.location.href = '/signup';
      return false;
    }
  };
