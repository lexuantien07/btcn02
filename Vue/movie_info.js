

export default {
    data() {
        return {

        }
    },
    components: {
    },
    props: {
        movie: Object
    },
    template: `
    <div class="info">
        <div class="info-title">Name: {{ movie.fullTitle }}</div>
        <div class="info-year">Release Date: {{ movie.releaseState }}</div>
        <div class="info-year">Director: {{ movie.directorList[0].name }}</div>
        <div class="info-year">Plot: {{ movie.plot }}</div>
        <div class="info-year">Star: {{ movie.stars }}</div>
    </div>
    `
}