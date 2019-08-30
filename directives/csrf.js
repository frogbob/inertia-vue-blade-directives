/**
 * CSRF-Directive for inertia-vue
 * Anytime you define an HTML form in your application, you should include a hidden CSRF token field in the form so that
 * the CSRF protection middleware can validate the request. You may use the <csrf> directive to include the token field:
 */

export default {
    render: function(createElement) {
        return createElement('input', {
            attrs: {
                type: 'hidden',
                name: '_token',
                value: this.$page.csrf_token
            }
        });
    }
}
