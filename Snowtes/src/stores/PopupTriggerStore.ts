import { defineStore } from 'pinia'

export const usePopupTriggerStore = defineStore('PopupTriggerStore', {
    state: () => ({
        addNoteTrigger: false as boolean,
        editNoteTrigger: false as boolean,
        deleteNoteTrigger: false as boolean
    }),
    actions: {
        toggleANT(){
            this.addNoteTrigger = !this.addNoteTrigger
            console.log('geändert zu', this.addNoteTrigger)
        },
        toggleENT(){
            this.editNoteTrigger = !this.editNoteTrigger
        },
        toggleDNT(){
            this.deleteNoteTrigger = !this.deleteNoteTrigger
        }
    }
})