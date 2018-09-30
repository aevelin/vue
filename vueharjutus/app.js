new Vue({
    el:'#vue-app',
    data: {
        name: 'Vue harjutus'
    },
    methods: {
        greet: function(time) {
            return 'Tere ' + time + ', ' + this.name + '!';
        }
    }
});