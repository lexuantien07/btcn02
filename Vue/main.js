


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
            for (let i = 0; i < 5; i++) {
                // if (document.getElementById(`movie${i}`).style.background == "white") {
                    document.getElementById(`movie${i}`).style.background = "rgb(112, 112, 112)";
                // }
            }
            document.getElementById(`movie${id}`).style.background = "white";

        },
        showInfo(obj) {
            this.$emit('show-info', obj);
            // var el1 = document.createElement("div");
            // var el1_cont = document.createTextNode(`a`);
            // el1.appendChild(el1_cont);
        }
    },
    created() {

    },
    emits:['show-info'],
    template: ` 
    <div class="main" style="display: flex">
        <div class="main-left" @click="changeMovieLeft">&lsaquo;</div>
        <div class="main-content" v-if="checkData == 0">
            <img class="cnt-img" :src="movies[checkData].image" style="width:100%" @click="showInfo(movies[checkData])">
            <h4 class="cnt-title">{{ movies[checkData].fullTitle }}</h4>
            

        </div>
        <div class="main-content" v-else-if="checkData >= 1">
            <img class="cnt-img" :src="movies[checkData].image" style="width:100%" @click="showInfo(movies[checkData])">
            <h4 class="cnt-title">{{ movies[checkData].fullTitle }}</h4>
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