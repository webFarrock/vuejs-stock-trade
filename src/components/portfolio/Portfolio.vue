<template>
	<div>

		<Stock v-for="stock in stocks" :stock="stock"></Stock>
	</div>
</template>

<script type="text/javascript">
	import {mapGetters} from 'vuex';
	import Stock from './Stock.vue';
	export default {
	    computed: {
		    ...mapGetters({
			    stocks: 'stockPortfolio',
		    }),
	    },
		components: {Stock},
	}
</script>