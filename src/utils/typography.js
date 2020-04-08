import Typography from "typography"
import sutroTheme from "typography-theme-sutro"
sutroTheme.headerFontFamily = ['futura-pt-condensed, sans-serif']

sutroTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "a": {
      color: `tomato`,
    },
    "a.copy": {
      fontFamily: `Merriweather, Georgia, serif`,
    },
    "blockquote": {
      fontWeight: `normal`,
    },
    "p": {
      fontFamily: `Merriweather, Georgia, serif`,
      fontWeight: `normal`,
    },
    "h3, h1, h2, h4": {
      fontFamily: `"futura-pt-condensed", sans-serif`,
      fontWeight: `700`,
    },
    "span.question": {
      fontFamily: `"futura-pt-condensed", sans-serif`,
      fontWeight: `700`,
    }
  }
}



const typography = new Typography(sutroTheme)

// Hot reload typography in development.
 if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale