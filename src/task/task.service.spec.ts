import { Test, TestingModule } from '@nestjs/testing';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;
  let mockRepositroy = TaskRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskService],
    }).compile();

    service = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should fetch all pending task where is to be sent', async () =>{
    let fetchedList: Promise<Task[]>;
    jest.spyOn(mockRepositroy,'fetchAllPendingTasks').mockImplementation(()=>fetchedList)
    expect(await service.fetchAllPendingTasks(new Date)).toBe(fetchedList)
  })

  it('should update status of task where mail is sent', async () => {
    let updateStatus: Promise<boolean>;
    jest.spyOn(mockRepositroy,'updateEmailSentStatus').mockImplementation(()=>updateStatus)
    expect(await service.updateEmailSentTastus(1)).toBe(updateStatus)
  })
});
