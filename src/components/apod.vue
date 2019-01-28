<template>
    <div class="page">
        <aside>
            <h1>Astronomy picture of the day</h1>
        </aside>
        <footer>
            <h2>{{this.postName}}</h2>
            <p>{{this.post}}</p>
            <p class="postDate">{{this.postDate}}</p>
            <img v-bind:src="picture"></img>
        </footer>
    </div>
</template>

<script>

export default {
    data () {

        return {
            post: '',
            postDate: '',
            picture: '',
            postName: ''
        }
    },
    methods:{
        APOD_post: function(){
            this.$http.get('https://api.nasa.gov/planetary/apod?api_key=TNFMAvgYgFBVeVXbW1iAa9qIOU2CpOYnXd3G1IAs')
            .then(response => {
                this.post = response.body.explanation;
                this.postDate = response.body.date;
                this.picture = response.body.url;
                this.postName = response.body.title;
            });
        }
    },
    mounted(){
        this.APOD_post();
    }
}
</script>

<style scoped>
.page{
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    border: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #e3e3e3;

}
aside{
    justify-content: center;

}
h1{
    font-size: 24px;
}
footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
}
p{
    max-width: 1000px;
}
.postDate{
    text-decoration: underline;
}
img{
    max-width: 100%;
    min-width: 200px;
}
</style>
