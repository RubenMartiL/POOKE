import { TestBed } from '@angular/core/testing';

import { LoginNeedGuard } from './login-need.guard';

describe('LoginNeedGuard', () => {
  let guard: LoginNeedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginNeedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
