document.addEventListener('DOMContentLoaded', function() {

    var address1 = document.querySelector('#address1');
    var add_state = [200, 304];
    console.log(666)
    address1.onchange = function(e) {

        var address01 = address1.value;
        var add_xhr = new XMLHttpRequest();

        add_xhr.onload = function() {

            if (add_state.indexOf(add_xhr.status) >= 0) {

                var add_res = add_xhr.responseText;
                if (add_res === 'no') {

                    address1.nextElementSibling.innerText = '此用户名已被占用，请换一个';
                    address1.nextElementSibling.className = 'add_error';

                } else {

                    address1.nextElementSibling.innerText = '恭喜发财，新年快乐——2018/1/20';
                    address1.nextElementSibling.className = 'add_success';
                }
            }
        }
        add_xhr.open('get', '../php/zhuce.php?address1=' + address01);

        add_xhr.send()

        e.preventDefault();
    }

})