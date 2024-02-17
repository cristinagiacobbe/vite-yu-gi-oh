<script>
import { store } from '../store.js'
export default {
    name: 'Found',
    data() {
        return {
            store
        }
    },
    computed: {
        getFound() {
            return store.cards ? 'Found ' + store.cards.length + ' cards' : 'No cards found'
        }
    },
}




</script>
<template>
    <div class="found">
        <h4>{{ getFound }}</h4>
    </div>
</template>
<style></style>