import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TasksRepository } from './tasks.repository';

@Module({
  providers: [TaskService, TasksRepository],
  exports:[TaskService]
})

export class TaskModule {}
