import { Test, TestingModule } from '@nestjs/testing';
import { SmsboxController } from './smsbox.controller';

describe('SmsboxController', () => {
  let controller: SmsboxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmsboxController],
    }).compile();

    controller = module.get<SmsboxController>(SmsboxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
