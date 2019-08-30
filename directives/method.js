/**
 * Method-Directive for inertia-vue
 * Since HTML forms can't make PUT, PATCH, or DELETE requests, you will need to add a hidden _method field to spoof these HTTP verbs.
 * The <method> directive can create this field for you:
 */

export default {
    props: ['type'],
    render: function(createElement) {
        return createElement('input', {
            attrs: {
                type: 'hidden',
                name: '_method',
                value: this.type.toUpperCase()
            }
        });
    }
}
