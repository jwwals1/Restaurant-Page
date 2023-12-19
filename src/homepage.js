const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const title = document.createElement('h1');
    title.textContent = "Restaurant Homepage"
    pageContent.appendChild(title)

    const image = document.createElement('img');
    image.src = '../media/pasta.png'
    pageContent.appendChild(image)

    const headline = document.createElement('h3');
    headline.textContent = "Best Restaurant in Town!"
    pageContent.appendChild(headline)

    const review = document.createElement('h4');
    review.textContent = "The is the best restaurant in town! Come here and try all of the great food. You will enjoy it."
    pageContent.appendChild(review)

    content.appendChild(pageContent)
}

export default createRestaurantHomePage