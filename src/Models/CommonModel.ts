export interface AssetType {
    name: string,
    assetType ?: string,
    url?: string,
    size?: number,
    isPrimary?: boolean,
}

export interface TaskItemDetails {
    title: string,
    description: string,
    points: number,
    rewardType?: string,
    isLocked?: boolean,
    isCompleted?: boolean,
    id: number,
    assets?: AssetType[],
    type ? : string,
    active ?: boolean,
    pointsEarned ? : boolean,
    actions ? : TaskActionType[],
    status?: statusType,
    verificationType?: 'AUTO' | 'BYADMIN',
}

export interface TaskSetType {
    achievedPoints: number,
    active?: boolean,
    assignedAt: string,
    id: number,
    LevelId: number,
    assets?: AssetType[],
    description?: string,
    setId: number,
    status?: string,
    lastUpdatedAt?: string,
}

export interface LevelsList {
    active: boolean,
    createdAt: string,
    description: string,
    isLocked: boolean,
    targetPoint: number,
    totalPoints? :number,
    title: string,
    id: number,
    taskSet: TaskSetType,
    isCurrentLevel?: boolean,

}

export type statusType = 'ASSINGED' | 'VERIFIED' | 'DELETED' | 'COMPLETED' | 'INCOMPLETE' | 'REASSIGNED' | 'DELETED',
export interface TaskActionType {
    id : number,
    action : statusType ,
    createdAt : string,
    description ?: string,
    assets ?: AssetType[],
}

