// pie chart
// var Chart = require('chart.js');
import {Chart} from 'chart.js'
const totalIncome = document.querySelector('#total-income')
const totalExpense = document.querySelector('#total-expense')
const ctx = document.getElementById('myChart').getContext('2d')

let myChart = new Chart(ctx, {
    type:'pie',
    data: {
        labels: ['Total Expense', 'Balance' ],
        datasets: [
            {
                label: '# of votes',
                data: [0,0],
                backgroundColor: ['#adece', '#dd3b79'],
                borderWidth:1
            }
        ]
    }
})

const updateChartValue = (input, dataOrder)=>{
    input.addEventListner('change', e=>{
        myChart.data.datasets[0].data[dataOrder] = e.target.value;
        myChart.update()
    })
}

updateChartValue(totalIncome,0)
updateChartValue(totalExpense,1)