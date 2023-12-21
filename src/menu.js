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
    const menuItem1Title = document.createElement('h1')
    menuItem1Title.textContent = 'Spaghetti'

    const menuItem1Description = document.createElement('h3')
    menuItem1Description.textContent = "Ground Beef, onion, garlic, bell pepper, tomato,"

    const menuItem1Image = document.createElement('img');
    menuItem1Image.src = './media/spaghetti.png'

    const menuItem2 = document.createElement('div');
    menuItem2.setAttribute('id', 'menuList2');
    const menuItem2Title = document.createElement('h1')
    menuItem2Title.textContent = 'Chicken Alfredo'

    const menuItem2Description = document.createElement('h3')
    menuItem2Description.textContent = "Chicken Breast, whole milk, fettuccine noodles, parmesan, heavy cream, peas"

    const menuItem2Image = document.createElement('img')
    menuItem2Image.src = './media/alfredo.png'

    const menuItem3 = document.createElement('div');
    menuItem3.setAttribute('id', 'menuList3');
    const menuItem3Title = document.createElement('h1')
    menuItem3Title.textContent = "Lasagna"

    const menuItem3Description = document.createElement('h3')
    menuItem3Description.textContent = "Ground Beef, onion, tomato, lasagna noodles, parmesan, mozzarella, and ricotta cheese "

    const menuItem3Image = document.createElement('img')
    menuItem3Image.src = './media/lasagna.png'

    pageContent.appendChild(menuList)
    content.appendChild(pageContent)

    menuList.appendChild(title)
    menuList.appendChild(menuItem1)
    menuItem1.appendChild(menuItem1Title)
    menuItem1.appendChild(menuItem1Description)
    menuItem1.appendChild(menuItem1Image)


    menuList.appendChild(menuItem2)
    menuItem2.appendChild(menuItem2Title)
    menuItem2.appendChild(menuItem2Description)
    menuItem2.appendChild(menuItem2Image)

    menuList.appendChild(menuItem3)
    menuItem3.appendChild(menuItem3Title)
    menuItem3.appendChild(menuItem3Description)
    menuItem3.appendChild(menuItem3Image)

}

export default createMenuPage;