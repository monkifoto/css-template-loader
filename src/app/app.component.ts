import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TemplateLoaderComponent } from './template-loader/template-loader.component';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
     CommonModule,
    TemplateLoaderComponent,
  HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected to styleUrls
})
export class AppComponent {
  title = 'css-template-loader';
}
