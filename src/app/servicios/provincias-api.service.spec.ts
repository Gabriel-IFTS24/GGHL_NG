import { TestBed } from '@angular/core/testing';

import { ProvinciasApiService } from './provincias-api.service';

describe('ProvinciasApiService', () => {
  let service: ProvinciasApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvinciasApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
