
import Header from './Vue/header.js'
import NavBar from './Vue/navbar.js'
import Main from './Vue/main.js'
import Popular from './Vue/popular.js'
import TopRating from './Vue/toprating.js'
import Movie from './Vue/movie_info.js'
import MoviePopular from './Vue/movie_info_ppl.js'
import MovieTopRating from './Vue/movie_info_tr.js'

export default {
    data() {
        return {
            Movies: {},
            popularMovies: [],
            topRatingMovies: [],
            checkShow: 1,
            Movie: {},
            MoviePopular: {},
        }
    },
    components: {
        Header,
        NavBar,
        Main,
        Popular,
        TopRating,
        Movie,
        MoviePopular,
        MovieTopRating
    },
    methods: {
        changeTheme(e) {
            if (document.getElementById("switch").checked) {
                document.getElementsByClassName("container")[0].style.background = "black";
                document.getElementsByClassName("header")[0].style.background = "rgb(33, 33, 33)";
                document.getElementsByClassName("header")[1].style.background = "rgb(33, 33, 33)";
                document.getElementsByClassName("header-title")[0].style.color = "white";
                document.getElementsByClassName("header-title")[1].style.color = "white";
                document.getElementsByClassName("home")[0].style.background = "rgb(33, 33, 33)";
                document.getElementsByClassName("home")[1].style.background = "rgb(33, 33, 33)";
                document.getElementsByTagName("button")[0].style.background = "black";
                document.getElementsByTagName("button")[1].style.background = "black";
                document.getElementsByClassName("header-key")[0].style.color = "white";
                document.getElementsByClassName("header-key")[1].style.color = "white";
                document.getElementsByClassName("header-d")[0].style.color = "white";
                document.getElementsByClassName("header-d")[1].style.color = "white";
                document.getElementsByClassName("header-ms")[0].style.color = "white";
                document.getElementsByClassName("header-ms")[1].style.color = "white";
                document.getElementsByClassName("label")[0].style.color = "white";
                document.getElementsByClassName("label")[1].style.color = "white";
                document.getElementsByClassName("popular-span")[0].style.color = "white";
                document.getElementsByClassName("toprating-span")[0].style.color = "white";
            }
            else {
                document.getElementsByClassName("container")[0].style.background = "rgb(187, 187, 187)";
                document.getElementsByClassName("header")[0].style.background = "white";
                document.getElementsByClassName("header")[1].style.background = "white";
                document.getElementsByClassName("header-title")[0].style.color = "rgb(33, 33, 33)";
                document.getElementsByClassName("header-title")[1].style.color = "rgb(33, 33, 33)";
                document.getElementsByClassName("home")[0].style.background = "white";
                document.getElementsByClassName("home")[1].style.background = "white";
                document.getElementsByTagName("button")[0].style.background = "white";
                document.getElementsByTagName("button")[1].style.background = "white";
                document.getElementsByClassName("header-key")[0].style.color = "rgb(33, 33, 33)";
                document.getElementsByClassName("header-key")[1].style.color = "rgb(33, 33, 33)";
                document.getElementsByClassName("header-d")[0].style.color = "rgb(33, 33, 33)";
                document.getElementsByClassName("header-d")[1].style.color = "rgb(33, 33, 33)";
                document.getElementsByClassName("header-ms")[0].style.color = "rgb(33, 33, 33)";
                document.getElementsByClassName("header-ms")[1].style.color = "rgb(33, 33, 33)";
                document.getElementsByClassName("label")[0].style.color = "rgb(33, 33, 33)";
                document.getElementsByClassName("label")[1].style.color = "rgb(33, 33, 33)";
                document.getElementsByClassName("popular-span")[0].style.color = "rgb(33, 33, 33)";
                document.getElementsByClassName("toprating-span")[0].style.color = "rgb(33, 33, 33)";
            }
        },
        async fetchData() {
            const res = await fetch('../db/InTheaters.json');
            const data = await res.json();
            return data;
        },
        async fetchDataPopular() {
            const res = await fetch('../db/MostPopular.json');
            const pdata = await res.json();
            return pdata;
        },
        async fetchDataTopRating() {
            const res = await fetch('../db/250movies.json');
            const tdata = await res.json();
            return tdata;
        },
        showInfo(obj) {
            this.checkShow = 0;
            this.Movie = obj;
            console.log(this.Movie);
        },
        returnHome() {
            this.checkShow = 1;
            console.log(this.checkShow);
        },
        showInfoPopular(obj) {
            this.checkShow = 2;
            this.MoviePopular = obj;
            console.log("data", obj);
            console.log("data", this.MoviePopular);
        },
        showInfoTopRating(obj) {
            this.checkShow = 3;
            this.MovieTopRating = obj;
            console.log("data", obj);
            console.log("data", this.MovieTopRating);
        },
        search() {

        }
    },
    async created() {
        const data = await this.fetchData();
        const pdata = await this.fetchDataPopular();
        const tdata = await this.fetchDataTopRating();
        var test = [];
        for (let i = 0; i < 5; i++) {
            test.push(data.items[i]);
        }
        // this.Movies = data.items;
        this.Movies = test;
        // console.log(this.Movies);
        var testpopular = [];
        for (let i = 0; i < 15; i++) {
            testpopular.push(pdata.items[i]);
        }
        // this.Movies = data.items;
        this.popularMovies = testpopular;
        console.log(this.popularMovies);


        var testtoprating = [];
        for (let i = 0; i < 15; i++) {
            testtoprating.push(tdata.items[i]);
        }
        // this.Movies = data.items;
        this.topRatingMovies = testtoprating;
        console.log(this.topRatingMovies);
    },
    template: `
    <Header @change-theme="changeTheme"/>
    <NavBar @return-home="returnHome"/>
    <Main :movies="Movies" @show-info="showInfo"  v-if="checkShow==1"/>
    <Popular :pmovies="popularMovies"  @show-info-popular="showInfoPopular" v-if="checkShow==1"/>
    <TopRating :tmovies="topRatingMovies" @show-info-toprating="showInfoTopRating" v-if="checkShow==1"/>
    <Movie v-if="checkShow==0" :movie="Movie"/>
    <MoviePopular v-if="checkShow==2" :moviepopular="MoviePopular"/>
    <MovieTopRating v-if="checkShow==3" :movietoprating="MovieTopRating" />
    `
}

