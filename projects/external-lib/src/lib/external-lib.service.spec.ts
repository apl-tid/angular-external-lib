import { TestBed } from '@angular/core/testing';

import { ExternalLibService } from './external-lib.service';

describe('ExternalLibService', () => {
  let service: ExternalLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
