new Vue({
    el:'#vue-app',
    data: {
        name: 'Vue harjutus',
        website: 'https://github.com/aevelin/vue_harjutus',
        websiteTag: '<a href="https://github.com/aevelin/vue_harjutus">Vue harjutuse veebileht</a>'
    },
    methods: {
        greet: function(time) {
            return 'Tere ' + time + ', ' + this.name + '!';
        }
    }
});