<script setup lang="ts">
    import { useNoteStore } from '@/stores/NoteStore'

    const noteStore = useNoteStore()
</script>

<template>
    <main>
        <div>
        </div>
        <div v-for='note in noteStore.notes' :key='note.id'>
            {{ note.id }}, {{ note.title }}, {{ note.description }}, {{ note.isPinned }}
        </div>
    </main>
</template>
