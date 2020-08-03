import { TestBed } from '@angular/core/testing';

import { RebusService } from './rebus.service';

describe('RebusService', () => {
  let service: RebusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RebusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
