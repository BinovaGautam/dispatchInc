export const switchStatus = (status: string) => {
    switch (status) {
        case 'ASSIGNED':
            return 'Assigned';
        case 'VERIFIED':
            return 'Verified';
        case 'DELETED':
            return 'Deleted';
        case 'COMPLETED':
            return 'Completed';
        case 'INCOMPLETE':
            return 'Incomplete';
        case 'REASSIGNED':
            return 'Reassigned';
        default:
            return '';
    }
}


export const getfileType = (type: string) => {
    let assetType = type.startsWith('image') ? 'image' : type.startsWith('video') ? 'video' : type.startsWith('audio') ? 'audio' : type.startsWith('application') ? 'docs' : 'other';
    return assetType;

}


export const groupFilesByType = (files: any) => {
   /*
    * Group files by type like image, video, audio, docs, other
    */
    let groupedFiles = {
        image: [],
        video: [],
        audio: [],
        docs: [],
        other: []
    }
    files.forEach((file: any) => {
        let assetType: string = getfileType(file.assetType);
        groupedFiles[assetType].push(file);
    }
    );

    return groupedFiles;
}


export const getVolunteerID = (userId : number) => {
    let fixPrefix = 'WMTV'
    let alphabetSeries = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    //Alphabets changes every 10000 users

    let alphaBet =  alphabetSeries[Math.floor(userId/10000)]
    userId = userId % 10000
    if(userId < 10){
        return fixPrefix + alphaBet + '000' + userId
    }else if(userId < 100){
        return fixPrefix + alphaBet + '00' + userId
    }else if(userId < 1000){
        return fixPrefix + alphaBet + '0' + userId
    }else{
        return fixPrefix + alphaBet + userId
    }

    
}