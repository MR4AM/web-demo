/* 
* @Author: Marte
* @Date:   2018-01-15 08:55:57
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-22 21:21:37
*/
 document.addEventListener('DOMContentLoaded',function(){
    var Dou_shopcarList=document.getElementById('Dou_shopcarList');
    var Dou_hotitem=document.getElementById('Dou_hotitem');
    var Dou_shopcarListTable=document.getElementById('Dou_shopcarListTable');
    var Dou_list=[];
    // 拿到cookie，去重；
        function getCookie(){
            var cookies=document.cookie;
            cookies=cookies.split('; ');
            cookies.forEach(function(item){
                var arr=item.split('=');
                if(arr[0]==='res'){
                    Dou_list=JSON.parse(arr[1]);
                    console.log(Dou_list)
                    for(var i=0;i<Dou_list.length;i++){
                        for(var j=i+1;j<Dou_list.length;j++){
                            if(Dou_list[i].id===Dou_list[j].id){
                                Dou_list[i].qty=Dou_list[i].qty*1+Dou_list[j].qty*1;
                                Dou_list.splice(j,1);
                                j--;
                            }
                        }
                    }
                }
            });
            return Dou_list;   
        }
        function uploadCookie(res){
            var now=new Date();
            now.setDate(now.getDate()+7);
            document.cookie='res='+JSON.stringify(res)+';expires='+now.toUTCString()+';path=/';
        }
    function create(){
        var Dou_list=getCookie();
        var total=0;
        var saveTotal=0;
        var Dou_str_1=`<tr>
            <td>Your item</td>
            <td></td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Total price</td>
            <td>Remove</td></tr>`;
        var Dou_str_2=Dou_list.map(function(item,idx){
            total+=item.nowPrice.substring(2,)*item.qty;
            saveTotal+=item.savePrice.substring(2,)*item.qty;
            return Dou_str_2=`<tr data-idx=${idx} >
                <td><img src=${item.imgSrc} alt=""></td>
                <td><h3>${item.gname}</h3>
                    <h5>ID:#${item.id}</h5>
                    <p>size:Default</p></td>
                <td><button class='minus'>-</button>
                    <span>${item.qty}</span>
                    <button class='plus'>+</button></td>
                <td><p class="old">${item.oriPrice}</p>
                    <p class='now'>${item.nowPrice} py6</p></td>
                <td><p >${item.nowPrice.substring(2,)*item.qty} py6</p>
                    <p class="save">you save ${item.savePrice.substring(2,)*item.qty} py6</p></td>
                <td><button class='deleteTr'>&times</button></td>
                </tr>`; 
            }).join('');
        var Dou_str_3=`<tr>
            <td colspan='6'>
            <div id='continuteShopping'><a>Continue Shopping</a></div>
                <div id='checkout'><p>Cart Total: <span>${total} py6</span></p>
                    <p>Your Total Saving: ${saveTotal} py6</p>
                    <p>checkout</p>
                </div>
            </td></tr>`;
            Dou_shopcarListTable.innerHTML=Dou_str_1+Dou_str_2+Dou_str_3;
        }


    create();

    // hot item部分
    var ul=document.getElementById('show');
    var len;
    let arr_status = [200,304];
            // ajax请求
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && arr_status.indexOf(xhr.status)>=0){
            let res = JSON.parse(xhr.responseText);
            len=res.length;
            // 根据数据生成html结构
            ul.innerHTML=res.map(function(item,idx){
                return `<li>
                <p><img alt="" src=${item.imgSrc} /></p>
                <h3>${item.gname}</h3>
                <p><span>${item.oriPrice}</span>${item.nowPrice} py6</p>
                <p>add to</p>
                </li>`}).join('');
            // 自动轮播
            for(var i=0;i<len;i++){
                ul.appendChild(ul.children[i].cloneNode(true))
            }
            var index=0;
            var imgWidth=164;
            len=ul.children.length;
            ul.style.width=len*imgWidth+'px';
            var timer=setInterval(autoShow,3000);
            ul.parentNode.parentNode.onmouseenter=function(){
                clearInterval(timer)
            }
            ul.parentNode.parentNode.onmouseleave=function(){
                timer=setInterval(autoShow,3000);
            }
            function autoShow(){
                index++;
                if(index==len/2){
                    ul.style.left=0;
                    index=0;
                }
                let left=ul.offsetLeft;
                let target=left-imgWidth;
                animate(ul,{left:target});
            }
        }
    }
    xhr.open('get','../api/data/hotitem.json');
    xhr.send();
        
    
    // 事件委托
    // 
    // 
    // 
    document.addEventListener('click',function(e){
    // 删除按键
        if(e.target.className=='deleteTr'){
            Dou_shopcarListTable.innerHTML='';
            var targetTr=e.target.parentNode.parentNode;
            var locate=e.target.parentNode.parentNode.dataset.idx;
            targetTr.parentNode.removeChild(targetTr);
            Dou_list.splice(locate,1);
            uploadCookie(Dou_list);
            create(Dou_list);
        }
        // 减按键
        else if(e.target.className=='minus'){
            Dou_shopcarListTable.innerHTML='';
            var targetTr=e.target.parentNode.parentNode;
            var locate=e.target.parentNode.parentNode.dataset.idx;
            if(Dou_list[locate].qty<=1){
                uploadCookie(Dou_list);
                create(Dou_list);
            }
            else{
                Dou_list[locate].qty--;
                uploadCookie(Dou_list);
                create(Dou_list);
            }
        }
        // 加按键
        else if(e.target.className=='plus'){
            Dou_shopcarListTable.innerHTML='';
            var targetTr=e.target.parentNode.parentNode;
            var locate=e.target.parentNode.parentNode.dataset.idx;
            Dou_list[locate].qty++;
            uploadCookie(Dou_list);
            create(Dou_list);
        }
        // 返回顶部
        else if(e.target.className=='returnTop'){
            var timer = setInterval(function(){
                var btnTop = window.scrollY;
                var sudu = Math.floor(btnTop/5);
                if(btnTop<=0 || sudu ===0){
                    clearInterval(timer);
                }
                window.scrollBy(0,-sudu);
            },30)
        }
        else if(e.target.id=='next'){
            var imgWidth=164;
            let left=e.target.nextElementSibling.offsetLeft;
            if(left<-imgWidth*(e.target.nextElementSibling.children.length/2)){
                e.target.nextElementSibling.style.left=0;
                let target=-imgWidth;
                animate(ul,{left:target});
            }
            else{
                let target=left-imgWidth;
                animate(ul,{left:target});
            }
        }
        else if(e.target.id=='prev'){
            var imgWidth=164;
            let left=e.target.previousElementSibling.offsetLeft;
            if(left>=0){
                e.target.previousElementSibling.style.left=-imgWidth*(e.target.previousElementSibling.children.length/2)+'px';
                let target=parseInt(e.target.previousElementSibling.style.left)+imgWidth;
                animate(ul,{left:target});
            }
            else{
                let target=left+imgWidth;
                animate(ul,{left:target});
            }
            
        }
    })
})
