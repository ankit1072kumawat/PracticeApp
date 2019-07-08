import { TestBed } from '@angular/core/testing';

import { CustomerhttpService } from './customerhttp.service';

describe('CustomerhttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerhttpService = TestBed.get(CustomerhttpService);
    expect(service).toBeTruthy();
  });
});
