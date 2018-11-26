$(function() {
    const data = datas.goods;
    //商品内容部分
    for (let i = 0; i < data.length; i++) {
        $(`
	   <div class="cart-list" title="1002">
            <div class="cart-hd">
                <input type="checkbox">${data[i].title}
            </div>
            <div class="cart-items">
                <dl>
                    <dt><img src="${data[i].imgUrl}" alt=""></dt>
                    <dd>名称：C#编程基础</dd>
                    <dd>简介：当你第一次见到C#时千万不要傻傻的读作c#号</dd>
                    <dd>定价：<span class="price">${data[i].price}</span>元</dd>
                </dl>
                <div class="icon-del del-item"><a href="#"></a></div>
            </div>
            <div class="subtotal">
                <span>小计：￥<em>${data[i].price}</em></span>

                <div class="count">
                    <span class="minus">-</span>
                    <input type="number" value="1" oninput="this.value < 1?this.value = 1:this.value= this.value">
                    <span class="add">+</span>
                </div>

            </div>
        </div>`).appendTo('.container')
    }
    //数量加减
    $('span.add').click(function() {
        var cont = $(this).prev().val()
        $(this).prev().val(parseInt(cont) + 1)
        var conts = $(this).prev().val()
        var prices = parseInt($(this).parents().siblings('.cart-items').find('.price').text())
        var nums = conts * prices + ".00"
        $(this).parent().prev().children('em').text(nums)
        addz()
    })
    $('span.minus').click(function() {
            var cont = $(this).next().val()
            cont <= 1 ? $(this).next().val(1) : $(this).next().val(parseInt(cont) - 1)
            var prices = parseInt($(this).parents().siblings('.cart-items').find('.price').text())
            $(this).parent().prev().children('em').text(cont * prices + '.00')
            addz()
        })
        //是否删除商品
    $('.del-item').on("click", function() {
            var boot = confirm("确定删除么？")
            if (boot) {
                $(this).parents('.cart-list')
                    .children('.subtotal')
                    .children('span')
                    .children('em')
                    .text(0)
                $(this).parents('.cart-list').hide()
                addz()
                return false;
            }
        })
        //是否全选
    $('#allCheck').click(function() {
        var aaa = $('.container input:checkbox').prop("checked", this.checked)
        addz()
    })
    $('.container input:checkbox').click(function() {
            var checks = $('.container input:checkbox').length
            var checkdeds = $('.container input:checked').length
            checks == checkdeds ? $('#allCheck').prop("checked", true) : $('#allCheck').prop("checked", false)
            addz()
        }) //.trigger('click')//网页加载时触发一次

    //

    //	    var numS = 0
    //	for(var i = 1; i<$('.subtotal em').length;i++){
    //		    
    //	}
    //总价钱
    //第一种方法
    //      function addz(){
    //      	var allnum = 0;
    //      	$('.container input:checked').each(function(index){
    //      		var dnge =  parseInt($('.subtotal em').eq(index).text())
    //      		allnum += dnge
    //      	})
    //          $('#totPirces').text(allnum)
    //      }
    //第二种方法
    function addz() {
        var allnum = 0;
        $('.container input:checked').each(function(index) {
            var a = $('.container input:checked').eq(index)
            var dnge = parseInt(a.parent().siblings('.subtotal').children('span').children('em').text())
            allnum += dnge
        })
        $('#totPirces').text(allnum)
    }
})