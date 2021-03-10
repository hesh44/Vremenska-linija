var brojUmrlihChart = new Chart(document.getElementById('brojUmrlih').getContext('2d'), {
    type: 'bar',
    data: {
        labels: ["SSSR", "Kina", "Nemačka", "Japan", "Jugoslavija"],

        datasets: [
            {
                label: "Minimalna pretpostavka umrlih",
                data: [20000,15000,6900,2500,1000],
                backgroundColor: ['rgba(41, 128, 185)','rgba(52, 152, 219)','rgba(22, 160, 133)','rgba(39, 174, 96)','rgba(46, 204, 113)']
            },
            {
                label: "Maksimalna pretpostavka umrlih",                
                data: [27000,20000,7400,3100,1700],
                backgroundColor: ['rgba(41, 128, 185,0.4)','rgba(52, 152, 219, 0.4)','rgba(22, 160, 133,0.4)','rgba(39, 174, 96,0.4)','rgba(46, 204, 113,0.4)']
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Broj nastradalih u drugom svetskom ratu u hiljadama',
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
});

var velicinaPlaneta = new Chart(document.getElementById('planete').getContext('2d'), {
    type: 'horizontalBar',
    data: {
        labels: ["Jupiter", "Saturn", "Uran", "Neptun", "Zemlja", "Venera", "Mars", "Merkur"],

        datasets: [
            {
                label: "Planete",
                data: [69911,58232,25362,24622,6371,6052,3390,2440],
                backgroundColor: ['#ffe1bb','#CC554C','#8bb9ff','#007bff','#356df0','#edd1d5','#e36e0c','#d0c7bf']
            }
           
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Veličina prečnika planeta u Sunčevom sistemu (u km)',
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        responsive: true,
        maintainAspectRatio: false,
        
    }
});


var daniPlanete = new Chart(document.getElementById('dani').getContext('2d'), {
    type: 'bar',
    data: {
        labels: ["Jupiter", "Saturn", "Uran", "Neptun", "Zemlja", "Venera", "Mars", "Merkur"],

        datasets: [
            {
                label: "Trajanje 1 dana u odnosu na dan na Zemlji",
                data: [9.55,10.33,17.14,16.6,24,243,24.37,58.56],
                backgroundColor: ['#ffe1bb','#CC554C','#8bb9ff','#007bff','#356df0','#edd1d5','#e36e0c','#d0c7bf'],
                borderWidth: 0.5,
                borderColor:'#666'
            }
            
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Duzina dana na planetama u časovima',
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        responsive: true,
        maintainAspectRatio: false,
        
    }
});

var kicmenjaci = new Chart(document.getElementById('ribe').getContext('2d'), {
    type: 'pie',
    data: {
        labels: ["Ribe", "Vodozemci", "Gmizavci", "Sisari", "Ptice"],

        datasets: [
            {
                label: "Grupa životinja",
                data: [44,13,15,12,16],
                backgroundColor: ['#007bff','#356df0','#1242b6','#002d98','#0b2970'],
                borderWidth: 1,
                borderColor:'#666'

            } 
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Učešće grupe životinja u klasi kičmenjaka (u %)',
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        responsive: true,
        maintainAspectRatio: false,
       
    }
});

var crnaSmrtChart = new Chart(document.getElementById('crnaSmrt').getContext('2d'),{
    type: 'line',
    data: {
        labels: [1000,1100,1200,1300,1346,1400,1500,1600,1700],

        datasets: [
            {
                label: "Broj stanovnika u milionima kroz godine",
                data: [56,61,68,79,85,60,69,100,120],
                borderColor: 'purple',
                backgroundColor: 'transparent',
                pointBorderColor: 'purple',
                pointBackgroundColor: 'lightgreen',
                pointRadius: 5,
                pointHoverRadius: 15,
                pointHitRadius: 30,
                pointBorderWidth: 2
            },
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Populacija u Evropi',
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
});

var religije = new Chart(document.getElementById('religije').getContext('2d'),{
  type: 'pie',
  data: {
    labels: ["Hrišćanstvo", "Islam", "Nijedna religija", "Hinduizam", "Budizam", "Plemenske religije", "Ostale religije"],
    datasets: [{
      label: "Zastupljenost religija u svetu (u %)",
      data: [31.5, 23.2, 16.3, 15.0, 7.1, 5.9, 1.0],
      backgroundColor: ['#ff5050', '#ff6666', '#ff8080', '#ff9999','#ffb3b3','#ffcccc', '#ffe6e6']
    }]
  },

  options: {
    legend: {
        position:'bottom'},
    responsive: true, maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Zastupljenost religija u svetu (u %)'
    }
  }
});

var hriscanstvo = new Chart(document.getElementById('hriscanstvo').getContext('2d'),{
    type: 'doughnut',
    data: {
      labels: ["Katoličanstvo", "Protestantizam", "Pravoslavlje", "Ostale vrste Hrišćanstva"],
      datasets: [{
        label: "Zastupljenost vrsta Hrišćanstva u svetu (u %)",
        data: [50.1, 36.7, 11.9, 1.3],
        backgroundColor: ['#e6ccff', ' #d9b3ff', '#bf80ff', '#a64dff']
      }]
    },
  
    options: {
      responsive: true, maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Zastupljenost vrsta Hrišćanstva u svetu (u %)'
      }
    }
  });


  var smrt = new Chart(document.getElementById('smrt').getContext('2d'),{
    type: 'radar',
    data: {
      labels: ["Sveto rimsko carstvo", "Francuska", "Španija", "Italija", "Engleska", "Škotska"],
      datasets: [{
        label:'Pre Crne smrti',
        data: [ 17.0, 12.8, 6.9, 10.0, 3.8, 4.9,],
        fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
      },
      {
        label:'Nakon Crne smrti',
        data: [ 12.4, 8.1, 4.9, 7.0, 2.2, 0.4],
        fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
      }]
    },
    options: {

      responsive: true, maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Poređenje broja stanovnika (u milionima)'
      }
    }
  });

  var gradovi = new Chart(document.getElementById("gradovi"), {
    type: 'polarArea',
    data: {
      labels: ["Carigrad (Konstantinopolj)", "Jiankang", "Patna", "Ctesiphon", "Datong"],
      datasets: [
        {
          label: "Broj stanovnika (u hiljadama)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [700,500,450,400,200]
        }
      ]
    },
    options: {        
      responsive: true, maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Najveći gradovi na svetu 500. godine'
      }
    }
});













new Chart(document.getElementById("kriza"), {
    type: 'horizontalBar',
    data: {
      labels: ["SAD", "Evropa", "Svet", "Bliski Istok", "Tranzitorne države", "Istočna i južna Azija"],
      datasets: [
        {
          label: "Oktobar 2008.",
          backgroundColor: "#3e95cd",
          data: [0.1,0.2,3.0,5.9,6.1,7.7]
        }, {
          label: "Novembar 2008.",
          backgroundColor: "#8e5ea2",
          data: [-0.7,-0.5,2.2, 5.3, 5.1, 7.1]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Stope rasta BDP u %'
      }
    }
});

new Chart(document.getElementById("populacija"), {
  type: 'bar',
  data: {
    labels: ["1900", "1950", "1999", "2050"],
    datasets: [{
        label: "Evropa",
        type: "line",
        borderColor: "#8e5ea2",
        data: [408,547,675,734],
        fill: false
      }, {
        label: "Afrika",
        type: "line",
        borderColor: "#3e95cd",
        data: [133,221,783,2478],
        fill: false
      }, {
        label: "Evropa",
        type: "bar",
        backgroundColor: "rgb(142, 94, 162, 0.3)",
        data: [408,547,675,734],
      }, {
        label: "Afrika",
        type: "bar",
        backgroundColor: "rgb(62, 149, 205, 0.3)",
        backgroundColorHover: "#3e95cd",
        data: [133,221,783,2478]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Porast stanovništva Evrope i Afrika u milionima kroz godine'
    },
    legend: { display: false }
  }
});



new Chart(document.getElementById("fb"), {
  type: 'bar',
  data: {
    labels: ["Facebook", "Youtube", "WhatsApp", "Instagram", "Twitter"],
    datasets: [
      {
        label: "Broj korisnika u hiljadama",
        backgroundColor: ["#3b5998	", "#ff0000","#4AC959", "#C13584","#00acee"],
        data: [2271,1900,1500,1000,326]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Broj korisnika najpopularnijih društvenih mreža u hiljadama'
    },
    
  }
});


new Chart(document.getElementById("studiranje"), {
  type: 'bubble',
  data: {
    labels: "Africa",
    datasets: [
      {
        label: ["Kina"],
        backgroundColor: "rgba(49, 125, 255,0.2)",
        borderColor: "rgba(49, 125, 255,1)",
        data: [{
          // Bruto domaci proizvod po glavi stanovnika
          x: 16.624,
          // udeo drzavnog budzeta koji ide na obrazovanje
          y: 4.0,
          // procenat studenata
          r: 2.71
        }]
      }, {
        label: ["Danska"],
        backgroundColor: "rgba(255,221,50,0.2)",
        borderColor: "rgba(255,221,50,1)",
        data: [{
          x: 49613,
          y: 8.7,
          r: 14.98
        }]
      }, {
        label: ["SAD"],
        backgroundColor: "rgba(0,0,0,0.2)",
        borderColor: "#000",
        data: [{
          x: 59495,
          y: 4.9,
          r: 26.76
        }]
      }, {
        label: ["Srbija"],
        backgroundColor: "rgba(193,46,12,0.2)",
        borderColor: "rgba(193,46,12,1)",
        data: [{
          x: 15164,
          y: 4.0,
          r: 8.97
        }]
      }, {
        label: ["Luksemburg"],
        backgroundColor: "rgba(60,186,159,0.2)",
        borderColor: "rgba(60,186,159,1)",
        data: [{
          x: 109192,
          y: 4.0,
          r: 18.24
        }]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Procenat državnog budžeta koji odlazi na edukaciju'
    }, scales: {
      yAxes: [{ 
        scaleLabel: {
          display: true,
          labelString: "Procenat ljudi koji završe visoke studije"
        }
      }],
      xAxes: [{ 
        scaleLabel: {
          display: true,
          labelString: "BDP po glavi stanovnika"
        }
      }]
    }
  }
});