document.addEventListener('DOMContentLoaded',function(){
        (function(){
    var sign=document.getElementById('sign');
    var address=document.getElementById('address');
    var address1=document.getElementById('address1');
    var password=document.getElementById('password');
    var password1=document.getElementById('password1');
    var cpassword=document.getElementById('cpassword');
    var register=document.getElementById('register');
    var rcode=document.getElementById('rcode');
    var res;
    // 生成四位随机验证码
    function code(){
        // 生成随机数
                res=parseInt(Math.random()*10000+1);
                // 判断随机数是否小于10，100，1000，若小于10，100，1000，则对应补零
                if(res<10){
                    res='000'+res;
                }else if(res<100){
                    res='00'+res;
                }else if(res<1000){
                    res='0'+res;
                }
                // 将结果输出到指定位置
                rcode.innerHTML=res; 
    }
    // 声明提前：执行函数
    code();
    // 用户登录时表单验证事件
    sign.onclick=function(){
        var add=Number(address.value);
        var pas=Number(password.value);
        if(add==''|| pas==''){
            alert('用户或密码不能为空')
        }
        if(pas==res){
            alert('欢迎登录')
        }else{
            alert('验证码输入有误！')
        }
        code();
    }
    // 用户注册时表单验证事件
    register.onclick=function(){
        var add1=Number(address1.value);
        var pas1=Number(password1.value);
        var cpas=Number(cpassword.value);
        if(add1==''|| pas1=='' || cpas==''){
            alert('注册的用户名或密码不能为空')
        }
        if(pas1!=cpas){
            alert('请输入与第一次一致的密码')
        }else{
            
        }
    }
})();


})