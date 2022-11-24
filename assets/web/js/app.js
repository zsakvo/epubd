var LithiumApp = {}

LithiumApp.notifySize = notifySize
LithiumApp.onTouchUp = onTouchUp
LithiumApp.setAnchorPositions = setAnchorPositions
LithiumApp.setPaperPageMap = setPaperPageMap
LithiumApp.onBookReady = onBookReady
LithiumApp.onPagingSetup = onPagingSetup

function notifySize(a, b) {
  console.log('notifySize', a, b)
  // JSBridge.postMessage('notifySize,' + a + ',' + b)
}

function onTouchUp(a, b) {
  console.log('onTouchUp', a, b)
  // JSBridge.postMessage('a ' + a)
}

function setAnchorPositions(a, b) {
  console.log('setAnchorPositions', a, b)
}

function setPaperPageMap(a, b) {
  console.log('setPaperPageMap,' + a + ',' + b)
}

function onBookReady(a, b) {
  console.log('onBookReady', a, b)
}

function onPagingSetup(a, b) {
  console.log('onPagingSetup', a, b)
}
