import { TestBed } from '@angular/core/testing';

import { ResulthandleService } from './resulthandle.service';

describe('ResulthandleService', () => {
  let service: ResulthandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResulthandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
