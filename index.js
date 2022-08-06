var menus = [
    {
        menu: 'HOME'
    },
    {
        menu: 'ABOUT'
    },
    {
        menu: 'SERVICES'
    },
    {
        menu:'PORTFOLIO'
    },
    {
        menu: 'CONTACT'
    }
]

function menuHandler(item){
    return `<a>${item.menu}</a>`
}
var newMenus = menus.map(menuHandler);
    newMenus.join('')

let navbar = document.querySelector('.navbar')
document.querySelector('#burger').onclick = () => {
    navbar.classList.toggle('active');
} 
window.onscroll = () => {
    navbar.classList.remove('active') ;
}

navbar.innerHTML = newMenus

var listNodes = document.querySelectorAll('.navbar a');
    listNodes[0].href = '#home'
    listNodes[1].href = '#about'
    listNodes[2].href ='#services'
    listNodes[3].href='#portfolio'
    listNodes[4].className = 'button'
    listNodes[4].href ='#contact'