import { Test, TestingModule } from '@nestjs/testing';
import { SmsboxService } from './smsbox.service';

describe('SmsboxService', () => {
  let service: SmsboxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmsboxService],
    }).compile();

    service = module.get<SmsboxService>(SmsboxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
