import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import {ScheduleModule} from '@nestjs/schedule'
import { NotificationService } from './notification.service';
import { EmailService } from 'src/email/email.service';
import {ConfigModule} from '@nestjs/config'
import { TaskService } from 'src/task/task.service';
import { TasksRepository } from 'src/task/tasks.repository';
import { CronModule } from 'src/cron/cron.module';
import { TaskModule } from 'src/task/task.module';
import { EmailModule } from 'src/email/email.module';



@Module({
  imports:[ConfigModule ,CronModule],
  controllers: [NotificationController],
  providers:[NotificationService]
})

export class NotificationModule {}
