import Typography from 'typography'
import noriegaTheme from 'typography-theme-noriega'

//const typography = new Typography(noriegaTheme)
const typography = new Typography()

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
