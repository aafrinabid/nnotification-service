import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { ConfigModule } from '@nestjs/config'
import { CronModule } from 'src/cron/cron.module';

@Module({
  imports: [ConfigModule, CronModule],
  controllers: [NotificationController],
  providers: [NotificationService]
})

export class NotificationModule { }
