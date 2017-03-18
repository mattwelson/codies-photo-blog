
var imgs = document.images,
    len = imgs.length,
    counter = 0;

[].forEach.call( imgs, function( img ) {
    img.addEventListener( 'load', incrementCounter, false );
} );

const getAspectRatio = node => {
  const [ { width, height } ] = node.children
  return width / height
}

function incrementCounter() {
    counter++;
    if ( counter === len ) {
      const domImgs = document.getElementsByClassName('img_wrap')
      const imgs = [].slice.call(domImgs);
      console.log(imgs.map(getAspectRatio))
      imgs.forEach(n => {
        n.style.flex = getAspectRatio(n)
      })
    }
}
