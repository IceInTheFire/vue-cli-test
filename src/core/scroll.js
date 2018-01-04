function setScroll (dVue, scroll, pullDown, topNum) {    // topNum第三个是初始值
  var top = topNum >= 0 ? topNum : (dVue.$store.state.scrollTop[scroll.title] || 0)
  var blank = document.documentElement || document.body
  var bodyHeight = blank.clientHeight
  if (document.documentElement && document.documentElement.scrollTop) {
    document.documentElement.scrollTop = top
  } else if (document.body) {
    document.body.scrollTop = top
  }
  var set = setTimeout(() => {
    window.onscroll = () => {
      var scrollTop
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop
      } else if (document.body) {
        scrollTop = document.body.scrollTop
      }
      var t = scrollTop
      dVue.$store.commit('setScrollTop', {'key': scroll.title, 'top': t})

      var sumHeight = document.getElementById('app').clientHeight
      if (t > bodyHeight + 5) {
        scroll.backTop = true
      } else {
        scroll.backTop = false
      }
      if (sumHeight - bodyHeight - t < 5) {
        pullDown()
      }
    }
    clearTimeout(set)
    set = null
  }, 500)
}

function up (dVue, scroll) {
  if (document.documentElement && document.documentElement.scrollTop) {
    document.documentElement.scrollTop = 0
  } else if (document.body) {
    document.body.scrollTop = 0
  }
  dVue.$store.commit('setScrollTop', {'key': scroll.title, 'top': 0})
  scroll.backTop = false
}

function closeScroll () {
  console.log('来过这里了')
  window.onscroll = null
}

export default {
  setScroll: setScroll,
  closeScroll: closeScroll,
  up: up,
  clearScroll: up
}
