

export default {
    data() {
        return {

        }
    },
    components: {
    },
    props: {
        movietoprating: Object
    },
    template: `
    <div class="info">
        <div class="info-image"><img :src="movietoprating.image" style="width:230px"></div>
        <div class="info-rank">Rank: {{ movietoprating.rank }}</div>
        <div class="info-title">Name: {{ movietoprating.fullTitle }}</div>
        <div class="info-rate">Rating: {{ movietoprating.imDbRating }}</div>
        <div class="info-num">Number Rating: {{ movietoprating.imDbRatingCount }}</div>
        <div class="info-star">Stars: {{ movietoprating.crew }}</div>
        <div class="info-year">Release Date: {{ movietoprating.year }}</div>
    </div>
    `
}