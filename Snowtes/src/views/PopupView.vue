<script setup lang="ts">
    import  Popup  from '@/components/Note/Popup.vue'
    import AddNoteForm from '@/components/Note/Add/Form.vue'
    import EditNoteForm from '@/components/Note/Edit/Form.vue'
    import DeleteNoteForm from '@/components/Note/Delete/Form.vue'
    import NoteFullDetails from '@/components/Note/Details/Full.vue'
    import { usePopupTriggerStore } from '@/stores/PopupTriggerStore'

    const popupTriggerStore = usePopupTriggerStore()
</script>

<template>
    <!--Popup for adding a note-->
    <Popup v-if="popupTriggerStore.addNoteTrigger">
        <template v-slot:title>
            Add a note
        </template>
        <template v-slot:button>
            <button class="pi pi-times popup-close" @click="popupTriggerStore.toggleANT"/>
        </template>
        <template v-slot:component>
            <AddNoteForm/>
        </template>
    </Popup>

    <!--Popup for editing a note-->
    <Popup v-if="popupTriggerStore.editNoteTrigger">
        <template v-slot:title>
            Edit the note
        </template>
        <template v-slot:button>
            <button class="pi pi-times popup-close" @click="popupTriggerStore.toggleENT"/>
        </template>
        <template v-slot:component>
            <EditNoteForm/>
        </template>
    </Popup>

    <!--Popup for deleting a note-->
    <Popup v-if="popupTriggerStore.deleteNoteTrigger">
        <template v-slot:title>
            Delete the Note
        </template>
        <template v-slot:button>
            <button class="pi pi-times popup-close" @click="popupTriggerStore.toggleDNT"/>
        </template>
        <template v-slot:component>
            <DeleteNoteForm/>
        </template>
    </Popup>

    <!--Popup for the details of a note-->
    <Popup v-if="popupTriggerStore.showFullNoteDetailsTrigger">
        <template v-slot:title>
            Note Details
        </template>
        <template v-slot:button>
            <button class="pi pi-times popup-close" @click="popupTriggerStore.toggleSFNDT"/>
        </template>
        <template v-slot:component>
            <NoteFullDetails/>
        </template>
    </Popup>
</template>
