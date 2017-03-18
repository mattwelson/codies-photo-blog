import $ from 'zepto-webpack'

const getAspectRatio = node => {
  const [ { width, height } ] = node.children
  return width / height
}

$(() => {
  $('.img_wrap img').on('load', e => {
    const wrap = e.path[1]
    wrap.style.flex = getAspectRatio(wrap)
  })
})
