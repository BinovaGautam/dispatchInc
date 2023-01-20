import { LevelsList, TaskSetType, UserBaseType } from "@/Models";

class LevelsSerializer {

    static getUserLevels(user: any): LevelsList[] {
        console.log('USER SERIALIZERS CALLED AGAIN')
        let levels = []
        if (user?.levels && user?.levels?.length > 0) {
            levels = user.levels.map((level: any): LevelsList => {
                let taskSets = level.userSets.map((set: any): TaskSetType => {
                    let { setMaster } = set || { setMaster: {} }
                    return {
                        achievedPoints: set.achievedPoint || 0,
                        active: set.active,
                        assignedAt: set.assignedAt,
                        id: set.id,
                        status: set.status,
                        LevelId: set.LevelId,
                        assets: setMaster.assets,
                        description: setMaster.description,
                        setId: setMaster.id,
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
                    totalPoints : level.totalPoints,
                    title: level.title,
                    id: level.id,
                    taskSet: taskSet,
                }
            });
        }
        //assuming data comes in serialized way
        let lastUnlockedIndex = levels.reverse().findIndex((level: LevelsList) => level.isLocked === false);
        if (lastUnlockedIndex !== -1) {
            levels[lastUnlockedIndex].isCurrentLevel = true;
        }
        return levels.reverse();
    }


}


export default LevelsSerializer;

