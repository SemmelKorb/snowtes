import { defineStore } from 'pinia'
import type { Note, NoteCmd } from '@/types/note'
import { v4 as uuid } from 'uuid'

export const useNoteStore = defineStore('NoteStore', {
    state: () => ({
        notes: [
            {id: 'b9f94d05-779b-4fb8-b8d4-69fd7c83146f', title: 'something else', description: 'aslkdkdfsakhdafkh', isPinned: true},
            {id: 'ac7ba626-8990-4d1d-9f43-e1941c38b7c3', title: 'something else', description: 'ychhkcjhjxchxchkcx', isPinned: false},
            {id: '98e1584e-18b8-457a-9c96-97e4e4643526', title: 'something else', description: 'öwelöaelködalkjdsklj', isPinned: false},
            {id: '97e1584e-18b8-457a-9c96-97e4e4643526', title: 'something else', description: 'öwelöaelködalkjdsklj', isPinned: false},
            {id: '88e1584e-18b8-457a-9c96-97e4e4643526', title: 'something else', description: 'öwelöaelködalkjdsklj', isPinned: false},
            {id: '98e1584e-18b8-457a-9c96-97e4e4640526', title: 'something else', description: 'öwelöaelködalkjdsklj', isPinned: false},
            {id: '98e1584e-18b8-437a-9c96-97e4e4643526', title: 'what is happening', description: 'öwelöaelködalkjdsklj', isPinned: false},
            {id: '98e1584e-12b8-457a-9c96-97e4e4643526', title: 'why why why', description: 'öwelöaelködalkjdsklj', isPinned: false},
            {id: '98e1584e-18b8-457a-9c96-a7e4e4643526', title: 'some other information', description: 'öwelöaelködalkjdsklj', isPinned: false}
        ] as Note[],
        filter: '' as string,
        page: 1 as number,
        selectedNote: '' as string,
    }),
    getters: {
        getPinned(): Note[]{
            return this.notes.filter(note => note.isPinned)
        },
        getById(){
            return (noteId: string): Note | undefined => this.notes.find(note => note.id === noteId)
        },
        filterByTitle(): Note[]{
            return this.notes.filter(note => note.title.toLowerCase().includes(this.filter.toLowerCase()))
        },
        getSelected(): string{
            return this.selectedNote
        }
    },
    actions: {
        addNote(noteCmd: NoteCmd){
            //function to write the cmd in the database 
            //recive uuid and klatsch into note
            //Beim hinzufügen wenn die notes die maximale anzahl pro seite erreicht haben auf die nächste seite irgendwie pushen...
            const note: Note = {
                id: uuid(),
                title: noteCmd.title,
                description: noteCmd.description,
                isPinned: false
            }

            this.notes.push(note)
        },
        removeNote(noteId: string){
            //make a function to remove the note from the database
            this.notes = this.notes.filter(note => {
                return note.id !== noteId
            })
        },
        updateNote(note: Note){
            const potentialDupe = this.getById(note.id)
            if(!potentialDupe || this.notes.includes(note)) return

            //make a function to update in the database
            this.removeNote(note.id)
            this.notes.push(note)
        },
        togglePin(noteId: string){
            //make a function to update the pin thing in the database
            const note = this.notes.find(note => note.id === noteId)
            if(note) note.isPinned = !note.isPinned
        },
        updateFilter(expression: string){
            this.filter = expression
        },
        updatePage(operator: '+' | '-'){
            if(this.page === 1 && operator === '-') return
            //get the information from the database what the last page is so a function -> get MaxPage
            operator === '-' ? this.page-- : this.page++
        },
        selectNote(id: string){
            this.selectedNote = id
        },
    }
})