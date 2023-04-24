import { TestBed } from '@angular/core/testing';

import { ChatGptApiService } from './chat-gpt-api.service';

describe('ChatGptApiService', () => {
  let service: ChatGptApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatGptApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
