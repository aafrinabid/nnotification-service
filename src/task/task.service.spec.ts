import { Test, TestingModule } from '@nestjs/testing';
import { Task } from './task.entity';
import { TaskService } from './task.service';
import { TasksRepository } from './tasks.repository';

describe('TaskService', () => {
  let service: TaskService;
  let mockRepositroy: TasksRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskService, TasksRepository],
    }).compile();

    service = module.get<TaskService>(TaskService);
    mockRepositroy = module.get<TasksRepository>(TasksRepository)
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should fetch all pending task where is to be sent', async () =>{
    let fetchedList: Promise<Task[]>;
    jest.spyOn(mockRepositroy,'FetchAllPendingTasks').mockImplementation(()=>fetchedList)
    expect(await service.fetchAllPendingTasks(new Date)).toBe(fetchedList)
  })

  it('should update status of task where mail is sent', async () => {
    let updateStatus: Promise<boolean>;
    jest.spyOn(mockRepositroy,'UpdateEmailSentStatus').mockImplementation(()=>updateStatus)
    expect(await service.updateEmailSentTastus(1)).toBe(updateStatus)
  })
});
