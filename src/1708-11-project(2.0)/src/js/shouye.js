document.addEventListener('DOMContentLoaded',function(){
    // 二级导航补充代码
    let uls=document.querySelector('.navl_list');
    uls.style.display='block';
    // 轮播图补充代码部分开始（李孟辉）
    (function(){
        var banner_r=document.querySelector('.banner_r');
          var tabbtn_l=document.querySelector('.tabbtn_l');
          var tabbtn_r=document.querySelector('.tabbtn_r');
         var imglist=document.querySelector('.imglist');
         var btnlist=document.querySelector('.btnlist');
          var imgs=imglist.querySelectorAll('li');
          var btns=btnlist.querySelectorAll('li');
          var i=index=0;
            tabbtn_l.style.display='none';
            tabbtn_r.style.display='none';
            function show(a){
              for(i=0;i<imgs.length;i++){
                  imgs[i].className='';
                  imgs[a].className='current';
              }
              for(i=0;i<btns.length;i++){
                  btns[i].className='';
                  btns[a].className='current';
              }
          }
            autoPlay();
          function autoPlay(){
            for(i=0;i<btns.length;i++){
              btns[i].index=i;
              btns[i].onmouseenter=function(){
                show(this.index);
                clearInterval(timer);
              }
            }
              var timer=setInterval(function(){
                index++;
                if(index>=imgs.length){
                  index=0;
                }
                show(index);
              }, 3000);
               // 鼠标移到图片上时停止轮播
            banner_r.onmouseover=function(){
              clearInterval(timer);
              tabbtn_l.style.display='block';
              tabbtn_r.style.display='block';
            };
              // 鼠标移出图片外继续轮播
            banner_r.onmouseleave=function(){
              autoPlay();
                tabbtn_l.style.display='none';
              tabbtn_r.style.display='none';
            };
            }
          // 往后后退到上一张图片
          tabbtn_l.onclick=function(){
                if(index<=0){
                  index=imgs.length;
                }
                index--;
                show(index);
           }
          // 往前前进到上一张图片
           tabbtn_r.onclick=function(){
              index++;
                if(index>=imgs.length){
                  index=0;
                }
                console.log(index);
                show(index);
           }
    })();
    /*--------------------李志杰-------------------*/
  var  tjul = document.querySelector('#tj_c_ul');
 var tj_arr=[       
            {
            sm:1,
            id:1,
            imgSrc:'images/mainr_n1.png',
            title:'Up @ Down Open with Crocodile...',
            listPrice:'USD 219',
            ourPrice:'$ 189',
            savePrice:'$ 30'
            
            },{
            sm:1,
            id:2,
            imgSrc:'images/mainr_n2.png',
            title:'Decent Module Case for iphone...',
            listPrice:'USD 219',
            ourPrice:'$ 189',
            savePrice:'$ 30'
            },{
            sm:1,
            id:3,
            imgSrc:'images/mainr_s1.png',
            title:'Decent Module Case for iphone...',
            listPrice:'USD 219',
            ourPrice:'$ 189',
            savePrice:'$ 30'
            },{
            sm:1,
            id:4,
            imgSrc:'images/mainr_n4.png',
            title:'Decent Module Case for iphone...',
            listPrice:'USD 219',
            ourPrice:'$ 189',
            savePrice:'$ 30'
            },{
            sm:1,
            id:5,
            imgSrc:'images/mainr_n2.png',
            title:'Decent Module Case Silicone Skin...',
            listPrice:'USD 219',
            ourPrice:'$ 189',
            savePrice:'$ 30'
            },{
            sm:1,
            id:6,
            imgSrc:'images/mainr_n3.png',
            title:'Decent Module Case Silicone Skin...',
            listPrice:'USD 219',
            ourPrice:'$ 189',
            savePrice:'$ 30'
            }
            ,{
            sm:1,
            id:7,
            imgSrc:'images/mainr_n4.png',
            title:'Decent Module Case Silicone Skin...',
            listPrice:'USD 219',
            ourPrice:'$ 189',
            savePrice:'$ 30'
            }
            ,{
            sm:1,
            id:8,
            imgSrc:'images/mainr_n1.png',
            title:'Decent Module Case Silicone Skin...',
            listPrice:'USD 219',
            ourPrice:'$ 189',
            savePrice:'$ 30'
            }
            ,{
            sm:1,
            id:9,
            imgSrc:'images/mainr_s1.png',
            title:'Decent Module Case Silicone Skin...',
            listPrice:'USD 219',
            ourPrice:'$ 189',
            savePrice:'$ 30'
            }
            ,{
            sm:1,
            id:10,
            imgSrc:'images/mainr_s2.png',
            title:'Decent Module Case Silicone Skin...',
            listPrice:'USD 219',
            ourPrice:'$ 189',
            savePrice:'$ 30'
            }
            ];
            function tjList(){
                tjul.innerHTML = tj_arr.map((item)=>{
                    return `<li>
                                <img src="${item.imgSrc}">
                                <p><span>${item.title}</span></p>
                                <p>listPrice：<span><del>${item.listPrice}</del></span></p>
                                <p>ourPrice：<span style="color:#FF4500">${item.ourPrice}</span></p>
                                <p style="color:#46907F">Save ${item.savePrice}</p>

                            </li>`

                }).join('');
            }
            tjList();
    var goodsList = document.querySelector('#goodslist');
     var gl_arr=[       
            {
            sm:1,
            id:1,
            imgSrc:'images/mainr_n1.png',
            title:'Up @ Down Open with Crocodile...',
            listPrice:'USD 219',
            ourPrice:'$ 189',
            savePrice:'$ 30'
            
            },{
            sm:1,
            id:2,
            imgSrc:'images/mainr_n2.png',
            title:'Decent Module Case for iphone...',
            listPrice:'USD 219',
            ourPrice:'$ 189',
            savePrice:'$ 30'
            },{
            sm:1,
            id:3,
            imgSrc:'images/mainr_s1.png',
            title:'Decent Module Case for iphone...',
            listPrice:'USD 219',
            ourPrice:'$ 189',
            savePrice:'$ 30'
            },{
            sm:1,
            id:4,
            imgSrc:'images/mainr_n4.png',
            title:'Decent Module Case for iphone...',
            listPrice:'USD 219',
            ourPrice:'$ 189',
            savePrice:'$ 30'
            },{
            sm:1,
            id:5,
            imgSrc:'images/mainr_n2.png',
            title:'Decent Module Case Silicone Skin...',
            listPrice:'USD 219',
            ourPrice:'$ 189',
            savePrice:'$ 30'
            }, {
            sm:1,
            id:1,
            imgSrc:'images/mainr_n1.png',
            title:'Up @ Down Open with Crocodile...',
            listPrice:'USD 219',
            ourPrice:'$ 189',
            savePrice:'$ 30'
            
            },{
            sm:1,
            id:2,
            imgSrc:'images/mainr_n2.png',
            title:'Decent Module Case for iphone...',
            listPrice:'USD 219',
            ourPrice:'$ 189',
            savePrice:'$ 30'
            },{
            sm:1,
            id:3,
            imgSrc:'images/mainr_s1.png',
            title:'Decent Module Case for iphone...',
            listPrice:'USD 219',
            ourPrice:'$ 189',
            savePrice:'$ 30'
            },{
            sm:1,
            id:4,
            imgSrc:'images/mainr_n4.png',
            title:'Decent Module Case for iphone...',
            listPrice:'USD 219',
            ourPrice:'$ 189',
            savePrice:'$ 30'
            },{
            sm:1,
            id:5,
            imgSrc:'images/mainr_n2.png',
            title:'Decent Module Case Silicone Skin...',
            listPrice:'USD 219',
            ourPrice:'$ 189',
            savePrice:'$ 30'
            },{
            sm:1,
            id:1,
            imgSrc:'images/mainr_n1.png',
            title:'Up @ Down Open with Crocodile...',
            listPrice:'USD 219',
            ourPrice:'$ 189',
            savePrice:'$ 30'
            
            },{
            sm:1,
            id:2,
            imgSrc:'images/mainr_n2.png',
            title:'Decent Module Case for iphone...',
            listPrice:'USD 219',
            ourPrice:'$ 189',
            savePrice:'$ 30'
            }
            ];
            function g_list(){
                goodsList.innerHTML = gl_arr.map((timer)=>{
                    return `<li>
                                <a href="#"><img src="${timer.imgSrc}"></a>
                                <p><span>${timer.title}</span></p>
                                <p>listPrice：<span><del>${timer.listPrice}</del></span></p>
                                <p>ourPrice：<span style="color:#FF4500">${timer.ourPrice}</span></p>
                                <p style="color:#46907F">Save ${timer.savePrice}</p>

                            </li>`

                }).join('');
            }
            g_list();
             // ------------------余鹏城-------------------------
        (function(){
            /*--------商品上移开始---------*/ 
        let main_rb = document.querySelector(".main_rb");
        // let main_rbLi0 = main_rb.children;
        // 给a标签里面设置样式
        let aContent = main_rb.querySelectorAll("a");
        for(var i=0;i<aContent.length;i++){
           (function(i){
                 aContent[i].innerHTML = `
                <p class="bTi">dada</p>
                <span>Miu Miu bags</span><br/>
                <span>Hills && Pumas</span> `;

                 // 鼠标移入上移
                aContent[i].parentNode.onmouseenter = function(e){
                    e = e || window.event;
                    let target = 0;
                    animate(aContent[i],{bottom:target});}
                // 鼠标移出清除
                aContent[i].parentNode.onmouseleave = function(e){
                    e = e || window.event;
                    let target = -60;
                    animate(aContent[i],{bottom:target});
                         }
            })(i);
           
        }
        /*--------商品上移结束---------*/ 
        /*-----------点击平移-------------------*/ 
        let tjul = document.querySelector('#tj_c_ul');
        let tj_l = document.querySelector(".tj_l");
        let tj_r = document.querySelector(".tj_r");
        let box_width = tjul.parentNode.offsetWidth;
        let a =1;
        tj_l.onmouseup = ()=>{
            a--;

            if(a<=1){a=1;}
            judge();
        }
        tj_r.onmouseup = ()=>{
            a++;
            if(a>=3){a=3;}
            judge();
        }
        function judge(){
            switch(a){
                case 1:target =0;break;
                case 2:target =-box_width;break;
                case 3:target =-box_width*2;
            }
            animate(tjul,{left:target});

        }
       
     
        /*-----------点击平移结束-------------------*/ 
        // 返回顶部
        document.querySelector('.top_anniu').onclick=()=>{
            var timer = setInterval(function(){
                var btnTop = window.scrollY;
                var sudu = Math.floor(btnTop/5);
                if(btnTop<=0 || sudu ===0){
                    clearInterval(timer);
                }
                window.scrollBy(0,-sudu);
            },30)
        }
        })();
    // ------------------余鹏城------------------------
    // 陈国洲优化
  // (function(){
  //   var  tjul = document.querySelector('#tj_c_ul');
  //   let arr2_statu=[200,304];
  //   let xhr2=new XMLHttpRequest();
  //   xhr2.onreadystatechange=function(){
  //       if(xhr2.readyState===4 && arr2_statu.indexOf(xhr2.status)>=0){
  //           var anser2=JSON.parse(xhr2.responseText);
  //           function tjList(){
  //               tjul.innerHTML = anser2.map((item)=>{
  //                   return `<li>
  //                               <img src="${item.imgSrc}">
  //                               <p><span>${item.title}</span></p>
  //                               <p>listPrice：<span><del>${item.listPrice}</del></span></p>
  //                               <p>ourPrice：<span style="color:#FF4500">${item.ourPrice}</span></p>
  //                               <p style="color:#46907F">Save ${item.savePrice}</p>
  //                           </li>`
  //               }).join('');
  //           }
  //           tjList();
  //       }
  //   };
  //   xhr2.open('get','../api/data/shouyeHotitem.json');
  //   xhr2.send();
  //   var goodsList = document.querySelector('#goodslist');
  //   let xhr=new XMLHttpRequest();
  //   xhr.onreadystatechange=function(){
  //       if(xhr.readyState===4&&arr2_statu.indexOf(xhr.status)>=0){
  //           var anser=JSON.parse(xhr.responseText);
  //           function g_list(){
  //               goodsList.innerHTML = anser.map((timer)=>{
  //                   return `<li>
  //                               <a href="#"><img src="${timer.imgSrc}"></a>
  //                               <p><span>${timer.title}</span></p>
  //                               <p>listPrice：<span><del>${timer.listPrice}</del></span></p>
  //                               <p>ourPrice：<span style="color:#FF4500">${timer.ourPrice}</span></p>
  //                               <p style="color:#46907F">Save ${timer.savePrice}</p>
  //                           </li>`
  //               }).join('');
  //           }
  //           g_list();
  //       }
  //   };
  //   xhr.open('get','../api/data/shouyeTopsell.json');
  //   xhr.send();
  // })();
})
