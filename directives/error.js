/**
 * Error-Directive for inertia-vue
 * The <error> directive may be used to quickly check if validation error messages exist for a given attribute.
 * Within an <error> directive, you may echo the :MESSAGE variable to display the error message:
 */

export default {
    props: ['field'],
    render: function(createElement) {
        return this.hasError ? this.getWithReplacedText(this.$slots.default) : false;
    },
    methods: {
        /**
         * Iterate recursevly over slot-nodes and override :MESSAGE-Placeholder with message from error-bag
         * @param children
         * @returns object
         */
        getWithReplacedText(children) {
            return children.map((node) => {
                if (node.children) {
                    this.getWithReplacedText(node.children)
                } else {
                    node.text = node.text.includes(':MESSAGE') ? node.text.replace(':MESSAGE', this.message) : node.text;
                }
                return node;
            })
        },
    },
    computed: {

        /**
         * Returns current error-instance
         * @returns object
         */
        errors: function() {
            return this.$page.errors;
        },

        /**
         * Check current error-field exists in error-instance
         * @returns boolean
         */
        hasError: function() {
            return this.errors && this.errors[this.field];
        },
        /**
         * Get error-message
         * @returns string
         */
        message: function() {
            return this.errors[this.field];
        }
    }
}
