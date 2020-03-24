var items = document.getElementsByClassName('item');
var index = 0; //表示现在第几张图片正在轮播

var leftBtn = document.getElementsByClassName('left')[0];
var rightBtn = document.getElementsByClassName('right')[0];

// 第一步 修改index
// 第二步 把index的效果设置在页面上
var setIndexToView = function() {
  // 暴力方法，把全部的active一次去掉，再根据我需要的设置index
  for(var i = 0; i< items.length; i++) {
    items[i].classList.remove('active')
  }
  items[index].classList.add('active')
}

var goNext = function() {
  if (index === items.length - 1) {
    index = 0
  } else {
    index++
  }
  setIndexToView()
}

var goPrev = function() {
  if (index === 0) {
    index = items.length - 1
  } else {
    index--
  }
  setIndexToView()
}
leftBtn.addEventListener('click', function () {
  goPrev()
})
rightBtn.addEventListener('click', function () {
  goNext()
})