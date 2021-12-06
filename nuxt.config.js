export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'umReal-vue',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/primevue.js', mode: 'client' },
        { src: '~/plugins/veevalidate.js', mode: 'client' },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/auth'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: "http://localhost:8080/user/login", method: 'post', propertyName: 'token' },
                    user: { url: "http://localhost:8080/user/principal", method: 'get', propertyName: false }
                },
                logout: false,
                tokenRequired: true,
                tokenType: 'bearer',
                autoFetchUser: true
            }
        }
    }
}