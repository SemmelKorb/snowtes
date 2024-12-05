<script setup lang="ts">
    import NoteDetails from '@/components/Note/Details/Preview.vue'
    import { useNoteStore } from '@/stores/NoteStore'
    import NoteControlBar from '@/components/Note/ControlBar.vue'

    const noteStore = useNoteStore()
</script>

<template>
    <main>
        <NoteControlBar/>

        <div class="border-div"/>

        <!--Muss in im Backend geflitert werden -> wenn ein filter drinnen ist, muss auch der max page count geupdated werden + keinen filter array zurückgeben sondern den normalen notes array überschreiben-->
        <!--List of notes filtered by title-->
        <!--TODO: Es muss ein extra container für die notes gemacht werden und in diesem kann man für die notes scrollen bedeutet die obere notes controll bar bleibt immer an der selben stelle-->
        <div class="overflow-y-auto">
            <NoteDetails 
                v-if="noteStore.filter !== ''"
                v-for='note in noteStore.filterByTitle' 
                :key='note.id' 
                :note='note'/>

            <!--List of notes not filtered-->
            <NoteDetails 
                v-if="noteStore.filter === ''"
                v-for='note in noteStore.notes' 
                :key='note.id' 
                :note='note'/>
        </div>
    </main>
</template>
