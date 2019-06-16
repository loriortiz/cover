import Typography from "typography"
import sutroTheme from "typography-theme-sutro"

sutroTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "a": {
      color: `#F5205D`,
      textShadow: `0.05px 0.05px 0px rgba(0, 0, 0, 1)`,
    },
  }
}

delete sutroTheme.googleFonts

const typography = new Typography(sutroTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale