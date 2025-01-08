import { defineStore } from 'pinia'

export const usePopupTriggerStore = defineStore('PopupTriggerStore', {
    state: () => ({
        addNoteTrigger: false as boolean,
        editNoteTrigger: false as boolean,
        deleteNoteTrigger: false as boolean,
        showFullNoteDetailsTrigger: false as boolean,
        errorMessageTrigger: false as boolean,
        errorMessage: '' as string,
    }),
    actions: {
        toggleANT(){
            this.addNoteTrigger = !this.addNoteTrigger
        },
        toggleENT(){
            this.editNoteTrigger = !this.editNoteTrigger
        },
        toggleDNT(){
            this.deleteNoteTrigger = !this.deleteNoteTrigger
        },
        toggleSFNDT(){
            this.showFullNoteDetailsTrigger = !this.showFullNoteDetailsTrigger
        },
        toggleEMT(){
            this.errorMessageTrigger != this.showFullNoteDetailsTrigger
        },
        setEM(message: string){
            this.errorMessage = message
        }
    }
})