import tenoxui, { defineProps, makeStyles } from 'tenoxui'
console.log("All Func: ", tenoxui, defineProps, makeStyles)

const config = {
  props: {
    "scroll": ["scroll-behavior"] // scroll behavior property
  }, 
  style: {
    html: ["scroll-smooth"] // give smootb scrolling to html tag
  }
}
// defineProps(config.props) // Apply props
// makeStyles(config.style) // Apply style
// tenoxui() // init: tenoxui
