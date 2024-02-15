<script>
export default {
    name: 'ResultsFilter',
    emits: ['filterInputTextComp'],
    data() {
        return {
            inputText: "",
            selectedText: "",
        }
    },

}

</script>
<template>
    <div class="filters">
        <input type="text" placeholder="Type here name's card" v-model="inputText"
            @keyup.enter="$emit('filterInputTextComp', [inputText, selectedText])">

        <select name="archetype" id="archetype" v-model="selectedText">
            <option value="" selected>All</option>
            <option value="ABC">ABC</option>
            <option value="UMI">UMI</option>
            <option value="Elemental hero">Elemental hero</option>
            <option value="@Ignister">@Ignister</option>
            <option value="A.I.">A.I.</option>
        </select>

    </div>
</template>
<style></style>