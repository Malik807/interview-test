import { TestBed, inject } from '@angular/core/testing';

import { InmemoryService } from './inmemory.service';

describe('InmemoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InmemoryService]
    });
  });

  it('should be created', inject([InmemoryService], (service: InmemoryService) => {
    expect(service).toBeTruthy();
  }));
});
