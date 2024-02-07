<script>
import axios from 'axios'
export default {
    name: 'AppMain',
    data() {
        return {
            base_api_url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=20",
            aliens: []
        }
    },
    mounted() {
        axios
            .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=20")
            .then((response) => {
                console.log(response.data);
                this.aliens = response.data;

            })
    }
}
</script>
<template>
    <div class="container">
        <div class="found">
            <h4>Found 39 cards</h4>
        </div>
        <div class="row">
            <div class="col" v-for="alien in aliens" :key="alien.id + '_alien'">
                <h4>{{ alien }}</h4>
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
    width: calc(100% / 12 * 5);
    background-color: var(--yu-primary);
}

.found {
    background-color: var(--yu-dark);
    height: 30px;
}

.found h4 {
    color: var(--yu-light);
}
</style>