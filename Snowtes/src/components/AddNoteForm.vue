<script setup lang="ts">
    import { ref } from 'vue'
    import { v4 as uuid } from 'uuid'
    import { useNoteStore } from '@/stores/NoteStore'
    import type Note from '@/types/note'

    const noteStore = useNoteStore()

    const title = ref<string>('')
    const description = ref<string>('')

    const handleSubmit = () => {
        if(title.value.length === 0 || description.value.length === 0) return;
        const note: Note = {
            id: uuid(),
            title: title.value,
            description: description.value,
            isPinned: false
        }

        noteStore.addNote(note)

        title.value = ''
        description.value = ''
    }
</script>

<template>
    <form @submit.prevent='handleSubmit'>
        <label for="titleField">
            Title
        </label>
        <input 
            class="input-field"
            type="text" 
            name="titleField" 
            id="titleField" 
            v-model='title'>

        <label for="descriptionField">
            Description
        </label>
        <input 
            class="input-field"
            type="text" 
            name="descriptionField" 
            id="descriptionFeil" 
            v-model='description'>

        <button type="submit">
            Add
        </button>
    </form>
</template>
