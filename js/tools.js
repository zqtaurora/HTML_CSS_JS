/* 
                参数：
                obj 要执行动画的对象
                target 对象的停止位置
                speed 动画的移动速度
                attr 动画要执行的样式，比如left right width height
                callback 回调函数，动画执行以后执行
            */

function move(obj, target, speed, attr, callback) {
  // 开启定时器之前关闭定时器
  clearInterval(obj.timer);
  // 开启定时器

  // 获取当前位置
  var current = parseInt(getComputedStyle(obj)[attr]);
  if (current > target) speed = -speed;

  // 向对象添加timer属性来保存自己的定时器标识
  obj.timer = setInterval(function () {
    //获取原值
    var oldValue = parseInt(getComputedStyle(obj)[attr]);
    // console.log(oldValue);
    var newValue = oldValue + speed;
    if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target))
      newValue = target;

    obj.style[attr] = newValue + "px";

    if (newValue == target) {
      clearInterval(obj.timer);
      // 动画执行完毕，执行回调函数
      callback && callback();
    }
  }, 10);
}

// 向指定元素中添加class属性
/* 
                参数：
                obj 要添加属性的元素
                cn 要添加的类名
            */
function addClass(obj, cn) {
  if (!hasClass(obj, cn)) {
    obj.className += " " + cn;
  }
}

// 判断一个元素中是否含有指定的属性值
/* 
             有返回true 无返回false
            */
function hasClass(obj, cn) {
  // 创建一个正则表达式
  // var reg=/\bb2\b/;
  var reg = new RegExp("\\b" + cn + "\\b");
  // alert(reg);  /\bcn\b/
  return reg.test(obj.className);
}

//    删除元素当中指定的类
function removeClass(obj, cn) {
  var reg = new RegExp("\\b" + cn + "\\b");

  obj.className = obj.className.replace(reg, "");
}

/*  
        toggleClass 切换一个类 
        有就删除，没有就添加
        
        */
function toggleClass(obj, cn) {
  // 判断是否含有obj
  if (hasClass(obj, cn)) removeClass(obj, cn);
  else addClass(obj, cn);
}
