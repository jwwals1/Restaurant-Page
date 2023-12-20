const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const title = document.createElement('h1');
    title.textContent = 'Menu';

    const menuList = document.createElement('div');
    menuList.setAttribute('id', 'menuList');

    const menuItem1 = document.createElement('div');
    menuItem1.setAttribute('id', 'menuList1');
    menuItem1.textContent = 'Spaghetti'

    const menuItem1Description = document.createElement('h3')
    menuItem1Description.textContent = "Ground Beef, onion, garlic, bell pepper, tomato,"

    const menu1image = document.createElement('img');
    menu1image.src = '../media/pasta1.png'

    const menuItem2 = document.createElement('div');
    menuItem2.setAttribute('id', 'menuList2');
    menuItem2.textContent = "Chicken Alfrado"

    const menuItem2Description = document.createElement('h3')
    menuItem2Description.textContent = "Chicken Breast, whole milk, fettuccine noodles, parmesan, heavy cream"

    const menu2image = document.createElement('img')
    menu2image.src = '../media/Alfredo.jpg'


    menuList.appendChild(menuItem1)
    menuItem1.appendChild(menuItem1Description)
    menuItem1.appendChild(menu1image)

    pageContent.appendChild(title)
    pageContent.appendChild(menuList)
    content.appendChild(pageContent)

    menuList.appendChild(menuItem2)
    menuItem2.appendChild(menuItem2Description)
    menuItem2.appendChild(menu2image)
}

export default createMenuPage;