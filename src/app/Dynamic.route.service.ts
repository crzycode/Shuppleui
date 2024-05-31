import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DynamicRouteService {
  constructor(private router: Router) {}

  addRoute(path: string, loadChildren: () => Promise<any>): void {
    this.router.config.push({ path, loadChildren });
    this.router.resetConfig(this.router.config);
  }
}
