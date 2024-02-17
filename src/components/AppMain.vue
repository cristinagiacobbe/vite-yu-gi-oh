<script>
import axios from 'axios'
import AppCards from './AppCards.vue'
import Loader from './Loader.vue'
import ResultsFilter from './ResultsFilter.vue'
import Found from './Found.vue'
import { store } from '../store.js'

export default {
    name: 'AppMain',
    components: {
        AppCards,
        Loader,
        ResultsFilter,
        Found,
    },
    data() {
        return {
            inputText: "",
            selectedText: "",
            store
        };
    },
    methods: {

        filterInputText(data) {
            const [inputText, selectedText] = data
            const filterUrl = `${store.base_api_url}?name=${inputText}&archetype=${selectedText}`
            console.log(filterUrl);
            store.getCards(filterUrl);
        }
    },

    created() {
        setTimeout(() => {
            store.getCards(store.base_api_url_short)
        }, 3000)
    }
};
</script>
<template>
    <ResultsFilter @filterInputTextComp="filterInputText"></ResultsFilter>


    <div class="container">

        <Found></Found>
        <div class="row" v-if="store.loading">
            <Loader></Loader>
        </div>

        <div class="row" v-else>

            <div class="col-5" v-for="card in store.cards" :key="card.id + '_card'">
                <AppCards :CompCards="card"></AppCards>
            </div>

        </div>
    </div>
</template>

<style scope>
.row {
    display: flex;
    flex-wrap: wrap;
}

.col-5 {
    width: calc(100% / 5);
    background-color: var(--yu-primary);
    padding: 0.5rem;
}


h5 {
    text-align: center;
}

.found {
    background-color: var(--yu-dark);
    height: 30px;
}

.found h4 {
    color: var(--yu-light);
    padding: 5px;
}

.filters {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 1rem;
}
</style>