import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CssTemplateService {
  private templates = [
    { id: 1, name: 'Template 1', css: `
      body { font-family: Arial, sans-serif; }
      header { background-color: #fff; text-align: center; padding: 20px; }
      .hero { background-color: #f0f8ff; padding: 50px 20px; text-align: center; }
      .gallery { padding: 20px; }
      .gallery-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
      .gallery-item { background-color: #add8e6; height: 200px; display: flex; align-items: left; justify-content: center; }
    ` },
    { id: 2, name: 'Template 2', css: `
      body { font-family: Arial, sans-serif; }
      header { background-color: #fff; text-align: center; padding: 20px; }
      .hero { background-color: #ffe4e1; padding: 50px 20px; text-align: center; }
      .gallery { padding: 20px; }
      .gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; }
      .gallery-item { background-color: #ffb6c1; height: 200px; display: flex; align-items: center; justify-content: center; }
    ` },
    { id: 3, name: 'Template 3', css: `
      body { font-family: Arial, sans-serif; }
      header { background-color: #fff; text-align: center; padding: 20px; }
      .hero { background-color: #e6e6fa; padding: 50px 20px; text-align: center; }
      .gallery { padding: 20px; }
      .gallery-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 35px; }
      .gallery-item { background-color: #d8bfd8; height: 200px; display: flex; align-items: center; justify-content: right; }
    ` }
  ];

  constructor() { }

  getTemplates(): Observable<any[]> {
    return of(this.templates);
  }
}
