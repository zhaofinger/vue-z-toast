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
    this.$toast('toast', 2500, { color: 'red', backgroundColor: 'rgba(125, 43, 86, .4)' })
    ...
    ```

1. options

    - `message` toast 内容
    - `duration` toast 持续时间，默认 2000ms
    - `styleObj` toast 样式，默认 `{ color: 'red', backgroundColor: 'rgba(125, 43, 86, .4)' }`, 关于 `styleObj` 请参考[vue 文档(与内联 style 绑定(Binding Inline Styles))](https://vuefe.cn/v2/guide/class-and-style.html#%E5%AF%B9%E8%B1%A1%E8%AF%AD%E6%B3%95-1)