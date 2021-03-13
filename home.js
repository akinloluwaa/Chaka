let sector = [
 {
  name: "Health Care",
  percentage: "+0.46",
  image: "url('./images/1.jpg')",
 },
 {
  name: "Communication Service",
  percentage: "0.00",
  image: "url('./images/2.jpg')",
 },
 {
  name: "Utilities",
  percentage: "-0.07",
  image: "url('./images/3.jpg')",
 },
 {
  name: "Consumer Discretionary",
  percentage: "-0.07",
  image: "url('./images/4.jpg')",
 },
 {
  name: "Finacials",
  percentage: "-0.33",
  image: "url('./images/5.jpg')",
 },
 {
  name: "Consumer Staples",
  percentage: "-0.38",
  image: "url('./images/6.jpg')",
 },
 {
  name: "Materials",
  percentage: "-0.42",
  image: "url('./images/7.jpg')",
 },
 {
  name: "Technology",
  percentage: "-0.51",
  image: "url('./images/8.jpg')",
 },
 {
  name: "Real Estate",
  percentage: "-0.55",
  image: "url('./images/9.jpg')",
 },
 {
  name: "Energy",
  percentage: "-0.55",
  image: "url('./images/10.jpg')",
 },
 {
  name: "Industrials",
  percentage: "-0.78",
  image: "url('./images/11.jpg')",
 },
];


function createCard () {
    for (i = 0; i < sector.length; i++) {
        let sectors = document.querySelector('.content')
        let cards = document.createElement('div');
        cards.className = 'secs';
        cards.style.backgroundImage = sector[i].image;
        let title = document.createElement('div');
        title.className = 'description';
        let head = document.createElement('h3');
        head.innerHTML = sector[i].name;
        title.appendChild(head);
        let rate = document.createElement('div');
        rate.className = 'stat';
        let rating = document.createElement('p');
        rating.innerHTML = sector[i].percentage + "%";
        if (sector[i].percentage < 0) {
            rating.style.backgroundColor = "red"
        } else if (sector[i].percentage > 0) {
            rating.style.backgroundColor = "green";
        } else {
            rating.style.backgroundColor = "grey";
        };
        title.appendChild(head);
        rate.appendChild(rating);
        cards.appendChild(title);
        cards.appendChild(rate);
        sectors.appendChild(cards);
    }
}

createCard();

function createSectors () {
    for (i = 0; i < 2; i++) {
        let sectors = document.querySelector('.sectors')
        let cards = document.createElement('div');
        cards.className = 'sec';
        cards.style.backgroundImage = sector[i].image;
        let title = document.createElement('div');
        title.className = 'description';
        let head = document.createElement('h3');
        head.innerHTML = sector[i].name;
        title.appendChild(head);
        let rate = document.createElement('div');
        rate.className = 'stat';
        let rating = document.createElement('p');
        rating.innerHTML = sector[i].percentage + '%';
        if (sector[i].percentage < 0) {
            rating.style.backgroundColor = "red"
        } else if (sector[i].percentage > 0) {
            rating.style.backgroundColor = "green";
        } else {
            rating.style.backgroundColor = "grey";
        };
        title.appendChild(head);
        rate.appendChild(rating);
        cards.appendChild(title);
        cards.appendChild(rate);
        sectors.appendChild(cards);
    }
}

createSectors();



