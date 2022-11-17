import { Injectable } from '@nestjs/common';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
    fetchAllPendingTasks(){
        return TaskRepository.fetchAllPendingTasks()
    }

    async updateEmailSentTastus(id:number) {
        try{
            return TaskRepository.updateEmailSentStatus(id)
        }catch(e){
            console.log(e)
        }
    }
}
