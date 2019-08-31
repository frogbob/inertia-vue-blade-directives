/**
 * Title: inertiajs-vue-blade-directives
 * Description: Implementing common blade-directives to inertia-vue
 * Author: Freerk van Zeijl <freerk@frogbob.com>
 * Github: https://github.com/frogbob/inertia-vue-blade-directives
 */

/*
 * Import all directive-components
 */
import auth from './directives/auth';
import guest from './directives/guest';
import method from './directives/method';
import csrf from './directives/csrf'
import error from './directives/error';

const InterniaVueBladeDirectives = {

    /**
     * Register all directive-components
     * @param Vue
     * @param options
     */
    install: function(Vue, options) {
        Vue.component('auth', auth);
        Vue.component('guest', guest);
        Vue.component('method', method);
        Vue.component('csrf', csrf);
        Vue.component('error', error);
    }

};

export default InterniaVueBladeDirectives;
