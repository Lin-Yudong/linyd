<template>
  <body>
    <span class="sp">
      <span class="left"></span><span class="right"></span>
    </span>
    <div class="container">
      <div class="point">
        <div class="ripple-base ripple-1"></div>
        <div class="ripple-base ripple-2"></div>
      </div>
    </div>
  </body>
</template>

<script>
export default {};
</script>

<style>
span {
  display: inline-block;
}
.left,
.right {
  width: 50px;
  height: 80px;
  background-color: red;
  border-top-left-radius: 25px; /*圆角设置*/
  border-top-right-radius: 25px;
}
/*旋转设置*/
.left {
  transform: rotateZ(-45deg);
}
/*平移加旋转设置*/
.right {
  transform: translateX(-28px) rotateZ(45deg);
}
/*引用设置好的帧动画方法，中间为动画的持续时间，最后为循环方式，Infinite为无限循环*/
.sp {
  padding: 100px;
  animation: heart 1s infinite;
}
/*帧动画设置，heatt为自己命名的方法名字*/
@keyframes heart {
  30% {
    transform: scale(1.3); /*关键帧设置，30%为时间点，scale为缩放*/
  }
  100% {
    transform: scale(1);
  }
}
.container {
  padding: 150px;
  position: relative;
}
.point {
  width: 10px;
  height: 10px;
  background-color: lightseagreen;
  border-radius: 50%;
  position: absolute;
}
.ripple-1 {
  animation: ripple 3s 1s infinite; /*引用动画ripple，持续时间3s，延迟开始时间1s，循环方式无限infinite*/
}
.ripple-2 {
  animation: ripple 3s 2.5s infinite;
}
.ripple-base {
  width: 120px;
  height: 120px;
  border: 2px solid lightseagreen;
  transform: scale(0.01); /*初始变换为缩放状态的0.01倍*/
  border-radius: 50%; /*圆角设置*/
  position: absolute;
  left: -57px; /*定位设置*/
  top: -57px;
}
/*动画设置，定义方式命名ripple，不透明度opacity，变换transform*/
@keyframes ripple {
  100% {
    opacity: 0;
    transform: scale(1);
  }
}
</style>