<script setup lang="ts">
    import { ref } from 'vue'
    import AddNoteForm from '@/components/AddNoteForm.vue'
    import NoteDetails from '@/components/NoteDetails.vue'
    import { useNoteStore } from '@/stores/NoteStore'
    import NoteControlBar from '@/components/NoteControlBar.vue'

    const noteStore = useNoteStore()

</script>

<template>
    <main>
        <NoteControlBar/>

        <div class="border-div"/>

        <NoteDetails 
            v-if="noteStore.filter !== ''"
            v-for='note in noteStore.filterByTitle' 
            :key='note.id' 
            :note='note'/>

        <NoteDetails 
            v-if="noteStore.filter === ''"
            v-for='note in noteStore.notes' 
            :key='note.id' 
            :note='note'/>
    </main>
</template>
