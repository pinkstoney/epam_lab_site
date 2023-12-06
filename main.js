document.documentElement.style.setProperty('--swiper-pagination-bottom', '-50px');
document.addEventListener('DOMContentLoaded', function () {
    const cardData = [
        {title: 'Card 1 Title', subtitle: 'Card 1 Subtitle', content: 'Card 1 Content', imageSrc: 'pic1.png'},
        {title: 'Card 2 Title', subtitle: 'Card 2 Subtitle', content: 'Card 2 Content', imageSrc: 'pic2.png'},
        {title: 'Card 3 Title', subtitle: 'Card 3 Subtitle', content: 'Card 3 Content', imageSrc: 'pic3.png'},
        {title: 'Card 4 Title', subtitle: 'Card 4 Subtitle', content: 'Card 4 Content', imageSrc: 'pic4.png'},
        {title: 'Card 5 Title', subtitle: 'Card 5 Subtitle', content: 'Card 5 Content', imageSrc: 'pic5.png'},
        {title: 'Card 6 Title', subtitle: 'Card 6 Subtitle', content: 'Card 6 Content', imageSrc: 'pic6.png'},
        {title: 'Card 7 Title', subtitle: 'Card 7 Subtitle', content: 'Card 7 Content', imageSrc: 'pic7.png'},
        {title: 'Card 8 Title', subtitle: 'Card 8 Subtitle', content: 'Card 8 Content', imageSrc: 'pic8.png'},
        {title: 'Card 9 Title', subtitle: 'Card 9 Subtitle', content: 'Card 9 Content', imageSrc: 'pic9.png'},
        {title: 'Card 10 Title', subtitle: 'Card 10 Subtitle', content: 'Card 10 Content', imageSrc: 'pic10.png'},
        {title: 'Card 11 Title', subtitle: 'Card 11 Subtitle', content: 'Card 11 Content', imageSrc: 'pic11.png'},
        {title: 'Card 12 Title', subtitle: 'Card 12 Subtitle', content: 'Card 12 Content', imageSrc: 'pic12.png'},
        {title: 'Card 13 Title', subtitle: 'Card 13 Subtitle', content: 'Card 13 Content', imageSrc: 'pic13.png'},
        {title: 'Card 14 Title', subtitle: 'Card 14 Subtitle', content: 'Card 14 Content', imageSrc: 'pic14.png'},
        {title: 'Card 15 Title', subtitle: 'Card 15 Subtitle', content: 'Card 15 Content', imageSrc: 'pic15.png'},
        {title: 'Card 16 Title', subtitle: 'Card 16 Subtitle', content: 'Card 16 Content', imageSrc: 'pic16.png'},
        {title: 'Card 17 Title', subtitle: 'Card 17 Subtitle', content: 'Card 17 Content', imageSrc: 'pic17.png'},
        {title: 'Card 18 Title', subtitle: 'Card 18 Subtitle', content: 'Card 18 Content', imageSrc: 'pic18.png'},
        {title: 'Card 19 Title', subtitle: 'Card 19 Subtitle', content: 'Card 19 Content', imageSrc: 'pic19.png'},
        {title: 'Card 20 Title', subtitle: 'Card 20 Subtitle', content: 'Card 20 Content', imageSrc: 'pic20.png'},
        {title: 'Card 21 Title', subtitle: 'Card 21 Subtitle', content: 'Card 21 Content', imageSrc: 'pic21.png'},
        {title: 'Card 22 Title', subtitle: 'Card 22 Subtitle', content: 'Card 22 Content', imageSrc: 'pic22.png'}
    ];

    const cardContainer = document.getElementById('cardContainer');
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1.8,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    cardData.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('swiper-slide', 'card');
        cardElement.id = `card${index + 1}`;

        const cardInner = document.createElement('div');
        cardInner.classList.add('card__inner');

        const frontFace = document.createElement('div');
        frontFace.classList.add('card__face', 'card__face--front');
        frontFace.innerHTML = `<h2>${card.title}</h2>`;

        const backFace = document.createElement('div');
        backFace.classList.add('card__face', 'card__face--back');
        backFace.innerHTML = `
                <div class="card__content">
                    <div class="card__header">
                        <img src="${card.imageSrc}" alt="" class="pp" />
                        <h2>${card.title}</h2>
                    </div>
                    <div class="card__body">
                        <h3>${card.subtitle}</h3>
                        <p>${card.content}</p>
                    </div>
                </div>
            `;

        cardInner.appendChild(frontFace);
        cardInner.appendChild(backFace);
        cardElement.appendChild(cardInner);

        cardContainer.appendChild(cardElement);
    });

    const cards = document.querySelectorAll(".card__inner");

    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            card.classList.toggle('is-flipped');
        });
    });

    const scrollToTarget = event => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({behavior: 'smooth'});
        }
    };

    const navigationLinks = document.querySelectorAll('.nav__link');
    navigationLinks.forEach(link => link.addEventListener('click', scrollToTarget));
});
