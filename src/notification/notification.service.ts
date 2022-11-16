import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { EmailScheduleDto } from './emailSchedule.dto';
@Injectable()
export class NotificationService {
    constructor(
        private readonly emailService:EmailService,
        private readonly scheduleRegistry: SchedulerRegistry,
    ){}

    scheduleEmail(emailSchedule:EmailScheduleDto) {
        const date = new Date(emailSchedule.date)
        const job = new CronJob(date,()=>{
            this.emailService.sendMail({
                to: emailSchedule.recipient,
                subject: emailSchedule.subject,
                text: emailSchedule.content,
                from:'mohdaafrin@outlook.com'
            })
        });
        this.scheduleRegistry.addCronJob(`${Date.now()} - ${emailSchedule.subject}`,job)
        job.start()
        this.scheduleRegistry.getCronJobs().forEach((job)=>{
            job.start()
        })
        return {result:'email scheduled'}
    }


}


