<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header>
        <div class="logo">
            <img src="/logo.png" alt="">
        </div>
        <h1>Yu-gi-oh Api</h1>
    </header>
</template>

<style scoped>
header {
    height: 50px;
    background-color: var(--yu-light);
    display: flex;
    gap: 2rem;
}

img {
    width: 100px;
    margin-left: 1rem;
}
</style>