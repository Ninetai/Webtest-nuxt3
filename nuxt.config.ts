import { defineNuxtConfig } from 'nuxt'
// import webpack from 'webpack'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    css: [
        'assets/css/reset.css',
        'assets/css/main.css',
        'assets/widgets/css/devicesize-widget.css',
        'assets/widgets/css/orientation-widget.css',
        'assets/jquery/ui-lightness-jquery-ui.css'
    ]
})
