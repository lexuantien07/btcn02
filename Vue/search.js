
import Search from './navbar.js'


export default {
    data() {
        return {

        }
    },
    components: {
        Search
    },
    props: {

    },
    methods: {
        searchInfo(obj) {
            console.log(obj);
        }
    },
    template: `
    <Search @search-info="searchInfo"/>
    `
}