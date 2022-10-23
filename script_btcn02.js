
import Header from './Vue/header.js'
import NavBar from './Vue/navbar.js'
import Main from './Vue/main.js'
export default {
    data() {
        return {
            Movies: {},
        }
    },
    components: {
        Header,
        NavBar,
        Main,
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
            const res = await fetch('../db/MostPopular.json');
            const data = await res.json();
            return data;
        }
    },
    async created() {
        const data = await this.fetchData();
        var test = [];
        for (let i = 0; i < 5; i++) {
            test.push(data.items[i]);
        }
        // this.Movies = data.items;
        this.Movies = test;
        // console.log(this.Movies);
    },
    template: `
    <Header @change-theme="changeTheme"/>
    <NavBar />
    <Main :movies="Movies"/>
    `
}

