import { Test, TestingModule } from '@nestjs/testing';
import { EmailService } from '../email/email.service';
import { Task } from '../task/task.entity';
import { TaskService } from '../task/task.service';
import { CronService } from './cron.service';
import {ConfigService} from '@nestjs/config'


describe('CronService', () => {
  let service: CronService;
  let taskService: TaskService
  let emailService: EmailService
  let configService: ConfigService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigService,CronService,TaskService,EmailService],
    }).compile();

    service = module.get<CronService>(CronService);
    taskService = module.get<TaskService>(TaskService);
    emailService = module.get<EmailService>(EmailService);
    configService = module.get<ConfigService>(ConfigService)
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('it should schedule all mails that need to be sent by checking the reminder', async ()=> {
    let fetchedList: Promise<Task[]>
    let scheduledMailResult: Promise<boolean> 
    let updatedTaskEmailStatus: Promise<boolean>
    let finalResult : Promise<void>
    jest.spyOn(taskService,'fetchAllPendingTasks').mockImplementation(()=>fetchedList)
    jest.spyOn(emailService,'sendMail').mockImplementation(()=> scheduledMailResult)
    jest.spyOn(taskService,'updateEmailSentTastus').mockImplementation(()=>updatedTaskEmailStatus)
    expect(await service.checkScheduledMails()).toBe(finalResult)
  })
});
