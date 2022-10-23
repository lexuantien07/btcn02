

export default {
    data() {
        return {
            checkData: 0,
            ids: [0,1,2,3,4],
        }
    },
    components: {
        // Movie
    },
    props: {
        pmovies: Array
    },
    methods: {

    },
    created() {

    },
    template: `
    <div class="popular" style="display:flex">
        <div>&lt</div>
        <div v-if="checkData == 0" style="display:flex">
            <div v-for="movie in pmovies.slice(0,3)">
                <img class="cnt-img" :src="pmovies[this.checkData++].image" style="width:100px">
            </div>
        </div>
        <div v-else-if="checkData >= 3">
            <img class="cnt-img" :src="movies[this.checkData].image" style="width:100%">
        </div>
        <div></div>
        <div>&gt</div>
    </div>

    `
}