<script setup lang="ts">
    import { useNoteStore } from '@/stores/NoteStore'
    import { usePopupTriggerStore } from '@/stores/PopupTriggerStore'
    import  Popup  from '@/components/Note/Popup.vue'
    import AddNoteForm from '@/components/Note/AddNote/Form.vue'

    const noteStore = useNoteStore()
    const popupTriggerStore = usePopupTriggerStore()
</script>

<template>
    <div class="note-controller-container">
        <!--Auto Fetch -> nachdem der user für sagen wir mal 2 sekunden nichtsmehr getippt hat ins feld wird gefetcht, timer -> wenn abgelaufen -> fetch wenn in der zwischenzeit getippt -> fetch abbrechen-->
        <input class="input-field" type="text" placeholder="Search note by title" v-model="noteStore.filter">  
        <button class="button" @click="popupTriggerStore.toggleANT">
            Add Note
        </button>
    </div>
    <Popup v-if="popupTriggerStore.addNoteTrigger">
         Add Note Popup
         <template v-slot:component>
            <AddNoteForm/>
         </template>
    </Popup>
</template>
