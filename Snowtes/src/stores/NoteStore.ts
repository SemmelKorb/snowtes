import { defineStore } from 'pinia'
import type { Note, NoteCmd, FetchNote } from '@/types/note'
import { v4 as uuid } from 'uuid'

export const useNoteStore = defineStore('NoteStore', {
    state: () => ({
        notes: [] as Note[],
        filter: '' as string,
        page: 0 as number,
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
        async setNotes(){
            try {
                const f = await fetch(`http://localhost:3000/notes/${this.page}`)
                const res : FetchNote[] = await f.json()
                res.forEach(e => {
                    const note: Note = {
                        id: e.uuid,
                        title: e.title,
                        description: e.content,
                        isPinned: e.isfav,
                        creationDate: e.creationdate
                    }
                    this.notes.push(note)
                });
            } catch (error) {
                console.log(error)
                return
            }   
        },
        addNote(noteCmd: NoteCmd){
            //function to write the cmd in the database 
            //recive uuid and klatsch into note
            //Beim hinzufügen wenn die notes die maximale anzahl pro seite erreicht haben auf die nächste seite irgendwie pushen...
            const note: Note = {
                id: uuid(),
                title: noteCmd.title,
                description: noteCmd.description,
                isPinned: false,
                creationDate: ''
            }

            this.notes.push(note)
        },
        async removeNote(noteId: string){
            try {
                const res = await fetch(`http://localhost:3000/delete/${noteId}`, {
                    method: 'DELETE'
                });
            } catch (error) {
                console.log(error)
                return
            }

            this.notes = this.notes.filter(note => {
                return note.id !== noteId
            })
        },
        async updateNote(note: Note){
            const potentialDupe = this.getById(note.id)
            if(!potentialDupe || this.notes.includes(note)) return

            //make a function to update in the database
            this.removeNote(note.id)
            this.notes.push(note)
        },
        async togglePin(noteId: string){
            //make a function to update the pin thing in the database
            const note = this.notes.find(note => note.id === noteId)
            if(note) note.isPinned = !note.isPinned
        },
        updateFilter(expression: string){
            this.filter = expression
        },
        updatePage(operator: '+' | '-'){
            if(this.page === 0 && operator === '-') return
            //get the information from the database what the last page is so a function -> get MaxPage
            operator === '-' ? this.page-- : this.page++
        },
        selectNote(id: string){
            this.selectedNote = id
        },
    }
})