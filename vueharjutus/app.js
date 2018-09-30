new Vue({
    el:'#vue-app',
    data: {
        name: 'Vue harjutus'
    },
    methods: {
        greet: function(person) {
            return 'Tere, tere ' + person + '!';
        }
    }
});