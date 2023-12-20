const createContactPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const title = document.createElement('h1');
    title.innerHTML = 'Contact Page'

    const contactList = document.createElement('div')
    contactList.setAttribute('id', 'contactList')

    const contactList1 = document.createElement('div')
    contactList1.setAttribute('id', 'contactList1')

    const contactList1Name = document.createElement('h2')
    contactList1Name.innerHTML = 'First Name, Last Name'

    pageContent.appendChild(title)
    pageContent.appendChild(contactList)
    content.appendChild(pageContent)

    contactList.appendChild(contactList1)
    contactList1.appendChild(contactList1Name)


}

export default createContactPage;