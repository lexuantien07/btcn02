
import Header from './Vue/header.js'
import NavBar from './Vue/navbar.js'
export default {
    data() {
        return {

        }
    },
    components: {
        Header,
        NavBar
    },
    methods: {
        changeTheme() {
            if (document.getElementById("switch").checked) {
                document.body.style.background = "black";
            }
            else {
                document.body.style.background = "rgb(187, 187, 187)";
            }
        }
    },
    template: `
    <Header @change-theme="changeTheme"/>
    <NavBar />
    `
}