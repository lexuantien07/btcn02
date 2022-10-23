

export default {
    data() {
        return {
            
        }
    },
    methods: {
        returnHome() {
            this.$emit('return-home');
        },
        searchInfo() {
            this.$emit('search-info');
        }
    },
    template: `
    <div class="home">
        <div class="label" @click="returnHome">Home</div>
        <div class="search">
            <input v-model="text" placeholder="Search"></input>
            <button>Search {{text}}</button>
            <p>{{text}}</p>
        </div>
    </div>
    `
}