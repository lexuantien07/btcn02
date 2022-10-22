
import CheckDark from './checkdark.js'
export default {
    data() {
        return {

        }
    },
    components: {
        CheckDark
    },
    template: `
    <div class="header">
    <div class="header-ms">20120593</div>
    <div class="header-title">Movies info</div>
    <div class="header-1">
        <div class="">Key API</div>
        <CheckDark @change-theme="$emit('change-theme')"/>
    </div>
</div>
    `
}