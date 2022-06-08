document.addEventListener("DOMContentLoaded", function () {

    const labels = ["Indonesian", "Filipino", "Indian", "Nepalese","Thai","Other Asian","Others"
]
    
    const data = {
        labels: labels,
        datasets: [{
            data: [145656,163554,0,3527,0,428,0,1747,1429,4449],
            backgroundColor: [
                'rgb(75, 192, 192)',
                'rgb(54, 62, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(150, 99, 132)',
                'rgb(254, 162, 235)',
                'rgb(55, 205, 86)'
            ],
            borderColor: [
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(150, 99, 132)',
                'rgb(254, 162, 235)',
                'rgb(55, 205, 86)'
            ],
            borderWidth: 1,
            
        }],
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Ethnicity of Domestic Helpers',
                    font: {
                        size: 16
                    },
                    padding: 20
                },
                legend: {
                    display: true
                }
            },
            
        }
    };

    var myChart2 = new Chart(
        document.getElementById('myChart2'),
        config
    );
});