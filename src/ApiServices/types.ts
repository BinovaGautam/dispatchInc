export type ProfileBodyType = {
    cLedgerName : string;
    cEmail : string;
    nAcId : number;
}

export type FormDataItem{
    description ?:string ;
    files ? : any
}

export type UpdateTaskPayload {
    userTaskId : number;
    items : FormDataItem[];
}