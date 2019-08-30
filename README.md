# Common Blade-Directives for Internia.js Vue-Adapter

![Inertia Vue Blade Directives](http://api.devbar.ultrabold.de/github?text=Inertia.js%20Vue%20Blade-Directives)

### Docs

* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Implementing directives](#implementing-directives)
* [Using directives](#using-directives)

## Prerequisites

**Please note**

In order to make these directive work you have to install the [inertia-laravel-blade-share](https://github.com/frogbob/inertia-laravel-blade-share)-package in your laravel-application.

## Installation

Install using NPM:

~~~sh
npm install @frogbob/inertia-vue-blade-directives
~~~

Install using Yarn:

~~~sh
yarn add @frogbob/inertia-vue-blade-directives
~~~

## Implementing Directives

~~~js
import InertiaVueBladeDirectives from '@frogbob/inertia-vue-blade-directives'
Vue.install(InertiaVueBladeDirectives);
~~~

## Using Directives

Following directive-components are available for now.
Hopefully many more will be available in future.

### Auth `<auth>`
The <auth> directive may be used to quickly determine if the current user is authenticated:

~~~html
<auth>Hi, you are logged in!</auth>
~~~


### Guest `<guest>`
The <guest> directive may be used to quickly determine if the current user is a guest:
~~~html
<guest>Hi guest!</guest>
~~~

### Csrf `<csrf>`
Anytime you define an HTML form in your application, you should include a hidden CSRF token field in the form so that 
the CSRF protection middleware can validate the request. You may use the <csrf> directive to include the token field:
~~~html
<csrf/>
~~~

### Method `<method>`
Type: PUT, PATCH, or DELETE
~~~html
<method type="PUT"/>
~~~

### Error `<error>`
The <error> directive may be used to quickly check if validation error messages exist for a given attribute.
Within an <error> directive, you may echo the :MESSAGE variable to display the error message:
~~~html
<error>
    <div class="alert alert-danger">:MESSAGE</div>
</error>
~~~
