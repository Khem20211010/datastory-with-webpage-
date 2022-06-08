/* Chart 1 from Assignment2. Temporary. To be revised or replaced */
document.addEventListener("DOMContentLoaded", function () {
    //        const data = {
    //             "test_data": [
    //                 ["1961", "3500000"],
    //                 ["1962", "4000000"],
    //                 ["1963", "3800000"],
    //                 ["1964", "3700000"],
    //                 ["1965", "4000000"]
    //             ]
    //         };

    //         new Chart('HKPopulation', {
    //             type: 'line',
    //             data: {
    //                 labels: data.test_data.map(a => a[0]),
    //                 datasets: [{
    //                     label: 'My Dataset',
    //                     data: data.test_data.map(a => a[1]),
    //                     fill: false,
    //                     borderColor: 'blue'
    //                 }]
    //             },
    //              options: {
    //                  scales: {
    //                      yAxes: [{
    //                          title: {
    //                              display: true,
    //                              text: "Opinion categories",
    //                              font: {
    //                                  size: 14
    //                              },
    //                              padding: 20
    //                          },
    //                          ticks: {
    //                              beginAtZero: true
    //                          }
    //                      }]
    //                  }
    //              }
    // options: {
    //     plugins: {
    //         title: {
    //             display: true,
    //             text: '',
    //             font: {
    //                 size: 16
    //             },
    //             padding: 20
    //         },
    //         legend: {
    //             display: false
    //         }
    //     },
    //     scales: {
    //         x: {
    //             title: {
    //                 display: true,
    //                 text: "Year",
    //                 font: {
    //                     size: 18
    //                 },
    //                 padding: 20
    //             }
    //         },
    //         y: {
    //             title: {
    //                 display: true,
    //                 text: "Population",
    //                 font: {
    //                     size: 18
    //                 },
    //                 padding: 20
    //             },
    //             ticks: {
    //                 beginAtZero: true,
    //                 stepSize: 100000
    //             }
    //         }
    //     },
    // },
    // });


    /*  const example2 = {
         data() {
             return {
                 type: 'line',
                 data: {
                     labels: data.map(a => a[0]),
                     datasets: [{
                         label: 'My Dataset',
                         data: data.map(a => a[1]),
                         fill: false,
                         borderColor: 'blue'
                     }]
                 },
                 options: {
                     plugins: {
                         title: {
                             display: true,
                             text: '',
                             font: {
                                 size: 16
                             },
                             padding: 20
                         },
                         legend: {
                             display: false
                         }
                     },
                     scales: {
                         x: {
                             title: {
                                 display: true,
                                 text: "Year",
                                 font: {
                                     size: 18
                                 },
                                 padding: 20
                             }
                         },
                         y: {
                             title: {
                                 display: true,
                                 text: "Population",
                                 font: {
                                     size: 18
                                 },
                                 padding: 20
                             },
                             ticks: {
                                 stepSize: 100000
                             }
                         }
                     },
                 },
                 created() {
                     fetch("https://api.npoint.io/caf07226c69fff3c5a99")
                         .then(response => {
                             return response.json();
                         })
                         .then((data) => this.data = data);
                 }
             }
         }
 
     };
 
     const app2 = new Vue(example2)
     app2.$mount('#app2')
 
  */
    // });


    const data = {
        "test_data": [
            ["1961", "3168099.9999999995"],
            ["1962", "3305199.9999999995"],
            ["1963", "3420900.0000000005"],
            ["1964", "3504599.999999999"],
            ["1965", "3597900.000000001"],
            ["1966", "3629899.999999999"],
            ["1967", "3722800.0000000005"],
            ["1968", "3802700"],
            ["1969", "3863900.0000000005"],
            ["1970", "3959000.000000001"],
            ["1971", "4045300"],
            ["1972", "4123600.0000000014"],
            ["1973", "4241599.999999998"],
            ["1974", "4377800"],
            ["1975", "4461599.999999998"],
            ["1976", "4517999.999999999"],
            ["1977", "4583700.000000001"],
            ["1978", "4667500.000000001"],
            ["1979", "4929699.999999999"],
            ["1980", "5063100.000000001"],
            ["1981", "5183399.999999999"],
            ["1982", "5264500"],
            ["1983", "5345099.999999999"],
            ["1984", "5397900.000000001"],
            ["1985", "5456199.999999999"],
            ["1986", "5524599.999999999"],
            ["1987", "5580500"],
            ["1988", "5627600"],
            ["1989", "5686199.999999999"],
            ["1990", "5704499.999999998"],
            ["1991", "5752000"],
            ["1992", "5800500"],
            ["1993", "5901000"],
            ["1994", "6035400"],
            ["1995", "6156099.999999999"],
            ["1996", "6435500"],
            ["1997", "6489300"],
            ["1998", "6543699.999999999"],
            ["1999", "6606500"],
            ["2000", "6665000"],
            ["2001", "6714300.000000001"],
            ["2002", "6744100"],
            ["2003", "6730800"],
            ["2004", "6783499.999999999"],
            ["2005", "6813200"],
            ["2006", "6857100"],
            ["2007", "6916300.000000001"],
            ["2008", "6957800.000000001"],
            ["2009", "6972799.999999999"],
            ["2010", "7024200"],
            ["2011", "7071600"],
            ["2012", "7150099.999999999"],
            ["2013", "7178900.000000002"],
            ["2014", "7229500.000000001"],
            ["2015", "7291300"],
            ["2016", "7336600"],
            ["2017", "7391700.000000001"],
            ["2018", "7451000.000000001"],
            ["2019", "7507400"],
            ["2020", "7481800"],
            ["2021", "7394699.999999999"]
        ]
    };

    new Chart('myChart3', {
        type: 'line',
        data: {
            labels: data.test_data.map(a => a[0]),
            datasets: [{
                label: 'HK population',
                data: data.test_data.map(a => a[1]),
                fill: true,
                borderColor: 'rgb(57,70,187)'
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Year",
                        font: {
                            size: 18
                        },
                        padding: 20
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: "Population",
                        font: {
                            size: 18
                        },
                        padding: 20
                    },
                },
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    }
                }]
            }
        }
    });
});
