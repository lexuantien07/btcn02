
// import pMovie from './popular_movie.js'
export default {
    data() {
        return {
            checkData: 0,
            ids: [0,1,2,3,4],
        }
    },
    components: {
        // Movie
        // pMovie
    },
    props: {
        tmovies: Array
    },
    methods: {
        changeMovieRight() {
            if (this.checkData >=0 && this.checkData < 12) {
                this.checkData += 3;
            }
            else if (this.checkData >= 12) {
                this.checkData = 0;
            }
        },
        changeMovieLeft() {
            if (this.checkData >= 3 && this.checkData <= 12) {
                this.checkData -= 3;
            }
            else if (this.checkData <= 0) {
                this.checkData = 12;
            }
        },
        changeMovie(id) {
            // id = document.getElementById(`movie${id}`)
            // this.checkData = parseInt(document.getElementById(`movie${id}`).innerHTML.toString());
            this.checkData = id * 3;
            for (let i = 0; i < 5; i++) {
                // if (document.getElementById(`movie${i}`).style.background == "white") {
                    document.getElementById(`toprating-movie${i}`).style.background = "rgb(112, 112, 112)";
                // }
            }
            document.getElementById(`toprating-movie${id}`).style.background = "white";
        }
    },
    created() {

    },
    template: `
    <div class="toprating-title">
        <span>Top Rating</span>
        <div class="toprating-navigation" style="display:flex">
            <div v-for="id in ids">
                <div :id="'toprating-movie' + id" @click="changeMovie(id)"></div>
            </div>
        </div>
    </div>
    <div class="toprating" style="display: flex">
        <div class="toprating-left" @click="changeMovieLeft">&lsaquo;</div>
        <div class="toprating-content" v-if="checkData == 0" style="display: flex">
            <div class="toprating-wrap" v-for="tmovie in tmovies.slice(checkData,checkData+3)">
                <img class="toprating-cnt-img" :src="tmovie.image" style="width:100%">
                <div class="toprating-cnt-layer">
                    <p class="toprating-cnt-title">{{ tmovie.fullTitle }}</p>
                </div>
                
            </div>
        </div>
        <div class="toprating-content" v-else-if="checkData >= 3" style="display: flex">
            <div class="toprating-wrap" v-for="tmovie in tmovies.slice(checkData,checkData+3)">
                <img class="toprating-cnt-img" :src="tmovie.image" style="width:100%">
                <div class="toprating-cnt-layer">
                    <p class="toprating-cnt-title">{{ tmovie.fullTitle }}</p>
                </div>
            </div>
        </div>
        <div class="toprating-right" @click="changeMovieRight">&rsaquo;</div>

    </div>

    `
}