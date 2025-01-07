export interface Note {
    id: string,
    title: string,
    description: string,
    isPinned: boolean,
    creationDate: string
}

export interface NoteCmd {
    title: string,
    description: string,
}
