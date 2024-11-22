import {defineStore} from 'pinia'
import type Note from '@/types/note'

export const useNoteStore = defineStore('NoteStore', {
    state: () => ({
        notes: [
            {id: 'b9f94d05-779b-4fb8-b8d4-69fd7c83146f', title: 'something else', description: 'aslkdkdfsakhdafkh', isPinned: true},
            {id: 'ac7ba626-8990-4d1d-9f43-e1941c38b7c3', title: 'something else', description: 'ychhkcjhjxchxchkcx', isPinned: false},
            {id: '98e1584e-18b8-457a-9c96-97e4e4643526', title: 'something else', description: 'öwelöaelködalkjdsklj', isPinned: false}
        ] as Note[]
    }),
    getters: {
        getPinned(): Note[]{
            return this.notes.filter(note => note.isPinned)
        },
        getById(){
            return (noteId: string): Note | undefined => this.notes.find(note => note.id === noteId)
        }
    },
    actions: {
        addNote(note: Note){
            //make a function to write the note into the database
            this.notes.push(note)
        },
        removeNote(noteId: string){
            //make a function to remove the note from the database
            this.notes = this.notes.filter(note => {
                return note.id !== noteId
            })
        },
        togglePin(noteId: string){
            //make a function to change the pin thing in the database
            const note = this.notes.find(note => note.id === noteId)
            if(note) note.isPinned = !note.isPinned
        }
    }
})