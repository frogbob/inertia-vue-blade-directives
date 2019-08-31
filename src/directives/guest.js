/**
 * Guest-Directive for inertia-vue
 * The <guest> directive may be used to quickly determine if the current user is a guest:
 */

export default {
    render: function(createElement) {
        if(!this.$page.auth) {
            return this.$slots.default;
        }
        return false;
    }
}
