import { TestBed } from '@angular/core/testing';

import { TestiService } from './testi.service';

describe('TestiService', () => {
  let service: TestiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
