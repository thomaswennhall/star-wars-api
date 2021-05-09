import Vue from "vue";
import VueMq from "vue-mq";

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    laptop: 1250,
    desktop: Infinity,
  },
});
