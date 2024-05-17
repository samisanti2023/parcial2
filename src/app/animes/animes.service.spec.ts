/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AnimesService } from './animes.service';

describe('Service: Animes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimesService]
    });
  });

  it('should ...', inject([AnimesService], (service: AnimesService) => {
    expect(service).toBeTruthy();
  }));
});
