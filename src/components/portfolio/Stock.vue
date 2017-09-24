<template>
	<div class="col-sm-6 col-md-4">
		<div class="panel panel-success">
			<div class="panel-heading">
				<h3 class="panel-title">
					{{stock.name}}
					<small>({{stock.price}} | Quantity: {{stock.quantity}})</small>
				</h3>
			</div>
			<div class="panel-body">
				<div class="pull-left">
					<input
							:class="{danger: insufficientQty}"
							type="number" class="form-control" placeholder="Quantity" v-model="quantity"/>
				</div>
				<div class="pull-right">
					<button class="btn btn-success"
					        @click="sellStock"
					        :disabled="quantity <= 0 || insufficientQty"
					>{{insufficientQty?'Not enough' : 'Sell'}}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.dander{ border: 1px solid red !important;}
</style>

<script type="text/javascript">

    import {mapActions} from 'vuex';

    export default {
        props: [ 'stock' ],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            funds(){
                return this.$store.getters.funds;
            },
            insufficientQty(){
                return this.quantity > this.stock.quantity;
            }
        },
        methods: {
            ...mapActions({
	            placeSellOrder: 'sellStock',
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity,
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        }

    };
</script>