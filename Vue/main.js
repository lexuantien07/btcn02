


export default {
    data() {
        return {

        }
    },
    props: {
        movies: Array
    },
    methods: {
        changeTheme() {
            this.$emit('change-theme');
        }
    },

    template: `
    <div style="display: flex">
        <div>&lt</div>
        <div v-for="movie in movies">
            <div>
                <img v-bind:src="movie.image" style="width: 100px">
                <h3>{{ movie.fullTitle }}</h3>
            </div>
        </div>
        <div>&gt</div>
    </div>

    `
}