<script setup lang="ts">
    import type { PropType } from 'vue'
    import type Note from '@/types/note'

    defineProps({
        note: {
            required: true,
            type: Object as PropType<Note>
        }
    })
</script>

<template>
    <div class="note-container">
        <p class="note-element">{{ note.title }}</p>
        <p class="note-element">{{ note.description }}</p>
        <p class="note-element">{{ note.isPinned }}</p>
    </div>
</template>
