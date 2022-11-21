import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
    fetchAllPendingTasks(date:Date): Promise<Task[]>{
        return TaskRepository.fetchAllPendingTasks(date)
    }

    async updateEmailSentTastus(id:number) :Promise<boolean>{
        try{
            return TaskRepository.updateEmailSentStatus(id)
        }catch(e){
            console.log(e)
        }
    }
}
