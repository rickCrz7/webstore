// uno.config.ts
import {
    defineConfig,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives
} from 'unocss'
import { presetForms } from '@julr/unocss-preset-forms'

export default defineConfig({
    presets: [
        presetIcons({
            extraProperties: {
                display: 'inline-block',
                'vertical-align': 'middle'
            }
        }),
        presetForms(),
        presetUno(),
        presetTypography(),
        presetWebFonts({
            // provider: 'google',
            // fonts: {
            //     sans: 'Open Sans: 100,200,300,400,500,600,700'
            // }
        })
    ],
    theme: {
        screens: {
            xs: '320px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px'
        }
    },
    transformers: [transformerDirectives()]
})
