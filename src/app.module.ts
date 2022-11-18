import { Module } from '@nestjs/common';
import { NotificationModule } from './notification/notification.module';
import {ScheduleModule} from '@nestjs/schedule'
import {ConfigModule} from '@nestjs/config'
import { CronModule } from './cron/cron.module';
import { TaskModule } from './task/task.module';
import configuration from './config/configuration';
import {ConfigService} from '@nestjs/config'

@Module({
  imports: [ConfigModule.forRoot({
    load: [configuration],
    expandVariables:true,
  }),ScheduleModule.forRoot(),
  NotificationModule,
  CronModule,
  TaskModule],
  providers: [],
})
export class AppModule {}
