/**
 * Created by Administrator on 2017/7/7.
 */
//定义乱序函数
function shuffle(a) {
    var len = a.length;
    for (var i = 0; i < len - 1; i++) {
        var index = parseInt(Math.random() * (len - i));
        var temp = a[index];
        a[index] = a[len - i - 1];
        a[len - i - 1] = temp;
    }
}
//拆分页面传入的参数得到杀手和平民的数量
var back=document.getElementsByClassName('back')[0];
var str=window.location.href.split('?');
//定义数组存储角色
var num=parseInt(str[1]);
var storage=window.sessionStorage;
var players=JSON.parse(storage["players"]);
//定义自增变量指向按钮查看顺序
var p=1;
//获取不变的元素
var serial=document.getElementsByClassName('sequence')[0];
serial.innerHTML=p.toString();
var image1=document.getElementsByClassName('turnover')[0];
image1.style.display="block";
var image2=document.getElementsByClassName('wow')[0];
image2.style.display="none";
var word1=document.getElementsByClassName('player')[0];
word1.style.display="none";
var word2=document.getElementsByClassName('siberia')[0];
word2.style.display="none";
var word3=document.getElementsByClassName('cue')[0];
word3.style.display="none";
var btn=document.getElementsByClassName('check')[0];
btn.innerHTML="查看"+p.toString()+"号身份";

function show() {
    if(image1.style.display=="block"){
        image1.style.display="none";
    }else{
        image1.style.display="block";
        serial.innerHTML=p.toString();
        btn.innerHTML="查看"+p.toString()+"号身份";
    }

    if(image2.style.display=="none"){
        image2.style.display="block";
    }else{
        image2.style.display="none";
    }

    if(word1.style.display=="none"){
        word1.style.display="block";
        word1.innerHTML=players[p-1];
    }else{
        word1.style.display="none";
    }

    if(word2.style.display=="none"){
        word2.style.display="block";
    }else{
        word2.style.display="none";
    }

    if(word3.style.display=="none"){
        word3.style.display="block";
        p++;
        if(p>num){
            btn.innerHTML="法官查看";
        }else{
            btn.innerHTML="隐藏并传递给"+p.toString()+"号";
        }
    }else{
        word3.style.display="none";
    }
}

//创建变化的元素
btn.onclick=function () {
    if(p<=num){
        show();
    }else{
        window.location.href="judge-view.html?"+num.toString();
    }
};
back.onclick=function () {
    window.location.href="allocation.html";
};