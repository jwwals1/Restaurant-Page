const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    const homePageContent = document.createElement('div');
    homePageContent.setAttribute('id', 'homePageContent');

    const title = document.createElement('h1');
    title.textContent = "Restaurant Homepage"
    homePageContent.appendChild(title)

    const image = document.createElement('img');
    image.src = './media/pasta.png'
    homePageContent.appendChild(image)

    const headline = document.createElement('h3');
    headline.textContent = "Best Restaurant in Town!"
    homePageContent.appendChild(headline)

    const review = document.createElement('h4');
    review.textContent = "This is the best restaurant in town! Come here and try all of the great food. Everything is worth eating. Great experince. You will enjoy it."
    homePageContent.appendChild(review)

    const reviewName = document.createElement('h5');
    reviewName.textContent = '-Reviewer Name'
    homePageContent.appendChild(reviewName)

    pageContent.appendChild(homePageContent);
    content.appendChild(pageContent);
}

export default createRestaurantHomePage