import Vue from "vue";
import KittycornName from "./KittycornName.vue";

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(KittycornName),
}).$mount("#kittycornname");