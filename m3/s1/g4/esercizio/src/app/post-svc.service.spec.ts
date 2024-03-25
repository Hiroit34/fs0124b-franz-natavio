import { TestBed } from '@angular/core/testing';

import { PostSvcService } from './post-svc.service';

describe('PostSvcService', () => {
  let service: PostSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
