import { AppDataSource } from "src/app-data-source";
import { Task } from "./task.entity";

export const TaskRepository = AppDataSource.getRepository(Task).extend({
    async fetchAllPendingTasks(): Promise<Task[]> {
    try{
        const pendingTasks = await Task.find({where:{emailSent:false}}) 
        return pendingTasks
    }catch(e){
        console.log(e)

    } 
    },
    async updateEmailSentStatus(id:number): Promise<boolean>{
    try{
        const toBeUpdatedtask = await Task.findOne({where:{id}})
        toBeUpdatedtask.emailSent = true
        await toBeUpdatedtask.save()
        return true
} catch(e){
    console.log(e)
}
    }
})