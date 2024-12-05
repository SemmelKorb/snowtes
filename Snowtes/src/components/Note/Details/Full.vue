<script setup lang="ts">
    import type { Note } from '@/types/note'
    import { useNoteStore } from '@/stores/NoteStore'

    const noteStore = useNoteStore()

    const note: Note | undefined = noteStore.getById(noteStore.selectedNote)
</script>

<template>
    <div class="note-full-container" v-if="note">
            <!--Zeichenlimit von 30 Zeichen setzen-->
            <p class="note-full-element text-xl mb-2">
                {{ note.title }}
            </p>
            <!--Ab einer anzeige von 300 zeichen einen Container machen, in dem man den text scrollen kann-->
            <p class="note-full-element max-h-[300px] overflow-y-auto">
                {{ note.description }}
            </p>
    </div>
</template>
