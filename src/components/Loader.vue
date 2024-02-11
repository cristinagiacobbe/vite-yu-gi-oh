<script>
export default {
    name: 'Loader',
}


</script>
<template>
    <div class="loader">
        <i class="fa-solid fa-spinner fa-spin"></i>
        <h4>... Loading</h4>
    </div>
</template>


<style scoped>
.loader {
    height: 250px;
    display: flex;
    justify-content: center;
    gap: 50px;
}
</style>