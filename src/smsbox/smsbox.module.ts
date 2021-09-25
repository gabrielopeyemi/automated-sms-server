import { Module } from '@nestjs/common';
import { SmsboxController } from './smsbox.controller';
import { SmsboxService } from './smsbox.service';

@Module({
  controllers: [SmsboxController],
  providers: [SmsboxService]
})
export class SmsboxModule {}
