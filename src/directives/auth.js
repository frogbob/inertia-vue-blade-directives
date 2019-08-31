/**
 * Auth-Directive for inertia-vue
 * The <auth> directive may be used to quickly determine if the current user is authenticated:
 */

export default {
    render: function(createElement) {
        if(this.$page.auth) {
            return this.$slots.default;
        }
        return false;
    }
}
