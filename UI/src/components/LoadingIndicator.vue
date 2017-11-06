<template>
    <div class="loader">
        <div class="indicator">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <h1 v-if="caption">{{caption}}</h1>
    </div>
</template>

<script>
export default {
  name: 'loadingIndicator',
  props: ['caption']
}
</script>

<style lang="postcss" scoped>
@import '../assets/css/db-settings.css';

@keyframes kanan {
    0% {
        transform:translateX(20px);
    }
    50% {
        transform:translateX(-20px);
    }
    100% {
        transform:translateX(20px);
        z-index:200;
    }
}

@keyframes kiri {
    0% {
        transform:translateX(-20px);
        z-index:200;
    }
    50%{
        transform:translateX(20px);
    }
    100%{
        transform:translateX(-20px);
    }
}


.loader {
    margin: 1rem 0;

    h1 {
        font: var(--db-font-regular);
        font-size: 1.2rem;
        text-align: center;
        padding: 2rem 0 1rem 0;
    }

    .indicator span {
    	position: absolute;
    	display: inline-block;
    	width: 16px;
    	height: 16px;
    	left: 50%;
    	border-radius: 50%;
    	margin-left: -10px;
    	animation: 3s infinite linear;

        &:nth-child(1){
	        background: var(--db-color-blue);
	        animation: kiri 1.2s infinite linear;
        }

        &:nth-child(2){
        	background: var(--db-color-red);
        	z-index: 100;
        }

        &:nth-child(3){
        	background: var(--db-color-grey);
        	animation: kanan 1.2s infinite linear;
        }
    }
}
</style>
