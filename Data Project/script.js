new Chart(document.getElementById("snackChart"), {
    type: 'bar',
    data: {
        labels: ['Star Cakes', 'Moon Berries', 'Witch Wafers', 'Pixie Pops'],
      datasets: [
        {
          label: "Snacks Sold",
          backgroundColor: ['#f8a5c2', '#63cdda', '#f7d794', '#778beb'],
          data: [50,35,25,10,5]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: { display: false },
      scales: {
        yAxes: [{
        ticks: {
            fontColor: '#fcebb2',
            fontFamily: 'Amatic SC',
            beginAtZero: true
        },
        gridLines: {
            color: 'rgba(255, 232, 163, 0.1)'
        }
        }],
        xAxes: [{
        ticks: {
            fontColor: '#fcebb2',
            fontFamily: 'Amatic SC'
        },
        gridLines: {
            color: 'rgba(255, 232, 163, 0.05)'
        }
        }]
    }
    }
});

new Chart(document.getElementById("enchantedChart"), {
    type: 'doughnut',
    data: {
      labels: ["Ferris Wheel", "Teacups", "Carousel", "Haunted House", "Pirate Ship"],
      datasets: [
        {
          label: "Popularity",
          labels: ['Flying Cloaks', 'Potion Bottles', 'Magic Wands', 'Crystal Balls'],
          data: [10, 15, 25, 5, 8],
          backgroundColor: ['#f7d794', '#63cdda', '#f8a5c2', '#778beb']
        }
      ]
    },
    options: {
      legend: {
        labels: {
          fontColor: '#fcebb2',
          fontFamily: 'Amatic SC',
          fontSize: 16
        }
      }
    }
});

function addStar() {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.floor(Math.random() * 10 + 10);
    s.style.setProperty('--size', size + 'px');
    s.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
    s.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
    s.onanimationend = () => s.remove();
    document.body.appendChild(s);
  }

  setInterval(addStar, 150);