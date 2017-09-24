import Vue from 'vue';
export const loadData = ({ commit }) => {
    Vue.http.get('data.json').then(response => response.json())
        .then(data => {
            console.log('data:', data);
            if(data) {
                const {stocks, funds, stockPortfolio} = data;

                const portfolio = {
                    funds, stockPortfolio
                };

                commit('SET_STOCKS', stocks);
                commit('SET_PORTFOLIO', portfolio);
            }
        })
};