

export default {
    data() {
        return {

        }
    },
    components: {
    },
    props: {
        moviepopular: Object
    },
    template: `
    <div class="info">
        <div class="info-image"><img :src="moviepopular.image" style="width:230px"></div>
        <div class="info-rank">Rank: {{ moviepopular.rank }}</div>
        <div class="info-title">Name: {{ moviepopular.fullTitle }}</div>
        <div class="info-star">Stars: {{ moviepopular.crew }}</div>
        <div class="info-year">Release Date: {{ moviepopular.year }}</div>
    </div>
    `
}