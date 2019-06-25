$(function(){
    // 人员分组的点击事件
    $(".main").find("li").click(function(e){
        // debugger
        var parentsLI ;
        if (e.target.nodeName == "SPAN" || e.target.nodeName == "IMG"){
            parentsLI = e.target.parentNode;
        }else{
            parentsLI = e.target;
        }
        event.stopPropagation();
        if ($(parentsLI).children("ul").length>0){
            $(parentsLI).children("ul").toggle();
            $(parentsLI).toggleClass("active");
            // if ($(parentsLI).children("ul").css("display") == "none"){
            //     $(parentsLI).css("background", "url('./img/right.png') no-repeat");
            // }else{
            //     $(parentsLI).css("background", "url('./img/down.png') no-repeat");
            // }
        }
    });
    // 搜索按钮的点击事件
    $("#search").click(function () {
        $(this).text("教育厅");
        $(".resolut").show();
    })
    // 人员详情页面中开关的点击事件
    $(".switch-label").click(function () {
        if ($(".switch-label").hasClass("active")) {
            $("input").attr("checked", false);
            $(".switch-label").removeClass("active")
        } else {
            $("input").attr("checked", "checked");
            $(".switch-label").addClass("active")
        }
    })
    // 人员选择页面的返回事件
    $(".back").click(function () {
        window.history.back();
    })
})