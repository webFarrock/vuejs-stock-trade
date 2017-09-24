<template>
	<div>
		<h1>Trade or Biew your Portfoliou</h1>
		<h6>You may Save & load your Data</h6>
		<h6>Click on 'End day' to begin new day</h6>
		<hr/>

		<p>Your Funds: {{funds | currency}}</p>

	</div>
</template>

<script type="text/javascript">
export default {
    computed: {
        funds(){
            return this.$store.getters.funds;
        }
    }
}
</script>