<script setup lang="ts">
    import { ref } from 'vue'
    import { usePopupTriggerStore } from '@/stores/PopupTriggerStore'
    import { useNoteStore } from '@/stores/NoteStore'
    import type { NoteCmd } from '@/types/note'

    const noteStore = useNoteStore()
    const popupTriggerStore = usePopupTriggerStore()

    const title = ref<string>('')
    const description = ref<string>('')

    const handleSubmit = () => {
        if(title.value.length === 0 || description.value.length === 0) return;
        const note: NoteCmd = {
            title: title.value,
            description: description.value,
        }

        noteStore.addNote(note)
        //das wird aus irgendeinem grund nicht ausgeführt das popupTriggerStore
        popupTriggerStore.toggleANT()

        title.value = ''
        description.value = ''
    }
</script>

<template>
    <form @submit.prevent='handleSubmit' class='note-form'>
        <label for="titleField">
            Title
        </label>
        <input class="input-field" type="text" name="titleField" id="titleField" v-model='title'>

        <label class="mt-2" for="descriptionField">
            Description
        </label>
        <input class="input-field" type="text" name="descriptionField" id="descriptionFeil" v-model='description'>

        <button class="button mt-4" type="submit">
            Add
        </button>
    </form>
</template>
