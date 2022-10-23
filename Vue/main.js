
// import Movie from './main_movie.js'

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
        movies: Array
    },
    methods: {
        // changeTheme() {
        //     this.$emit('change-theme');
        // },
        changeMovieRight() {
            if (this.checkData >=0 && this.checkData < 4) {
                this.checkData += 1;
            }
            else if (this.checkData >= 4) {
                this.checkData = 0;
            }
        },
        changeMovieLeft() {
            if (this.checkData >= 1 && this.checkData <= 4) {
                this.checkData -= 1;
            }
            else if (this.checkData <= 0) {
                this.checkData = 4;
            }
        },
        changeMovie(id) {
            // id = document.getElementById(`movie${id}`)
            // this.checkData = parseInt(document.getElementById(`movie${id}`).innerHTML.toString());
            this.checkData = id;
        }
    },
    created() {

    },
    template: `
    <div class="main" style="display: flex">
        <div class="main-left" @click="changeMovieLeft">&lsaquo;</div>
        <div class="main-content" v-if="checkData == 0">
            <img class="cnt-img" :src="movies[this.checkData].image" style="width:100%">
            <h4 class="cnt-title">{{ movies[this.checkData].fullTitle }}</h4>
            

        </div>
        <div class="main-content" v-else-if="checkData >= 1">
            <img class="cnt-img" :src="movies[this.checkData].image" style="width:100%">
            <h4 class="cnt-title">{{ movies[this.checkData].fullTitle }}</h4>
        </div>
        <div class="main-right" @click="changeMovieRight">&rsaquo;</div>
        <div class="navigation" style="display:flex">
            <div v-for="id in ids">
                <div :id="'movie' + id" @click="changeMovie(id)"></div>
            </div>
        </div>
    </div>

    `
}