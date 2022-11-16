import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import {ScheduleModule} from '@nestjs/schedule'
import { NotificationService } from './notification.service';
import { EmailService } from 'src/email/email.service';
import {ConfigModule} from '@nestjs/config'



@Module({
  imports:[ConfigModule],
  controllers: [NotificationController],
  providers:[NotificationService,EmailService]
})
export class NotificationModule {}
