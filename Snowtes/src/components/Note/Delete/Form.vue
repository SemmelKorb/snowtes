<script setup lang="ts">
    import { useNoteStore } from '@/stores/NoteStore'
    import { usePopupTriggerStore } from '@/stores/PopupTriggerStore'

    const noteStore = useNoteStore()
    const popupTriggerStore = usePopupTriggerStore()

    const handleClick = () => {
        const noteId: string = noteStore.getSelected
        noteStore.removeNote(noteId)
        popupTriggerStore.toggleDNT()
    }
</script>

<template>
    <div class="note-form">
            <h1 >
               Do you really want to DELETE the note?
            </h1>
            <p class="mt-4">
               If you delete it it is gone foever!
            </p>
            <button class="button mt-4 w-50%" @click="handleClick">
                delete
            </button>
        </div>
</template>
