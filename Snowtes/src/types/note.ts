export interface Note {
    id: string,
    title: string,
    description: string,
    isPinned: boolean,
    creationDate: string,
    //update date irgendwann hier und in db hinzufügen
}

export interface NoteCmd {
    title: string,
    description: string,
}

export interface FetchNote {
    uuid: string,
    title: string,
    content: string,
    isfav: boolean,
    creationdate: string,
}