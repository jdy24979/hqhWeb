import { TestBed, inject } from '@angular/core/testing';

import { SortDataService } from './sort-data.service';

describe('SortDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SortDataService]
    });
  });

  it('should be created', inject([SortDataService], (service: SortDataService) => {
    expect(service).toBeTruthy();
  }));
});
