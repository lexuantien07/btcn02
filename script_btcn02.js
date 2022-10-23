
import Header from './Vue/header.js'
import NavBar from './Vue/navbar.js'
import Main from './Vue/main.js'
import Popular from './Vue/popular.js'
import TopRating from './Vue/toprating.js'

export default {
    data() {
        return {
            Movies: {},
            popularMovies: [],
            topRatingMovies: [],
        }
    },
    components: {
        Header,
        NavBar,
        Main,
        Popular,
        TopRating
    },
    methods: {
        changeTheme() {
            if (document.getElementById("switch").checked) {
                document.body.style.background = "black";
            }
            else {
                document.body.style.background = "rgb(187, 187, 187)";
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
    <NavBar />
    <Main :movies="Movies"/>
    <Popular :pmovies="popularMovies"/>
    <TopRating :tmovies="topRatingMovies"/>
    `
}

