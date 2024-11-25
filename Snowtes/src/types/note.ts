export interface Note {
    id: string,
    title: string,
    description: string,
    isPinned: boolean,
}

export interface NoteCmd {
    title: string,
    description: string,
}
