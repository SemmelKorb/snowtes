<script setup lang="ts">
    import type { Note } from '@/types/note'
    import { useNoteStore } from '@/stores/NoteStore'

    const noteStore = useNoteStore()

    const note: Note | undefined = noteStore.getById(noteStore.selectedNote)
</script>

<template>
    <div class="note-full-container" v-if="note">
            <p class="note-full-element text-xl">
                {{ note.title }}
            </p>
            <p class="note-full-element">
                {{ note.description }}
            </p>
    </div>
</template>
