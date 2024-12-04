<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import type { Note } from '@/types/note'
    import { usePopupTriggerStore } from '@/stores/PopupTriggerStore'
    import { useNoteStore } from '@/stores/NoteStore'

    const noteStore = useNoteStore()
    const popupTriggerStore = usePopupTriggerStore()

    const note = ref<Note | undefined>()

    const handleSubmit = () => {
        if(!note.value) return
        if(note.value.title.length === 0 || note.value.description.length === 0 ) return
        noteStore.updateNote(note.value)
        popupTriggerStore.toggleENT()
    }

    onMounted(() => {
        const n : Note |undefined = noteStore.getById(noteStore.getSelected)
        if(!n) return

        note.value = {...n}
    })
</script>

<template>
    <form @submit.prevent='handleSubmit' class='note-form' v-if="note">
        <label for="titleField">
            Title
        </label>
        <input class="input-field" type="text" name="titleField" id="titleField" v-model='note.title'>

        <label class="mt-2" for="descriptionField">
            Description
        </label>
        <textarea class="input-field"  name="descriptionField" id="descriptionFeil" v-model='note.description'/>

        <label class="mt-2" for="isPinnedField">
            Pinned
        </label>
        <!--Es wird nicht der boolean beim einfügen übergeben-->
        <div class="justify-start items-start w-full">
            <input class="input-field mr-auto w-min" type="checkbox" v-model='note.isPinned'/>
        </div>

        <button class="button mt-4" type="submit">
            Save
        </button>
    </form>
</template>
