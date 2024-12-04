<script setup lang="ts">
    import type { PropType } from 'vue'
    import type { Note } from '@/types/note'
    import { useNoteStore } from '@/stores/NoteStore'
    import { usePopupTriggerStore } from '@/stores/PopupTriggerStore'

    const noteStore = useNoteStore()
    const popupTriggerStore = usePopupTriggerStore()

    defineProps({
        note: {
            required: true,
            type: Object as PropType<Note>
        }
    })

    const showFullDetails = (id : string) => {
        noteStore.selectNote(id)
        popupTriggerStore.toggleSFNDT()
    }

    const editNoteDetails = (id : string) => {
        noteStore.selectNote(id)
        popupTriggerStore.toggleENT()
    }
</script>

<template>
    <div class="note-prev-container">
        <p class="note-prev-element">{{ note.title }}</p>
        <p class="note-prev-element">{{ note.description }}</p>
        <span class="space-x-4">
            <i class="pi pi-thumbtack note-i pin" :class="{active: note.isPinned}" @click="noteStore.togglePin(note.id)"/>
            <i class="pi pi-info-circle note-i" @click="showFullDetails(note.id)"/>
            <i class="pi pi-pencil note-i" @click="editNoteDetails(note.id)"/>
            <i class="pi pi-trash note-i" @click="noteStore.removeNote(note.id)"/>
        </span>
    </div>
</template>
