const createContactPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const title = document.createElement('h1');
    title.innerHTML = 'Contact Page';

    const contactList = document.createElement('div');
    contactList.setAttribute('id', 'contactList');

    const contactList1 = document.createElement('div');
    contactList1.setAttribute('id', 'contactList1');

    const contactList1Name = document.createElement('h2');
    contactList1Name.innerHTML = 'First Name, Last Name';
    const contactList1Title = document.createElement('h3');
    contactList1Title.innerHTML = "Manager";
    const contactList1PhoneNumber = document.createElement('h4');
    contactList1PhoneNumber.innerHTML = '111-555-1111';

    const contactList2 = document.createElement('div');
    contactList2.setAttribute('id', 'contactList2');

    const contactList2Name = document.createElement('h2');
    contactList2Name.innerHTML = "First Name, Last Name";
    const contactList2Title = document.createElement('h3');
    contactList2Title.innerHTML = 'Assistant Manager';
    const contactList2PhoneNumber = document.createElement('h4');
    contactList2PhoneNumber.innerHTML = '222-555-222';

    const contactList3 = document.createElement('div');
    contactList3.setAttribute('id', 'contactList3');

    const contactList3Name = document.createElement('h2');
    contactList3Name.innerHTML = "First Name, Last Name";
    const contactList3Title = document.createElement('h3');
    contactList3Title.innerHTML = "Head Chef"
    const contactList3PhoneNumber = document.createElement('h4');
    contactList3PhoneNumber.innerHTML = '333-555-2222';


    pageContent.appendChild(title);
    pageContent.appendChild(contactList);
    content.appendChild(pageContent);

    contactList.appendChild(contactList1);
    contactList1.appendChild(contactList1Name);
    contactList1.appendChild(contactList1Title);
    contactList1.appendChild(contactList1PhoneNumber);

    contactList.appendChild(contactList2);
    contactList2.appendChild(contactList2Name);
    contactList2.appendChild(contactList2Title);
    contactList2.appendChild(contactList2PhoneNumber);

    contactList.appendChild(contactList3);
    contactList3.appendChild(contactList3Name);
    contactList3.appendChild(contactList3Title);
    contactList3.appendChild(contactList3PhoneNumber);





}

export default createContactPage;