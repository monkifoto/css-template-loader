import { Component, OnInit, Renderer2 } from '@angular/core';
import { CssTemplateService } from '../css-template.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  templates: any[] = []; // Initialize as an empty array
  private styleElement: HTMLStyleElement | null = null;

  constructor(private cssTemplateService: CssTemplateService, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Subscribe to the observable to get the templates
    this.cssTemplateService.getTemplates().subscribe(data => {
      this.templates = data; // Assign the data to the templates array
      console.log(this.templates); // Log the templates array to the console
    });
  }

  applyTemplate(css: string): void {
    if (this.styleElement) {
      this.renderer.removeChild(document.head, this.styleElement);
    }

    this.styleElement = this.renderer.createElement('style');
    this.styleElement!.innerHTML = css;
    this.renderer.appendChild(document.head, this.styleElement);
  }
}
