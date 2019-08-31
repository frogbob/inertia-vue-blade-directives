# Common Blade-Directives for Internia.js Vue-Adapter

![Inertia Vue Blade Directives](http://api.devbar.ultrabold.de/github?text=Inertia.js%20Vue%20Blade-Directives)

### Docs

* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Implementing directives](#implementing-directives)
* [Using directives](#using-directives)
* [Closing line](#closing-line)

## Prerequisites

**Please note**

In order to make these directives work, you have to share some data from laravel to vue via [inertia-laravel-adapter]().
Just put this code into app/Providers/AppServiceProvider (or your custom Provider if you want) in boot-method:

~~~php
use Inertia\Inertia;

...

Inertia::share([
    'auth' => function() {
        return auth()->check();
    },
    'csrf_token' => function() {
        return session()->get('_token');
    },
    'errors' => function() {
        return session()->get('errors', new MessageBag);
    }
]);

~~~

If you want to share other data with vue, feel free to add more data to share-array.

Or if you just want to make this package work you can install our helper-package [Inertia Laravel Blade Share](https://github.com/frogbob/inertia-laravel-blade-share) in your laravel system and you are good to go.

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

## Closing line
Some will ask, why the heck you need vue-components, if you can access data by ```this.$page```?
We think inertia.js is awesome. But also we liked blade-directives.
In our opinion its much more readable if you see whats going on in your code. If you use tons of this.$page statements in your code this could be a little confusing after a time.

```<auth>Hi, Admin</auth>``` makes clear, all of it slot-content is only shown, if you are a authenticated user, right?

If you have suggestions for missing directives or better code feel free to make pull-requests. Or if you have found a bug, please create an issue and let us know.

Thank you!
