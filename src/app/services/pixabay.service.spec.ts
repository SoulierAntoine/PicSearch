import { TestBed, inject } from '@angular/core/testing';

import { PixabayService } from './pixabay.service';

describe('PixabayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PixabayService]
    });
  });

  it('should be created', inject([PixabayService], (service: PixabayService) => {
    expect(service).toBeTruthy();
  }));
});
