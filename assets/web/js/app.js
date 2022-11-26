var LithiumApp = {}

LithiumApp.notifySize = LithiumApp.notifySize = (...args) =>
  window.flutter_inappwebview.callHandler('NotifySize', ...args)
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

var liNativeAnnotations = {}

liNativeAnnotations.onSelectionCreated = (...args) =>
  window.flutter_inappwebview.callHandler('onSelectionCreated', ...args)

liNativeAnnotations.onSelectionStarted = (...args) =>
  window.flutter_inappwebview.callHandler('onSelectionStarted', ...args)

liNativeAnnotations.onSelectionDestroyed = (...args) =>
  window.flutter_inappwebview.callHandler('onSelectionDestroyed', ...args)

liNativeAnnotations.shouldInsertAnnotation = (...args) =>
  window.flutter_inappwebview.callHandler('shouldInsertAnnotation', ...args)

liNativeAnnotations.onSelectionStopped = (...args) =>
  window.flutter_inappwebview.callHandler('onSelectionStopped', ...args)

liNativeAnnotations.insertAnnotation = (...args) =>
  window.flutter_inappwebview.callHandler('insertAnnotation', ...args)

liNativeAnnotations.upgradeAnnotation19 = (...args) =>
  window.flutter_inappwebview.callHandler('upgradeAnnotation19', ...args)

liNativeAnnotations.onAnnotationSelected = (...args) =>
  window.flutter_inappwebview.callHandler('onAnnotationSelected', ...args)

liNativeAnnotations.onBoundsUpdated = (...args) =>
  window.flutter_inappwebview.callHandler('onBoundsUpdated', ...args)

// var LithiumApp = {}

// LithiumApp.notifySize = notifySize
// LithiumApp.onTouchUp = onTouchUp
// LithiumApp.setAnchorPositions = setAnchorPositions
// LithiumApp.setPaperPageMap = setPaperPageMap
// LithiumApp.onBookReady = onBookReady
// LithiumApp.onPagingSetup = onPagingSetup

// function notifySize(a, b) {
//   console.log('notifySize', a, b)
//   // JSBridge.postMessage('notifySize,' + a + ',' + b)
// }

// function onTouchUp(a, b) {
//   console.log('onTouchUp', a, b)
//   // JSBridge.postMessage('a ' + a)
// }

// function setAnchorPositions(a, b) {
//   console.log('setAnchorPositions', a, b)
// }

// function setPaperPageMap(a, b) {
//   console.log('setPaperPageMap,' + a + ',' + b)
// }

// function onBookReady(a, b) {
//   console.log('onBookReady', a, b)
// }

// function onPagingSetup(a, b) {
//   console.log('onPagingSetup', a, b)
// }

// window.flutter_inappwebview = { callHandler: console.log }
