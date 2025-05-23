﻿// 复制提醒
document.addEventListener("copy",function(e){
  new Vue({
    data:function(){
      this.$notify({
        title:"哎嘿！复制成功",
        message:"若要转载请务必保留原文链接！",
        position: 'bottom-right',
        offset: 50,
        showClose: false,
        type:"success"
      });
      return{visible:false}
    }
  })
})

/* 禁用F12按键并提醒 */
document.onkeydown = function () {
  if (window.event && window.event.keyCode == 123) {
    event.keyCode = 0;
    event.returnValue = false;
    new Vue({
      data:function(){
        this.$notify({
          title:"嘿！别瞎按！",
          message:"不要乱按键盘啦",
          position: 'bottom-right',
          offset: 50,
          showClose: false,
          type:"error"
        });
        return{visible:false}
      }
    })
    return false;
  }
};