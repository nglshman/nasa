<template>
    <article class="earth-demo">
        <div class="earth">
            <img src="https://cssanimation.rocks/images/random/earth.png">
        </div>
        <div class="moon-container">
            <div class="moon">
                <img src="https://cssanimation.rocks/images/random/moon.png">
            </div>
        </div>
    </article>
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
.earth {
    max-width: 500px;
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 100px);
}
.earth img {
    height: 200px;
    top: 0;
    left: 0;
    width: 200px;
}
.moon-container {
    position: absolute;
    top: calc(50% - -25px);
    left: calc(50% - 25px);
}
.moon {
    max-width: 500px;
    animation: spin 20s linear infinite;
    background: none;
    height: 50px;
    pointer-events: none;
    transform-origin: 25px;
    width: 50px;
}
.moon img {
    height: 50px;
    transform: translateX(-160px) translateY(-160px);
    width: 50px;
}
.earth img, .moon img {
    border-radius: 50%;
    box-shadow: 0 0 12em 1em rgba(110, 140, 200, .6);
}
@keyframes spin {
    to {
        transform: rotateZ(360deg);
    }
}
</style>
