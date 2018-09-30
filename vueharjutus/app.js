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

new Vue({
    el: '#events',
    data: {
        number: 45,
        x: 0,
        y: 0
    },
    methods: {
        add: function(inc){
            this.number += inc;
        },
        subtract: function(dec){
            this.number -= dec;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function(){
            alert("You do not want to go there!");
        } 
    }
});