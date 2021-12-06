import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { localize } from 'vee-validate';
import pt_BR from 'vee-validate/dist/locale/pt_BR.json';
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

localize({ pt_BR });

Vue.component('ValidationProvider', ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);