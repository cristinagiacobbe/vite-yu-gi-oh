<script>
export default {
    name: 'AppCards',
    props: {
        CompCards: Object
    }
}
</script>
<template>
    <img :src="CompCards.card_images[0].image_url" alt="">
    <h4>{{ CompCards.name }}</h4>
    <h5>{{ CompCards.archetype }}</h5>
</template>



<style scoped>
img {
    width: 100%;
}

h4 {
    color: var(--yu-light);
    text-transform: uppercase;
    text-align: center;
}
</style>