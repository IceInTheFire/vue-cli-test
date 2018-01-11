;(function (doc, win) {
  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function () {
    var clientWidth = docEl.clientWidth
    if (typeof (clientWidth) === 'number' && clientWidth <= 750 && clientWidth > 319) {  // 手机端自适应,   基础20
      docEl.style.fontSize = 20 * (clientWidth / 375) + 'px'
    } else if (typeof (clientWidth) === 'number' && clientWidth > 750) {   // pc端基础为40/2  20 手机端的适配
      docEl.style.fontSize = '40' + 'px'
    }
    docEl.style.overflowY = 'auto'
    /*
     * 添加dpr
     * */
    var d = window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1
    docEl.setAttribute('data-dpr', d)
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
  recalc()
})(document, window)
