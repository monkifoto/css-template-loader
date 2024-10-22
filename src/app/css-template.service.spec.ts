import { TestBed } from '@angular/core/testing';

import { CssTemplateService } from './css-template.service';

describe('CssTemplateService', () => {
  let service: CssTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CssTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
