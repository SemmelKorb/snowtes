<script setup lang="ts">
    import { useNoteStore } from '@/stores/NoteStore'

    const noteStore = useNoteStore()
    //make a extra fied in the note store for the filter
</script>

<template>
    <div class="note-controller-container">
        <input class="input-field" type="text" placeholder="Search note by title" v-model="noteStore.filter">  
        <p>{{ noteStore.page }}</p>
        <button class="button">
            <!--When the button is clicked then a poppup of the add note form should show up-->
            Add New Note
        </button>
    </div>
</template>
