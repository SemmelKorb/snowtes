<script setup lang="ts">
    import { usePopupTriggerStore } from '@/stores/PopupTriggerStore'

    const popupTriggerStore = usePopupTriggerStore()
</script>

<template>
    <div class="popup">
        <div class="popup-inner">
            <div class="popup-header">
                <slot/>
                <button class="pi pi-times popup-close" @click="popupTriggerStore.toggleANT"/>
            </div>
            <div class="border-div"/>
            <slot name="component"/>
        </div>
    </div>
</template>
