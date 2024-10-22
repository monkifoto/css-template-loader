import { Component, OnInit, Renderer2 } from '@angular/core';
import { CssTemplateService } from '../css-template.service';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-template-loader',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './template-loader.component.html',
  styleUrls: ['./template-loader.component.css']
})
export class TemplateLoaderComponent implements OnInit {
  templates: any[] = [];
  private styleElement: HTMLStyleElement | null = null;

  constructor(private cssTemplateService: CssTemplateService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.cssTemplateService.getTemplates().subscribe(data => {
      this.templates = data;
    });
  }

  applyTemplate(css: string): void {
    // Remove existing style element if it exists
    if (this.styleElement) {
      this.renderer.removeChild(document.head, this.styleElement);
    }

    // Create a new style element
    this.styleElement = this.renderer.createElement('style');
    this.styleElement!.innerHTML = css;

    // Append the new style element to the head
    this.renderer.appendChild(document.head, this.styleElement);
  }
}
