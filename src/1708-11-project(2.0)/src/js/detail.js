 document.addEventListener('DOMContentLoaded',function(){
   // ---------------------------------李孟辉（商品详细信息介绍）-------------------------------------------
   (function(){
         var res={};
    var result=[];
    // 获取url传递参数函数
    function geturldata(){
         // 获取传递过来的参数
        var params=location.search;
        params=decodeURI(params); 
        // 获取问号后面的链接
        var url=params.substring(1);
        var detail=document.getElementById('detail');
        // 以&号拆分，将字符串拆分成数组
        url=url.split('&');
        // 遍历数组
        url.forEach(function(item,idx){
            var arr=item.split('=');
            res[arr[0]]=arr[1];
        });
    }
    geturldata();
     var cookies=document.cookie;
        cookies=cookies.split('; ');
        console.log(cookies.length)
         
            cookies.forEach(function(item){
              var arr=item.split('=');
              if(arr[0]==='res'){
                result=JSON.parse(arr[1]);
                console.log(result);
              }
            }); 

// 将通过url传递过来的对象push到数组中生成cookie用于添加购物车
    // 将物品价格数据截取成number类型用于后面价格方面计算
    var nowPrice=res.nowPrice;
    nowPrice=nowPrice.substring(2);
        var detail_l=document.querySelector('.detail_l');
        detail_l.innerHTML=`<div class="imgbox">
                                <ul class="clearfix">
                                    <li><img src="${res.imgSrc}"class="bimg"></li>
                                    <li><img src="../images/lmj_a2.png"class="bimg"></li>
                                    <li><img src="../images/lmj_a3.png"class="bimg"></li>
                                    <li><img src="../images/lmj_a4.png"class="bimg"></li>
                                    <li><img src="../images/lmj_a1.png"class="bimg"></li>
                                </ul>
                            </div>
                            <div class="showbox">
                                <ul class="clearfix">
                                    <li><img src="../images/tab_l.png" class="but" id="prev"></li>
                                    <li><img src="${res.imgSrc}"class="showimg"></li>
                                    <li><img src="../images/mainr_b2.png" class="showimg"></li>
                                    <li><img src="../images/mainr_b3.png" class="showimg"></li>
                                    <li><img src="../images/mainr_b4.png" class="showimg"></li>
                                    <li><img src="../images/mainr_b1.png" class="showimg"></li>
                                    <li><img src="../images/tab_r.png" class="but" id="next"></li>
                                </ul>
                            </div>`;
        var showbox=document.querySelector('.showbox');
        var showimg=showbox.querySelectorAll('.showimg');
        var bimg=document.querySelectorAll('.bimg');
        let index=0;
        // 页面加载后除第一张图片隐藏其他全部隐藏，显示第一个小图片高亮
        for(let i=0;i<showimg.length;i++){
            if(i===0){
                showimg[i].className='show_active';
                bimg[i].style.display='block';
            }else{
                 showimg[i].className='showimg';
                 bimg[i].style.display='none';
            }
        }
        // 切换小图片对应相应的大图片
         for(let i=0;i<showimg.length;i++){
            showimg[i].onmouseenter=function(){
                for(let i=0;i<showimg.length;i++){
                    showimg[i].className='showimg';
                    bimg[i].style.display='none';
                }
                   showimg[i].className='show_active';
                    bimg[i].style.display='block';
            }
         } 
        // 按下左右按钮控制图片左右展示
        var next=document.querySelector('#next');
        var prev=document.querySelector('#prev');
         function tabshow(idx){
             for(let j=0;j<showimg.length;j++){
                bimg[j].style.display='none';
                bimg[idx].style.display='block';
                showimg[j].className='showimg';
                showimg[idx].className='show_active';
              }
        }
        prev.onclick=function(){
            if(index<=0){
                index=showimg.length;
            }
            index--;
            tabshow(index);
        }
        next.onclick=function(){
            index++;
            if(index>=showimg.length){
                index=0;
            }
            tabshow(index);
        }

        // 商品信息详细介绍
         // UGG Kids’ Toddler Bailey Button 5991 Chsetnut-Leopard（商品标题默认文本）
        var detail_m=document.querySelector('.detail_m');
        detail_m.innerHTML=`<div class="det_m_t">
                            <h2>${res.gname}<span>SKU:V41132</span></h2>
                            <img src="../images/freeshipping.png" alt="">
                            <table cellspacing="0"cellPadding="0" border="1">
                                <tr>
                                    <td>Orders</td><td>Qty</td><td>Descripition</td><td style="color:#999;">Prices</td>
                                </tr>
                                <tr>
                                    <td>Retail</td><td>1-4</td><td>Any Items<5</td><td>${nowPrice*1+20}</td>
                                </tr>
                                <tr>
                                    <td rowspan="3">Factory</br>Wholesale</td><td>5-9</td><td>5+'<'sample Items+'<'10</td><td>${nowPrice}</td>
                                </tr>
                                <tr>
                                     <td>10-19</td><td>10+'<'sample Items+'<'20</td><td>${nowPrice-20}</td>
                                </tr>
                                 <tr>
                                     <td>>=20</td><td>sample Items>=20</td><td>${nowPrice-20}</td>
                                 </tr>
                            </table>
                            </div>
                            <div class="det_m_m">
                                <h2>list price:<del>py6$ ${nowPrice*2}</del></h2>
                                <h2>our price:py6$ ${nowPrice}</h2>
                                <img src="../images/det_m2.png" class="det_m_sale">
                                <img src="../images/det_m1.png">
                                <span>py6$ ${nowPrice}</span><span class="det_m_span">completed</span>
                                <p>This Complain has now ended.Please&nbsp;<a href="../html/商品列表页面.html"><ins>check here</ins></a>&nbsp;to see the lasted product imformation</p>
                            </div>
                            <div class="det_m_s">
                                <ul class="det_size clearfix">
                                    <span class="fl">Size:</span>
                                    <li>35<i></i></li>
                                    <li>36<i></i></li>
                                    <li>37<i></i></li>
                                    <li>38<i></i></li>
                                    <li>39<i></i></li>
                                </ul></br>
                                <ul class="det_color clearfix" style="margin-bottom:10px;">
                                    <span class="fl">Color:</span>
                                    <li>Black<i></i></li>
                                    <li>Red<i></i></li>
                                    <li>White<i></i></li>
                                    <li>Green<i></i></li>
                                    <li>Yellow<i></i></li>
                                </ul>
                                <a href="#"style="color:#58bc58;"><i style="width:18px;height:14px;display:inline-block;background:url('../images/freegift.png');"></i><ins>freeGift</ins></a></br>
                                <div class="checkbox">
                                    <input type="checkbox" id="shipping_one">Gennnius Original Package one<span style="color:orange;">$6.899</span><a href="#" class="fr" style="color:blue;"><ins>View</ins></a></br>
                                </div>
                                <div class="checkbox">
                                     <input type="checkbox" id="shipping_two">Gennnius Original Package two<span style="color:orange;">$18.899</span><a href="#" class="fr" style="color:blue;"><ins>View</ins></a></br>
                                </div>   
                            </div>
                            <div class="det_m_b">
                                <a href="../html/shopCar.html" class="addTocar"><img src="../images/addcar.png"></a>
                                <p class="qty">Quantity:<input type="number" value="1" id="num"></p>
                                <p style="font-size:14px;margin-top:10px;">${nowPrice}&times;<span id="count"style="color:red;"></span>=<span id="re" style="color:red;padding-right:15px;"></span>TOTAL:<span id="total"style="color:red;"></span></p>
                                <p style="font-size:14px;margin-top:5px;">From this order you get <span style="color:#58bc58">139</span> point</p>
                            </div>
                           `
            var detcolor=document.querySelector('.det_size');
            var detsize=document.querySelector('.det_color');
            var colorli= detcolor.querySelectorAll('li');
            var colori= detcolor.querySelectorAll('i'); 
            var sizeli= detsize.querySelectorAll('li');
            var sizei= detsize.querySelectorAll('i');
             // 页面加载后除第一个size,color其他全部隐藏
                for(let a=0;a<colorli.length;a++){
                    if(a===0){
                        colorli[a].id='det_active';
                        sizeli[a].id='det_active';
                        colori[a].style.display='block';
                    }else{
                        colorli[a].id='none';
                        colori[a].style.display='none';
                        sizei[a].style.display='none';
                    }
                }
                sel(colorli,colori);
                sel(sizeli,sizei);
                function sel(item,itemchild){
                    for(let a=0;a<item.length;a++){
                    item[a].onclick=function(){
                        for(let a=0;a<item.length;a++){
                             item[a].id='none';
                            itemchild[a].style.display='none';
                        }
                            item[a].id='det_active';
                            itemchild[a].style.display='block';
                        }
                     } 
                }

                // 当输入数量框的值发生改变时对应的总价变化
                var shipone=document.querySelector('#shipping_one');
                var shiptwo=document.querySelector('#shipping_two');
                var sspanone=shipone.nextElementSibling.innerText;
                var sspantwo=shiptwo.nextElementSibling.innerText;
                sspanone=sspanone.substring(1);
                sspantwo=sspantwo.substring(1);
                var num=document.querySelector('#num');
                var count=document.querySelector('#count');
                var re=document.querySelector('#re');
                var total=document.querySelector('#total');
                var addTocar=document.querySelector('.addTocar');
                sum();
                shipone.onclick=function(){
                    checkedShip(shipone,sspanone);
                    !shiptwo.checked;
                }
                shiptwo.onclick=function(){
                    checkedShip(shiptwo,sspantwo);
                    !shipone.checked;
                }
                // 封装勾选运费函数
                    function checkedShip(ship,shipmoney){
                        if(ship.checked){
                             total.innerText=(re.innerText)*1+shipmoney*1;
                        }else{
                            total.innerText=(re.innerText)*1;
                        }
                    }
                num.oninput=function(){
                    sum();
                    if(checkedShip(shipone,sspanone)){
                        checkedShip(shipone,sspanone);
                    }else if(checkedShip(shiptwo,sspantwo)){
                        checkedShip(shiptwo,sspantwo);
                    }
                }
                // 计算物品数量总价函数
                function sum(){
                    // 数量输入框不能小于1
                    if(num.value<=1){
                        num.value=1;
                    }
                    var countnum=num.value
                     count.innerText=countnum;
                     total.innerHTML=re.innerText=(nowPrice*countnum).toFixed(2);
                }
                var temp=0;
                var temparr=[];
                 // 点击加入购物车后执行生成cookie函数
                addTocar.onclick=function(){  
                    result.push(res);
                    result[result.length-1].qty=num.value;  
                    var now=new Date();
                    now.setDate(now.getDate()+7);
                    document.cookie='res='+JSON.stringify(result)+';expires='+now.toUTCString()+';path=/';
                    console.log(document.cookie);      
                }
    var detail_r=document.querySelector('.detail_r');
    detail_r.innerHTML=`<div class="det_r_t">
                            <h2>In Stock!</h2>
                            <ul class="star">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <a href="#">(<ins>20</ins>view)</a>
                        </div>
                        <div class="det_r_m">
                            <img src="../images/det_r_m.png">
                            <ul>
                                <a href="#"><li><i style="background-position:0 0;"></i>Add to wishlist</li></a>
                                <a href="#"><li><i style="background-position:0 -30px;"></i>Contact us</li></a>
                                <a href="#"><li><i style="background-position:0 -60px;"></i>Print</li></a>
                            </ul>
                            <img src="../images/det_r_b.png">
                        </div>`
    var star=document.querySelector('.star');
    var starli=star.querySelectorAll('li');
    starli[0].id='star';
    // 遍历添加5星评价效果
        starli.forEach(function(item,idx){
            starli[idx].onclick=function(){
               for(let i=0;i<starli.length;i++){
                    starli[i].id='';
               }
               for(let i=0;i<=idx;i++){
                    starli[i].id='star';
               }
            }
        })
   })();
   
   // ----------------------------------------李孟辉（商品详细信息介绍结束）--------------------------------     
  // ----------------------------李志杰（商品评价部分）----------------------------------------------
  // ----------------------------李志杰（商品评价部分）----------------------------------------------
  var rec_list = document.getElementById('rec_list');
    var rec_res =[
        {
            id:'001',
            imgurl:'../images/seller1.png',
            name:'Up & Down Open Cowhide Leather Case with Crocodile...',
            terms:'py6. 219',
            sale:'py6. 189',
            save:'py6. 30'
        },{
            id:'002',
            imgurl:'../images/seller2.png',
            name:'Decent Module Case Silicone Skin Cover for iPhone...',
            terms:'py6. 199',
            sale:'py6. 189',
            save:'py6. 10'
        },{
            id:'003',
            imgurl:'../images/seller3.png',
            name:'Decent Module Case Silicone Skin Cover for iPhone...',
            terms:'py6. 429',
            sale:'py6. 339',
            save:'py6. 90'
        },{
            id:'004',
            imgurl:'../images/seller4.png',
            name:'Up & Down Open Cowhide Leather Case with Crocodile...',
            terms:'py6. 319',
            sale:'py6. 189',
            save:'py6. 150'
        },{
            id:'005',
            imgurl:'../images/seller5.png',
            name:'Decent Module Case Silicone Skin Cover for iPhone...',
            terms:'py6. 449',
            sale:'py6. 420',
            save:'py6. 29'
        },{
            id:'006',
            imgurl:'../images/seller6.png',
            name:'Decent Module Case Silicone Skin Cover for iPhone...',
            terms:'py6. 288',
            sale:'py6. 188',
            save:'py6. 100'
        }];
    var rec_html ='<ul class="rec_lists">';
    for(var i=0;i<rec_res.length;i++){
        rec_html += '<li id="'+rec_res[i].id+'"><img src="'+rec_res[i].imgurl+'"/>'+'<p>'+rec_res[i].name+'</p>'+'<p>List Price：<del>'+rec_res[i].terms+'</del></p>'+'<p>Our Price：<span class="rec_m">'+rec_res[i].sale+'</span></p>'+'<p class="rec_p4">Save：'+rec_res[i].save+'</p>'+'</li>';

    }
    rec_html += '</ul>';
    rec_list.innerHTML=rec_html;
    // 
    var com_b =  document.getElementById('comment_b');
    var gra_i1 =  document.getElementById('grade_i1');
    var gra_btn =  document.getElementById('grade_btn');
    // 
    // 
    var gra_msg =  document.getElementById('msg');
    var msg_content = [];
    var g_m_arr=['shit','fuck','mmp'];
    // ---------------------------------------------------------------------
    // 评价列表初始化
    var comment_b = document.querySelector('#comment_b');
    // var com_arr = ['Very nice the casual shirt,is equal to the photo on the web,arrived on time,in excellent condition,I recommend.negative:on trademark','Very nice the casual shirt,is equal to the photo on the web,arrived on time,in excellent condition,I recommend.negative:on trademark','Very nice the casual shirt,is equal to the photo on the web,arrived on time,in excellent condition,I recommend.negative:on trademark','Very nice the casual shirt,is equal to the photo on the web,arrived on time,in excellent condition,I recommend.negative:on trademark'];
    // comment_b.innerHTML = com_fz();
    // function com_fz(){
    //     var com_li = '';
    //     for(var j=0;j<com_arr.length;j++){
    //         com_li +='<li class="clearfix"><img src="../images/xingxing.png" alt="" /><span>'+com_arr[j]+'</span></li>'
    //     }
    //     return com_li;
    // }
    /* ------------------------------优化部分--------------------------*/
    // 评论列表              
    // 数据
    var com_arr = [
    {
        pingfen:5,
        time:"07/11/2012",
        uname:"test",
        zan: "<button class='cBtn1'><img class='zan' src='../images/zan.png'><br/><i class='zan'>(0)</i></button>",
        fzan:"<button class='cBtn2'><img class='fzan' src='../images/fzan.png'><br/><i class='fzan'>(0)</i></button>",
        comments:"Very nice the casual shirt,is equal to the photo on the web,arrived on time,in excellent condition,I recommend.negative:on trademark"
    },{
        pingfen:5,
        time:"07/11/2012",
        uname:"test",
        zan: "<button class='cBtn1'><img class='zan' src='../images/zan.png'><br/><i class='zan'>(0)</i></button>",
        fzan:"<button class='cBtn2'><img class='fzan' src='../images/fzan.png'><br/><i class='fzan'>(0)</i></button>",
        comments:"Very nice the casual shirt,is equal to the photo on the web,arrived on time,in excellent condition,I recommend.negative:on trademark"
    },{
        pingfen:5,
        time:"07/11/2012",
        uname:"test",
        zan: "<button class='cBtn1'><img class='zan' src='../images/zan.png'><br/><i class='zan'>(0)</i></button>",
        fzan:"<button class='cBtn2'><img class='fzan' src='../images/fzan.png'><br/><i class='fzan'>(0)</i></button>",
        comments:"Very nice the casual shirt,is equal to the photo on the web,arrived on time,in excellent condition,I recommend.negative:on trademark"
    }, {
        pingfen:5,
        time:"07/11/2012",
        uname:"test",
        zan: "<button class='cBtn1'><img class='zan' src='../images/zan.png'><br/><i class='zan'>(0)</i></button>",
        fzan:"<button class='cBtn2'><img class='fzan' src='../images/fzan.png'><br/><i class='fzan'>(0)</i></button>",
        comments:"Very nice the casual shirt,is equal to the photo on the web,arrived on time,in excellent condition,I recommend.negative:on trademark"
    },]
   
    function getTime(){
                        var time = new Date();
                        var year = time.getFullYear();
                        var month = time.getMonth();
                        var date = time.getDate();
                        var hour = time.getHours();
                        var minute = time.getMinutes();
                        var second = time.getSeconds();
                        // return year+"-"+month+1+"-"+date+" "+hour+
                        // ":"+minute+":"+second; 
                        return date+"/"+month+1+"/"+year;        
                    } 
   
  
    // 点赞操作
    var n =0;var m=2;
    comment_b.onclick = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement;
        if(target.className === "zan"){
            n++;
            target.parentNode.children[2].innerText = "("+n+")";
                }
        if(target.className === "fzan"){
            m++;
            target.parentNode.children[2].innerText = "("+m+")";
                }
        }
    // 用户发表评论部分
    var grade_comment = document.querySelector(".grade_comment");
    var pingfen_score = [42,31,8,1,100];
    var c_t_r = document.querySelector(".c_t_r");
    var pf_score = c_t_r.querySelectorAll(".pf_score");
    pf_score.forEach(function(item,idx){
        item.innerHTML = pingfen_score[idx]
    });
    grade_comment.innerHTML = 
    `<li><img src="../images/det_star.png"></li>
    <li><img src="../images/det_star.png"></li>
    <li><img src="../images/det_star.png"></li>
    <li><img src="../images/det_star.png"></li>
    <li><img src="../images/det_star.png"></li></br>`;
    // 遍历添加5星评价效果
    var gLi = grade_comment.querySelectorAll("li");
    var pingfen;
    gLi.forEach(function(item,idx){
            gLi[idx].onclick=function(){ 
               for(let i=0;i<gLi.length;i++){
                    gLi[i].innerHTML ="<img src='../images/det_star.png' />"
               }
               for(let i=0;i<=idx;i++){
                   gLi[i].innerHTML = "<img src='../images/det_bristar.png' />"

               }
               return pingfen = idx+1;
            }
        }) 
    // 判断评分
    function judgePf(pingfen){
        switch(pingfen){
            case 1 : pingfen_score[4]++; return `
            <li><img src="../images/det_bristar.png" /></li>
            <li><img src="../images/det_star.png" /></li>
            <li><img src="../images/det_star.png" /></li>
            <li><img src="../images/det_star.png" /></li>
            <li><img src="../images/det_star.png" /></li>`;break;
            case 2 : pingfen_score[3]++;return `
            <li><img src="../images/det_bristar.png" /></li>
            <li><img src="../images/det_bristar.png" /></li>
            <li><img src="../images/det_star.png" /></li>
            <li><img src="../images/det_star.png" /></li>
            <li><img src="../images/det_star.png" /></li>`;break;
            case 3 : pingfen_score[2]++;return `
            <li><img src="../images/det_bristar.png" /></li>
            <li><img src="../images/det_bristar.png" /></li>
            <li><img src="../images/det_bristar.png" /></li>
            <li><img src="../images/det_star.png" /></li>
            <li><img src="../images/det_star.png" /></li>`;break;
            case 4 : pingfen_score[1]++;return `
            <li><img src="../images/det_bristar.png" /></li>
            <li><img src="../images/det_bristar.png" /></li>
            <li><img src="../images/det_bristar.png" /></li>
            <li><img src="../images/det_bristar.png" /></li>
            <li><img src="../images/det_star.png" /></li>`;break;
            case 5 : pingfen_score[4]++;return `
            <li><img src="../images/det_bristar.png" /></li>
            <li><img src="../images/det_bristar.png" /></li>
            <li><img src="../images/det_bristar.png" /></li>
            <li><img src="../images/det_bristar.png" /></li>
            <li><img src="../images/det_bristar.png" /></li>`;
        }
    }
    // 把数据写入结构
    function addComment(){
        return  com_arr.map(function(item){
           return `<li class="comment_bLi clearfix">
                    <div class="comment_bl">
                        <ul class="ave_rate"> ${judgePf(item.pingfen)} </ul><br/>
                       
                        <p>${item.time}</p>
                        <p>${item.uname}</p>
                        <p><span>${item.zan}</span> <span>${item.fzan}</span></p>
                    </div>   
                    <span class="s0">${item.comments}</span>
            </li>`;
     }).join("");
    }
     
    comment_b.innerHTML = addComment();

    /* ------------------------------优化结束--------------------------*/


// ---------------------------------------------------------------------   
    // grade加上comment_b
    // 
    //验证码
    var vCode =  document.getElementById('vCode');
    var code =  document.getElementById('code');
    var gra_res ='' ;
    function RVcode(){
        var gra_str = 'abcdefghijklnmopqrstuvwxyz0123456789';
        var gra_code = '';
        for(var i=0;i<4;i++){
            var gra_num = parseInt(Math.random()*gra_str.length);
            gra_code += gra_str.charAt(gra_num);
        }
        return gra_code;
    }
    code.innerHTML=RVcode();

    // 
    //总评分数 
    var count = 82;
    var c_t_l = document.querySelector(".c_t_l");
    // 提交按钮
    gra_btn.onclick=function(){
        if(vCode.value === code.innerText ){
            // // 文明用语判断
            // g_m_arr.forEach(function(item){
            //     var res00= new RegExp(item,'gi');
            //     gra_msg=gra_msg.replace(res00,'***');
            // })
            // msg_content.push(gra_msg);
            // _gra_msg.value='';
            //     com_b.innerHTML = msg_content.map(function(item){
            //         return '<li>'+ item +'</li>'
            //     }).join('');
            // // 评价留言
            // arr.push(gra_msg);
            // comment_b.innerHTML = com_fz();

            // // 清空验证码输入框，刷新验证码
            // vCode.value='';
            // code.innerHTML=RVcode();
            // 获取名字
            var _gra_i1 = gra_i1.value;
            var _gra_msg = gra_msg.value;
             // 写入新数据
            var newObj= {
                pingfen:pingfen,
                time:getTime(),
                uname:_gra_i1,
                zan: "<button class='cBtn1'><img class='zan' src='../images/zan.png'><br/><i class='zan'>(0)</i></button>",
                fzan:"<button class='cBtn2'><img class='fzan' src='../images/fzan.png'><br/><i class='fzan'>(0)</i></button>",
                comments:_gra_msg
            }  
            com_arr.push(newObj);
            comment_b.innerHTML = addComment();
            // 评价累加 
            count++;
            pf_score.forEach(function(item,idx){
                item.innerHTML = pingfen_score[idx]
            });
            c_t_l.children[2].innerHTML = count +" reviews";
            gra_i1.value ="";
            gra_msg.value ="";
            // 计算平均值
            cal_ave();

            
        }else{
            alert('验证码不正确');
            vCode.value='';
            code.innerHTML=RVcode();
            return false;
        }
    }

// ---------------------------------------------------------------------
 /*---------计算平均分----------*/ 
   
   function cal_ave(){
        c_t_l.children[1].innerHTML = `<ul class="ave_rate">
        <li><img src="../images/det_star.png"></li>
        <li><img src="../images/det_star.png"></li>
        <li><img src="../images/det_star.png"></li>
        <li><img src="../images/det_star.png"></li>
        <li><img src="../images/det_star.png"></li>
        </ul><br/>`;
        // 计算平均评分，先计算总分
        var c_t_r = document.querySelector(".c_t_r");
        var j=5;
        var total=0;
        for(var i=0;i<c_t_r.children.length;i++){
            total += pf_score[i].innerText*j
            j--
        }
        // 获取平均值
        console.log(total);
        console.log(count);
        var average = Math.floor(total/count);
        console.log(average);
        // 平均评价星星
        var ave_rate = document.querySelector(".ave_rate");
        for(var i=0;i<average;i++){
            ave_rate.children[i].innerHTML = "<img src='../images/det_bristar.png' />"
                                                       
        }
       } 
    cal_ave();
   

/*---------计算平均分结束----------*/ 
    // main_b中的tab键切换
var tab = document.getElementsByClassName('main_b')[0];
var tabItem = tab.children[0].children;
var tabContent = tab.children[1].children;
// var tabItem = document.getElementsByClassName('main_bt1');
// var tabContent = document.getElementsByClassName('main_bb');
var len = tabItem.length;

for(var i=1;i<len+1;i++){
    if(i===1){
        // 高亮第一个tab
        tabItem[i].className = 'active';
    }else{
        // 隐藏除第一张以外的图片
       
        tabContent[i].style.display = 'none';
    }

    // 切换：鼠标点击tab（关键：获取点击的index值）
    (function(i){
        tabItem[i].onmouseover = function(){
            // * 高亮显示当前tab,去除其他高亮
            // * 切换相应的图片，隐藏其他图片
       

            for(var j=1;j<len+1;j++){
                if(j === i){
                    tabItem[j].className = 'active';
                    tabContent[j].style.display = 'block';
                }else{
                    tabItem[j].className = '' ;
                    tabContent[j].style.display = 'none';
                }
            }
        }
    })(i)
}
  // -----------------------------------李志杰（商品评价部分结束）--------------------------------------
})