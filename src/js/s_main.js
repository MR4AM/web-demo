 document.addEventListener('DOMContentLoaded',function(){

     // ---------------------------------李志杰----------------------------------------
    (function(){
         // 吸顶
    var xiding = document.querySelector('#xiding');

    var fanhui = document.querySelector('.fhdb');

    xiding.style.display = 'none';

    fanhui.style.display = 'none';

    window.onscroll = function(){

        var xd = window.scrollY;

        if(xd>=100){

            xiding.style='position:fixed;top:0;'
            xiding.className='zindex';
        }else{
            
           xiding.style='display:none';
        }
        var btnTop = window.scrollY;
        if(btnTop>=200){

            fanhui.style.display = 'block';
        }else{
            fanhui.style.display = 'none';
        }       
    }
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
    // -----------------------------------李志杰----------------------------------------
     // 头部补充代码（李孟辉）----------
   (function(){
        let t_shopcar=document.createElement('div');
       let tshopcar=document.querySelector('.tshopcar');
        t_shopcar.className='t_shopcar';
        tshopcar.appendChild(t_shopcar);
        // 导航栏补充代码（李孟辉）
        let uls=document.querySelector('.navl_list');
        let lis=uls.querySelectorAll('.nav_li');
        let navbox=uls.querySelectorAll('.navl_list2');
        let nav_l=document.querySelector('.nav_l');
        var liheight=lis[0].offsetHeight;
        console.log(liheight);
        for(let i=0;i<lis.length;i++){
            lis[i].onmouseenter=function(){
                for(let j=0;j<lis.length;j++){
                    lis[j].className='';
                    navbox[j].style.display='none';
                    animate(navbox[j],{top:liheight*j});
                }
                    lis[i].className='nav_active';
                    navbox[i].style.display='block';
                    navbox[i].style.top=liheight*i;
                    let target=-liheight*i;
                    animate(navbox[i],{top:target});
                uls.onmouseleave=function(){
                lis[i].className='';
                navbox[i].style.display='none';
                animate(navbox[i],{top:liheight*i});
             }
            }
        }
   })();  
 })