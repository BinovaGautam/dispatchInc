import { LevelsList, TaskSetType, UserBaseType } from "@/Models";

class UserSerialLizer {
    static getUserLevels(user: any): UserBaseType {
        console.log('USER SERIALIZERS CALLED AGAIN')
        let levels = []
        if(user?.levels && user?.levels?.length > 0){
            levels = user.levels.map((level: any) : LevelsList => {
                let taskSets = level.userSets.map((set: any) : TaskSetType => {
                    let {setMaster} = set || {setMaster : {}}
                    return {
                        achievedPoints: set.achievedPoints,
                        active: set.active,
                        assignedAt: set.assignedAt,
                        id: set.id,
                        status: set.status,
                        LevelId: set.LevelId,
                        assets: setMaster.assets,
                        description: setMaster.description,
                        setId: setMaster.setId,
                        lastUpdatedAt: set.lastUpdatedAt,
                    }
                });
                let taskSet = taskSets[0] || {}
                return {
                    active: level.active,
                    createdAt: level.createdAt,
                    description: level.description,
                    isLocked: level.isLocked,
                    targetPoint: level.targetPoints,
                    title: level.title,
                    id: level.id,
                    taskSet: taskSet,
                }
            });
        }
        console.log('LEVELS DATA GOES HERE',levels)
        let data = {
            id: user.id,
            name: user?.name,
            email: user?.email,
            phone: user?.phone,
            levels: levels
        }
        console.log('USER SERIALIZERS CALLED DATA', data)
        return data;
    }


}


export default UserSerialLizer;

