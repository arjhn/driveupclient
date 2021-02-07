import { TestBed } from '@angular/core/testing';

import { BackserService } from './backser.service';

describe('BackserService', () => {
  let service: BackserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
