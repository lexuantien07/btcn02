
export default {
    data() {
        return {

        }
    },
    methods: {
        changeTheme() {
            this.$emit('change-theme');
        }
    },
    template: `
    <div class="header-dark">
            <input type="checkbox" id="switch" @click="changeTheme"/>
            <label for="switch"></label>
                
            <div class="header-d">Dark mode</div>     
        </div>
    
    `
}