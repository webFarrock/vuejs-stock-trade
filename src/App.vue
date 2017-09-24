<template>

	<div class="container">

		<appHeader></appHeader>
		<div class="row">
			<div class="col-md-12">
				<transition name="slide">
					<router-view></router-view>
				</transition>
			</div>
		</div>

	</div>
</template>

<script>
	import appHeader from './components/Header.vue';
    export default {
        components: {appHeader},
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
	    created(){
            this.$store.dispatch('initStocks');
	    }
    }
</script>

<style>

	.slide-enter-active{animation: slide-in 200ms ease-out forwards}
	.slide-leave-active{animation: slide-out 200ms ease-out forwards}

	@keyframes slide-in {
		from{
			transform: translateY(-30px);
			opacity: 0;
		}
		to{
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes slide-out {
		from{
			transform: translateY(0);
			opacity: 1;
		}
		to{
			transform: translateY(-30px);
			opacity: 0;
		}
	}

	body{
		padding: 30px;
	}
</style>
