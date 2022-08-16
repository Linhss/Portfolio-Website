var menus = [
    {
        menu: 'HOME',
        about: 'ABOUT',
        services: 'SERVICES',
        portfolio:'PORTFOLIO',
        contact: 'CONTACT'
    }
]

function menuHandler(item){
    
    return `<a>${item.menu}</a>
            <a>${item.about}</a>
            <a>${item.services}</a>
            <a>${item.portfolio}</a>
            <a>${item.contact}</a>
    `
}

var newMenus = menus.map(menuHandler)
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