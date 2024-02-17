import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    base_api_url: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    base_api_url_short: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=20",
    cards: [],
    loading: true,

    getCards(url) {
        axios
            .get(url)
            .then((response) => {
                //console.log(response.data.data);
                this.cards = response.data.data;
                //console.log(this.cards.length);
                //console.log(this.cards[0].card_images[0].image_url);
                this.loading = false;
            });
    },
})
