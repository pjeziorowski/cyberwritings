import { merge } from "theme-ui"
import { tailwind } from "@theme-ui/presets"
import defaultTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui"

const theme = merge(defaultTheme, {
    colors: {
        primary: tailwind.colors.pink[5],
        modes: {
            dark: {
                primary: tailwind.colors.pink[5],
            },
        }
    }
})

export default theme
