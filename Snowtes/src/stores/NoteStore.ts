import {defineStore} from 'pinia'
import type Note from '@/types/note'

export const useNoteStore = defineStore('NoteStore', {
    state: () => ({
        notes: [
            {id: 3, title: 'something else', desciption: '', isPinned: true},
            {id: 4, title: 'something elseeeeeee', desciption: '', isPinned: false},
            {id: 7, title: 'something elseeeeeee', desciption: '', isPinned: false}
        ] as Note[]
    }),
    getters: {
        getPinned(): Note[]{
            return this.notes.filter(note => note.isPinned)
        },
        getById(){
            return (noteId: number): Note | undefined => this.notes.find(note => note.id === noteId)
        }
    },
    actions: {
        addNote(note: Note){
            //make a function to write the note into the database
            this.notes.push(note)
        },
        removeNote(noteId: number){
            this.notes = this.notes.filter(note => {
                return note.id !== noteId
            })
        },
        togglePin(noteId: number){
            const note = this.notes.find(note => note.id === noteId)
            if(note) note.isPinned = !note.isPinned
        }
    }
})