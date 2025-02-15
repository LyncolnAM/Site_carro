function menu(){
    let menumoblie = document.querySelector('.mobile');
    if(menumoblie.classList.contains('open')){
        menumoblie.classList.remove('open');
        document.querySelector('.btn-mobile').src = '../imagens/menu_white_36dp.svg';
    }else{
        menumoblie.classList.add('open');
        document.querySelector('.btn-mobile').src = '../imagens/close_white_36dp.svg';
    }    
}