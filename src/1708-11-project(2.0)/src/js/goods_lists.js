document.addEventListener('DOMContentLoaded',function(){
    (function(){
    var goods_list = document.getElementById("goods_list");
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var leftlist=document.querySelector('#leftlist');
    // 折叠扇
    leftlist.addEventListener('mouseup',(e)=>{
        if(e.target.className=='uli'){
            if(e.target.parentNode.style.overflow=='hidden'){
                e.target.parentNode.style.height='';
                e.target.parentNode.style.overflow=''; 
            }else{
                e.target.parentNode.style.height='20px';
                e.target.parentNode.style.overflow='hidden';
            }
        }
    })
    var arr_status=[200,304];
    let xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && arr_status.indexOf(xhr.status)>=0){
            var anser=JSON.parse(xhr.responseText);
            function goodsAdd(){
                goods_data = anser.map(function(item){
                    var res = "商品详情.html?"+item.imgSrc+"="+item.gname+"="+item.oriPrice+"="+item.nowPrice+"="+item.savePrice;
                    var str =res.replace(/ /ig,"");
                    return  "<li>"+
                        "<img class='img1 list' src="+ item.imgSrc +" />"+
                        "<input type='checkbox'><span>"+ item.gname+"</span>"+
                        "<p><del>"+ item.oriPrice +"</del><span class='s1'>"+ item.nowPrice +
                        "</span></p>"+
                        "<p class='s2'>"+ item.savePrice +"</p>"+
                        "<img class='a_list' src="+item.lastSrc+" />"+
                    "</li>"
                }).join("");
                goods_lists.innerHTML =goods_data;
                return anser; 
            }
            goodsAdd();
            // 排序按钮函数
            btn2.onclick = function(){
                anser.sort(function(a,b){
                    return a.nowPrice.replace(/[^0-9]/ig,"")-b.nowPrice.replace(/[^0-9]/ig,"");
                });
                goodsAdd();
                getUrl(anser,list);
                getUrl(anser,a_list);
            }
           // 从大到小
            btn1.onclick =function(){
                anser.sort(function(a,b){
                    return a.nowPrice.replace(/[^0-9]/ig,"")-b.nowPrice.replace(/[^0-9]/ig,"");
                }).reverse();
                goodsAdd();
                getUrl(anser,list);
                getUrl(anser,a_list);
            }
            // 
            var list=document.getElementsByClassName('list');
            var a_list=document.getElementsByClassName('a_list');
            getUrl(anser,list);
            getUrl(anser,a_list);
            function getUrl(n,m){
                  // 遍历商品列表截取里面的url（n：需要遍历的数组 m:获取到的页面元素）
                n.forEach(function(item,ind){
                    m[ind].onclick=function(){
                        var itemlist;
                        itemlist=item;
                        var params='';
                        for(var attr in itemlist){
                            params+=attr+'='+itemlist[attr]+'&';
                        }
                        params=params.slice(0,-1);
                        location.href="../html/goodDetailModify.html?"+params;
                        console.log(m[ind].href);
                    }   
                });   
            }  
            var lb=document.getElementById('leftlist_b');
            var lb_data = [
                {
                    id:"g1",
                    imgSrc:"../images/lmj_a1.png",
                    gname:"Up @ Down Open with Crocodile...",
                    oriPrice:'USD 219',
                    nowPrice:'$ 189',
                    savePrice:'$ 30',
                    lastSrc:"../images/goods_wholesale.png"
                },
                {
                    id:"g2",
                    imgSrc:"../images/lmj_a2.png",
                    gname:"Up @ Down Open with Crocodile...",
                    oriPrice:'USD 219',
                    nowPrice:'$ 789',
                    savePrice:'$ 30',
                    lastSrc:"../images/goods_wholesale.png"
                },
                {
                    id:"g3",
                    imgSrc:"../images/lmj_a3.png",
                    gname:"Up @ Down Open with Crocodile...",
                    oriPrice:'USD 219',
                    nowPrice:'$ 889',
                    savePrice:'$ 30',
                    lastSrc:"../images/goods_wholesale.png"
                }];
                var html=lb_data.map(function(item){
                    return "<li>"+
                        "<img class='img1' src="+ item.imgSrc +" />"+"<br/>"+
                        "<span>"+ item.gname+"</span>"+
                        "<p><del>"+ item.oriPrice +"</del><span class='s1'>"+ item.nowPrice +
                        "</span></p>"+
                        "<p class='s2'>"+ item.savePrice +"</p>"+
                        "</li>"
                }).join("");
                console.log(html);
                lb.innerHTML=html;
        }
    }
    xhr.open('get','../api/data/goodsdata.json');
    xhr.send();    
    })();
})