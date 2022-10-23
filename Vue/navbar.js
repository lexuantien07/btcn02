

export default {
    data() {
        return {
            
        }
    },
    methods: {
        returnHome() {
            this.$emit('return-home');
        }
    },
    template: `
    <div class="home">
        <div class="label" @click="returnHome">Home</div>
        <div class="search">
            <input type="text" placeholder="Search"></input>
            <button>Search</button>
        </div>
    </div>
    `
}