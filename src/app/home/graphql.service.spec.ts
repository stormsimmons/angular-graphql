import { TestBed, inject } from '@angular/core/testing';

import { GraphqlService } from './graphql.service';

describe('GrapgqlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphqlService]
    });
  });

  it('should be created', inject([GraphqlService], (service: GraphqlService) => {
    expect(service).toBeTruthy();
  }));
});
