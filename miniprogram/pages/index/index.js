var page = undefined;
Page({
  onLoad: function () {
    page = this;
    var value=["只要还活着","我喜欢夏天","别看了，我过得比你好","农民伯伯","我的心是冰冰","太下饭啦","坏女人罢了","逛妹妹","弟弟","笨B","温柔上进","第七第八，福星的家","戒色"];
    setInterval(function() {
      doommList.push(new Doomm(value[Math.floor(Math.random()*value.length)],Math.ceil(Math.random()*100),5,getRandomColor()));
      page.setData({
        doommData : doommList
      })
    },300);
  },
  data: {
    doommData:[],
    array:[{img:"/images/cmj.png"},{img:"/images/chf.png"},{img:"/images/hys.png"}],
    num:0
  },
  binddd:function() {
    this.setData({
      showModal: true,
      num:Math.floor(Math.random()*3)
    })
  },
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
})


var doommList=[];
var i=0;//用做唯一的wx:key
class Doomm{
  constructor(text,top,time,color){
    this.text=text;
    this.top = top;
    this.time = time;
    this.color = color;
    this.display = true;
    let that = this;
    this.id=i++;
    setTimeout(function(){
      doommList.splice(doommList.indexOf(that),1);//动画完成，从列表中移除这项
      page.setData({
        doommData : doommList
      })
    },this.time*3000)//定时器动画完成后执行。
  }
}
function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}