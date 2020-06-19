import { TestBed } from '@angular/core/testing';

import { MS19062020Service } from './ms-19-06-2020.service';

describe('MS19062020Service', () => {
  let service: MS19062020Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MS19062020Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
