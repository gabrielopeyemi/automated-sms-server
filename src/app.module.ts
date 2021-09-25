import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmsboxModule } from './smsbox/smsbox.module';

@Module({
  imports: [SmsboxModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
