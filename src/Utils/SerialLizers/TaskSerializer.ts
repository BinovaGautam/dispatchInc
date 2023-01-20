import { LevelsList, TaskItemDetails, TaskSetType, UserBaseType } from "@/Models";

class TaskSerializer {

    static getLevelTasks(data: any): TaskItemDetails[] {
        // let  {userTasks} = data || {userTasks : []}
        let userTasks = data || [];
        console.log('USER TASKS',userTasks);
        let tasks : TaskItemDetails[]  = []
        if(userTasks && userTasks.length > 0){
             tasks = userTasks.map((task: any) : TaskItemDetails => {
                let {taskMaster = {}} = task || {taskMaster : {}}
                return {
                    id : task.id,
                    active: task.active,
                    title: taskMaster.title,
                    description: taskMaster.description,
                    assets: taskMaster.assets,
                    points : taskMaster.points,
                    type : taskMaster.duration,
                    verificationType: taskMaster.verify ,
                    pointsEarned: task.redeemedPoints,
                    actions : task.actions,
                    status : task.status,
                }
            });
           
        }
    
        return tasks; 
    }

}


export default TaskSerializer;

