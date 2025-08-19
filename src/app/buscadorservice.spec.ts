import { TestBed } from '@angular/core/testing';

import { Buscadorservice } from './buscadorservice';

describe('Buscadorservice', () => {
  let service: Buscadorservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Buscadorservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
