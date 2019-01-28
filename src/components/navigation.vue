<template>
    <nav>
        <ul>
            <li><router-link to="/apod" class="navButton">Photo</router-link></li>
            <li><router-link to="/"><img class="svgPicture" src="../assets/NASA_logo.svg"/></router-link></li>
            <li><router-link to="/library" class="navButton">Library</router-link></li>
        </ul>
    </nav>
</template>

<script>

export default {

    data () {
        return {
        }
    }
}

</script>

<style scoped>
nav{
    background-color: #191e28;
    font-family: 'Heebo', sans-serif;
}
ul{
    border: 0;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;

}
.navButton{
    text-decoration: none;
    color: #42474f;
    padding: 30px 0 0 0;
    text-transform: uppercase;
    letter-spacing: 1px;
}
.svgPicture{
    width: 50px;
    height: 50px;
}
.navButton:focus{
    color: #EDECEE;
}
</style>
