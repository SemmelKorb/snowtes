<script setup lang="ts">
    import AddNoteForm from '@/components/Note/AddNote/Form.vue'
    import NoteDetails from '@/components/Note/NoteDetails.vue'
    import { useNoteStore } from '@/stores/NoteStore'
    import NoteControlBar from '@/components/Note/NoteControlBar.vue'

    const noteStore = useNoteStore()
</script>

<template>
    <main>
        <NoteControlBar/>

        <div class="border-div"/>

        <!--Muss in im Backend geflitert werden -> wenn ein filter drinnen ist, muss auch der max page count geupdated werden + keinen filter array zurückgeben sondern den normalen notes array überschreiben-->

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
