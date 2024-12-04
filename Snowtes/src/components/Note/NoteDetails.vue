<script setup lang="ts">
    import type { PropType } from 'vue'
    import type { Note } from '@/types/note'
    import { useNoteStore } from '@/stores/NoteStore'

    const noteStore = useNoteStore()

    defineProps({
        note: {
            required: true,
            type: Object as PropType<Note>
        }
    })
</script>

<template>
    <div class="note-container">
        <p class="note-element">{{ note.title }}</p>
        <p class="note-element">{{ note.description }}</p>
        <span class="space-x-4">
            <i class="pi pi-pencil cursor-pointer note-i"/>
            <i class="pi pi-trash cursor-pointer note-i" @click="noteStore.removeNote(note.id)"/>
        </span>
    </div>
</template>
