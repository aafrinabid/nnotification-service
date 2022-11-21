import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import {ScheduleModule} from '@nestjs/schedule'
import { NotificationService } from './notification.service';
import { EmailService } from 'src/email/email.service';
import {ConfigModule} from '@nestjs/config'
import { TaskService } from 'src/task/task.service';
import { TasksRepository } from 'src/task/tasks.repository';



@Module({
  imports:[ConfigModule],
  controllers: [NotificationController],
  providers:[NotificationService,EmailService,TaskService, TasksRepository]
})
export class NotificationModule {}
