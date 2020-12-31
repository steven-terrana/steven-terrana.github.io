'use strict';

require('./src/assets/scss/init.scss');
require('./src/assets/scss/admonitions.scss');
require('./src/assets/scss/code-blocks.scss')
// require('./static/css/prismjs/theme.min.css');
require('prismjs/themes/prism.css')
require('@fontsource/fira-code')

exports.onRouteUpdate = ({ location, prevLocation }) => {
    let dotHolder = document.createElement("div")
    dotHolder.className = "dot-holder"
    let colors = [ "red", "yellow", "green" ]
    colors.forEach(color => {
        let span = document.createElement("span")
        span.className = `dot ${color}`
        dotHolder.appendChild(span)
    })

    let codeBlocks = document.querySelectorAll("div.gatsby-highlight")
    codeBlocks.forEach(block => {
        block.insertBefore(dotHolder.cloneNode(true), block.firstChild)
    })
}