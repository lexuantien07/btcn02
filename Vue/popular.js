
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
        pmovies: Array
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
                    document.getElementById(`popular-movie${i}`).style.background = "rgb(112, 112, 112)";
                // }
            }
            document.getElementById(`popular-movie${id}`).style.background = "white";
        },
        showInfoPopular(obj) {
            this.$emit('show-info-popular', obj);
            // var el1 = document.createElement("div");
            // var el1_cont = document.createTextNode(`a`);
            // el1.appendChild(el1_cont);
            console.log("data1", obj);
        }
    },
    created() {

    },
    emits:['show-info-popular'],
    template: `
    <div class="popular-title">
        <span>Most Popular</span>
        <div class="popular-navigation" style="display:flex">
            <div v-for="id in ids">
                <div :id="'popular-movie' + id" @click="changeMovie(id)"></div>
            </div>
        </div>
    </div>
    <div class="popular" style="display: flex">
        <div class="popular-left" @click="changeMovieLeft">&lsaquo;</div>
        <div class="popular-content" v-if="checkData == 0" style="display: flex">
            <div class="popular-wrap" v-for="pmovie in pmovies.slice(checkData,checkData+3)">
                <img class="popular-cnt-img" :src="pmovie.image" style="width:100%" @click="showInfoPopular(pmovie)">
                <div class="popular-cnt-layer">
                    <p class="popular-cnt-title">{{ pmovie.fullTitle }}</p>
                </div>
            </div>
        </div>
        <div class="popular-content" v-else-if="checkData >= 3" style="display: flex">
            <div class="popular-wrap" v-for="pmovie in pmovies.slice(checkData,checkData+3)">
                <img class="popular-cnt-img" :src="pmovie.image" style="width:100%" @click="showInfoPopular(pmovie)">
                <div class="popular-cnt-layer">
                    <p class="popular-cnt-title">{{ pmovie.fullTitle }}</p>
                </div>
            </div>
        </div>
        <div class="popular-right" @click="changeMovieRight">&rsaquo;</div>

    </div>

    `
}