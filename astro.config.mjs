// @ts-check
import { defineConfig } from 'astro/config'
import { webcore } from 'webcoreui/integration'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
    site: 'https://replenish.guide',
    integrations: [webcore(), sitemap()]
})
