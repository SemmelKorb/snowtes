<script setup lang="ts">
    import { useNoteStore } from '@/stores/NoteStore'
    import {v4 as uuid} from 'uuid'

    const noteStore = useNoteStore()
    const id: string = uuid()
</script>

<template>
    <main>
        <div>
            This is a uuid: {{ id }}
        </div>
        <div v-for='note in noteStore.notes' :key='note.id'>
            {{ note.id }}, {{ note.title }}, {{ note.description }}, {{ note.isPinned }}
        </div>
    </main>
</template>
