// outside JavaScript file

var lang = document.querySelector('html').lang;
if(lang === 'ja'){
    var opt = document.querySelector('option[value="index.html"]');
}else if (lang === 'en'){
    var opt = document.querySelector('option[value="index-en.html"]');
}else if(lang === 'zh'){
    var opt = document.querySelector('option[value="index-ch.html"]');
}
opt.selected = true;


document.getElementById('form').select.onchange = function(){
    location.href = document.getElementById('form').select.value;
}
