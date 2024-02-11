<script>
import axios from 'axios'
import AppCards from './AppCards.vue'
import Loader from './Loader.vue'

export default {
    name: 'AppMain',
    components: {
        AppCards,
        Loader,
    },
    data() {
        return {
            base_api_url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=20",
            cards: [],
            loading: true,
        };
    },
    methods: {
        getCards(ulr) {
            axios
                .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=20")
                .then((response) => {
                    console.log(response.data.data);
                    this.cards = response.data.data;
                    console.log(this.cards.length);
                    console.log(this.cards[0].card_images[0].image_url);
                    this.loading = false;
                });
        }
    },
    computed: {
        getFound() {
            return this.cards ? 'Found ' + this.cards.length + ' cards' : 'No cards found'
        }
    },
    created() {
        setTimeout(() => {
            this.getCards(this.base_api_url)
        }, 3000)
    }
};
</script>
<template>
    <div class="container">
        <div class="found">
            <h4>{{ getFound }}</h4>
        </div>
        <div class="row" v-if="loading">
            <Loader></Loader>
        </div>

        <div class="row" v-else>

            <div class="col-5" v-for="card in cards" :key="card.id + '_card'">
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
</style>