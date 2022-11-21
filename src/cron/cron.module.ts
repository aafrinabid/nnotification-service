import { Module } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import { TaskService } from 'src/task/task.service';
import { TasksRepository } from 'src/task/tasks.repository';
import { CronService } from './cron.service';
import {ConfigModule} from '@nestjs/config'


@Module({
  imports:[ConfigModule],
  providers: [CronService,TaskService,EmailService, TasksRepository]
})
export class CronModule {}
