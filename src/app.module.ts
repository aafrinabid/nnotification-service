import { Module } from '@nestjs/common';
import { NotificationModule } from './notification/notification.module';
import {ScheduleModule} from '@nestjs/schedule'
import {ConfigModule} from '@nestjs/config'
import { CronModule } from './cron/cron.module';
import { TaskModule } from './task/task.module';
import configuration from './config/configuration';
import {TypeOrmModule} from '@nestjs/typeorm'
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [ConfigModule.forRoot({
    load: [configuration],
    expandVariables:true,
  }),
  TypeOrmModule.forRoot(typeOrmConfig),
  ScheduleModule.forRoot(),
  NotificationModule,
  CronModule,
  TaskModule],
})
export class AppModule {}
