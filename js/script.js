const add_new = document.querySelector('.add_new_btn');
var btn_editt = document.querySelectorAll('.edit_btn');
const side_overlay = document.querySelector('.slide-in-overlay');
const side_bar = document.querySelector('.add-edit-sidebar');
const cancel_btn = document.querySelector('.cancel');

add_new.addEventListener('click',function(){
    side_overlay.classList.toggle('hide_sidebar');
    side_bar.classList.toggle('hide_sidebar');
});

side_overlay.addEventListener('click',function(){
    side_overlay.classList.toggle('hide_sidebar');
    side_bar.classList.toggle('hide_sidebar');
});

cancel_btn.addEventListener('click',function(){
    side_overlay.classList.toggle('hide_sidebar');
    side_bar.classList.toggle('hide_sidebar');
});

for(var i =0;i<=btn_editt.length;i++){
    btn_editt[i].addEventListener('click',function(){
        side_overlay.classList.toggle('hide_sidebar');
        side_bar.classList.toggle('hide_sidebar');
    });
}


