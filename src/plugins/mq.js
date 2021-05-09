import Vue from "vue";
import VueMq from "vue-mq";

Vue.use(VueMq, {
  breakpoints: {
    mobile: 550,
    laptop: 1250,
    desktop: Infinity,
  },
});
