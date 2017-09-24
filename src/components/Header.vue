<template>
	<nav class="navbar navbar-default" role="navigation">
		<div class="navbar-header">
			<router-link class="navbar-brand" to="/">Stock trader</router-link>
		</div>


		<div class="collapse navbar-collapse">
			<ul class="nav navbar-nav">
				<router-link activeClass="active" to="/portfolio" tag="li"><a>Portfolio</a></router-link>
				<router-link activeClass="active" to="/stocks" tag="li"><a>Stocks</a></router-link>

			</ul>

			<ul class="nav navbar-nav navbar-right">
				<li ><a @click.prevent="endDay" href="">End day</a></li>
				<li class="dropdown" :class="{open: isDrOpen}" @click="isDrOpen = !isDrOpen">
					<a href="#"
					   class="dropdown-toggle"
					   data-toggle="dropdown">Save & Load <b class="caret"></b></a>
					<ul class="dropdown-menu">
						<li><a @click.prevent="saveData" href="#">Save data</a></li>
						<li><a @click.prevent="loadData" href="#">Load data</a></li>

					</ul>
				</li>
			</ul>
			<strong class="navbar-text navbar-right">Funds: {{funds | currency}} </strong>
		</div><!-- /.navbar-collapse -->
	</nav>
</template>

<script type="text/javascript">

	import {mapActions} from 'vuex';

    export default {
        data(){
            return {
                isDrOpen: false,
	        }
        },
        computed: {
            funds(){
                return this.$store.getters.funds;
            }
        },
	    methods: {
		    ...mapActions({
                randomizeStocks: 'randomizeStocks',
			    fetchData: 'loadData',
		    }),
            endDay(){
				this.randomizeStocks();
            },
		    saveData(){
                const data = {
                    funds: this.$store.getters.funds,
	                stockPortfolio: this.$store.getters.stockPortfolio,
	                stocks: this.$store.getters.stocks,
                };

                this.$http.put('data.json', data);

		    },
		    loadData(){
				this.fetchData();
		    },
	    },
    }
</script>