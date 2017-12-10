import Typography from 'typography'

export default () => {
  const typography = new Typography({
    baseFontSize: '16px',
    baseLineHeight: 1.666,
    headerFontFamily: ['Bitter', 'serif'],
    bodyFontFamily: ['Open Sans', 'sans-serif'],
    googleFonts: [{
      name: 'Open Sans',
      styles: ['300', '400', '500', '700']
    }, {
      name: 'Bitter',
      styles: ['400', '700']
    }]
  })

  typography.injectStyles()
}
