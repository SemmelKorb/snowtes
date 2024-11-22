<script setup lang="ts">
    import AddNoteForm from '@/components/AddNoteForm.vue'
    import NoteDetails from '@/components/NoteDetails.vue'
    import { useNoteStore } from '@/stores/NoteStore'

    const noteStore = useNoteStore()
</script>

<template>
    <main>
        <AddNoteForm/>
        <NoteDetails 
            v-for='note in noteStore.notes' 
            :key='note.id' 
            :note='note'/>
    </main>
</template>
