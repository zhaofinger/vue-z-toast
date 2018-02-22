# vue-z-toast

vue的toast插件

## Usage

1. install package
    `yarn add vue-z-toast` or `npm install vue-z-toast`

1. register
    ```javascript
    import VueZToast from 'vue-z-toast'
    import 'vue-z-toast/dist/index.min.css'
    ...
    Vue.use(VueZToast)
    ````

1. use
    ```javascript
    ...
    this.$toast('toast', 2500)
    ...
    ```