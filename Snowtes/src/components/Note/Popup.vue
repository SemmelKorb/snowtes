<template>
    <div class="popup">
        <div class="popup-inner">
            <div class="popup-header">
                <slot name="title"/>
                <slot name="button"/>
            </div>
            <div class="border-div-black"/>
            <slot class="mb-2 mt-4" name="component"/>
        </div>
    </div>
</template>
