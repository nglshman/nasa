<template>
    <div class="page">
        <aside>
            <div class="searchBorder">
                <input type="text" v-model="photos" ></input>
                <i class="fas fa-search"></i>
            </div>
            <button v-on:click="searchPictures(photos)">Search</button>
        </aside>
        <footer v-for="(result, index) in results">
            <img v-bind:src="results[index]"></img>
        </footer>
        <button class="bottomButton" v-on:click="getMorePictures(photos)" v-show="this.results[0]">More</button>
    </div>
</template>

<script>

export default {
    data () {
        return {
            photos: '',
            results: [],
            n: 10
        }
    },
    methods:{
        searchPictures(photos){
            if (photos){
                this.$http.get('https://images-api.nasa.gov/search?q=' + photos + '%')
                .then(response => {
                    this.results = [];
                    for(let i=0; i<this.n; i++){
                        this.results.push(response.body.collection.items[i].links[0].href);
                    }
                }).catch(response => {
                    if (this.results == false){
                    alert("There's no " + "'"+photos+"'" + " images!");
                    }
                })
            }
        },
        getMorePictures(photos){
            if(photos){
                this.n += 10;
                this.searchPictures(photos);
            }
        }
    }
}
</script>

<style scoped>
.page{
    display: flex;
    align-items: center;
    flex-direction: column;
}
aside{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    max-width: 500px;
}
.searchBorder{
    max-width: 500px;
    padding: 10px 15px;
    margin-bottom: 10px;
    background: #9e9fa2;
    border-radius: 8px;
}
.searchBorder input{
    border: none;
    border-radius: 5px;
    font-size: 15px;
    margin: 0;
    outline: 0;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    background-color: #9e9fa2;
}
.fa-search{
    color: #1a1e29;
}
aside button{
    background: #576E86;
    border: none;
    padding: 15px 30px;
    border-radius: 5px;
    color: #A8BACE;
    width: 150px;
    outline: 0;
    text-transform: uppercase;
    font: 16px normal;
}
aside button:hover{
    background: #394D61;
}
footer img{
    max-width: 100%;
    min-width: 200px;
}
.bottomButton{
    background: #576E86;
    border: none;
    bottom: 10px;
    padding: 15px 30px;
    border-radius: 5px;
    color: #A8BACE;
    outline: 0;
    text-transform: uppercase;
    font: 16px normal;
}
.bottomButton:hover{
    background: #394D61;
}
</style>
