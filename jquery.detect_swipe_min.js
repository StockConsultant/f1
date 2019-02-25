(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory)}else if(typeof exports==='object'){module.exports=factory(require('jquery'))}else{factory(jQuery)}}(function($){$.detectSwipe={version:'2.1.2',enabled:'ontouchstart' in document.documentElement,preventDefault:!0,threshold:20};var startX,startY,isMoving=!1;function onTouchEnd(){this.removeEventListener('touchmove',onTouchMove);this.removeEventListener('touchend',onTouchEnd);isMoving=!1}
function onTouchMove(e){if($.detectSwipe.preventDefault){e.preventDefault()}
if(isMoving){var x=e.touches[0].pageX;var y=e.touches[0].pageY;var dx=startX-x;var dy=startY-y;var dir;var ratio=window.devicePixelRatio||1;if(Math.abs(dx)*ratio>=$.detectSwipe.threshold){dir=dx>0?'left':'right'}
else if(Math.abs(dy)*ratio>=$.detectSwipe.threshold){dir=dy>0?'up':'down'}
if(dir){onTouchEnd.call(this);$(this).trigger('swipe',dir).trigger('swipe'+dir)}}}
function onTouchStart(e){if(e.touches.length==1){startX=e.touches[0].pageX;startY=e.touches[0].pageY;isMoving=!0;this.addEventListener('touchmove',onTouchMove,!1);this.addEventListener('touchend',onTouchEnd,!1)}}
function setup(){this.addEventListener&&this.addEventListener('touchstart',onTouchStart,!1)}
function teardown(){this.removeEventListener('touchstart',onTouchStart)}
$.event.special.swipe={setup:setup};$.each(['left','up','down','right'],function(){$.event.special['swipe'+this]={setup:function(){$(this).on('swipe',$.noop)}}})}))