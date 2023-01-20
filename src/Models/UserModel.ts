import { LevelsList } from "./CommonModel";

export interface UserBaseType {
    id: number,
    name?: string,
    email?: string,
    level?: number,
    phone?: string,
    levels?: LevelsList[]
}

