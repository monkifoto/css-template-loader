import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateLoaderComponent } from './template-loader.component';

describe('TemplateLoaderComponent', () => {
  let component: TemplateLoaderComponent;
  let fixture: ComponentFixture<TemplateLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
