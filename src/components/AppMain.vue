<script>
import axios from 'axios'
export default {
    name: 'AppMain',
    data() {
        return {
            base_api_url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=20",
            cards: [],

        };

    },

    mounted() {
        axios
            .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=20")
            .then((response) => {
                console.log(response.data.data);
                this.cards = response.data.data;
                console.log(this.cards[0].card_images[0].image_url);
            });
    }
};
</script>
<template>
    <div class="container">
        <div class="found">
            <h4>Found 39 cards</h4>
        </div>
        <div class="row">
            <div class="col-5" v-for="card in cards" :key="card.id + '_alien'">
                <img :src="card.card_images[0].image_url" alt="">
                <h4>{{ card.name }}</h4>
                <h5>{{ card.archetype }}</h5>
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

img {
    width: 100%;
}

h4 {
    color: var(--yu-light);
    text-transform: uppercase;
    text-align: center;
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
}
</style>