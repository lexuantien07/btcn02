

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
        <div class="info-image"><img :src="movie.image" style="width:250px"></div>
        <div class="info-title">Name: {{ movie.fullTitle }}</div>
        <div class="info-genres">Genres: {{ movie.genres }}</div>
        <div class="info-director">Director: {{ movie.directors }}</div>
        <div class="info-plot">Plot: {{ movie.plot }}</div>
        <div class="info-star">Stars: {{ movie.stars }}</div>
        <div class="info-year">Release Date: {{ movie.releaseState }}</div>
    </div>
    `
}