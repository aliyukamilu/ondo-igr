let monthsss = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// zonalOffPerformance chart 
async function zonalOffPerformance() {
  const ctx = document.getElementById('zonalOffPerformance').getContext('2d');

  try {
    const response = await fetch(`https://payzamfara.com/php/?zonalOfficePerformance`)
    const responseDta = await response.json()

    const topOfficeNames = responseDta.top.map(item => item.office_name);
    const topTotalPayments = responseDta.top.map(item => item.total_payments);

    const leastOfficeNames = responseDta.Least.map(item => item.office_name);
    const leastTotalPayments = responseDta.Least.map(item => item.total_payments);

    const combinedOfficeNames = [...topOfficeNames, ...leastOfficeNames];
    const combinedTotalPayments = [...topTotalPayments, ...leastTotalPayments];

    const data = {
      labels: combinedOfficeNames,
      datasets: [{
        label: 'Performance Metric',
        data: combinedTotalPayments,
        backgroundColor: [
          'rgba(0, 128, 0, 0.8)', // Top 5: Green with higher opacity
          'rgba(0, 128, 0, 0.8)',
          'rgba(0, 128, 0, 0.8)',
          'rgba(0, 128, 0, 0.8)',
          'rgba(0, 128, 0, 0.8)',
          'rgba(255, 0, 0, 0.5)', // Least 5: Red with lower opacity
          'rgba(255, 0, 0, 0.5)',
          'rgba(255, 0, 0, 0.5)',
          'rgba(255, 0, 0, 0.5)',
          'rgba(255, 0, 0, 0.5)'
        ],
        borderColor: [
          'rgba(0, 128, 0, 1)', // Top 5: Green border
          'rgba(0, 128, 0, 1)',
          'rgba(0, 128, 0, 1)',
          'rgba(0, 128, 0, 1)',
          'rgba(0, 128, 0, 1)',
          'rgba(255, 0, 0, 1)', // Least 5: Red border
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)'
        ],
        borderWidth: 2 // Thicker border for highlighting
      }]
    };

    const options = {
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    };

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });


  } catch (error) {
    console.log(error)
  }

}
// zonalOffPerformance()

// Area office Performance
function areaOffice() {
  const ctx = document.getElementById('areaOffice').getContext('2d');

  const data = {
    labels: ['Area A', 'Area B', 'Area C', 'Area D', 'Area E', 'Area F', 'Area G', 'Area H', 'Area I', 'Area J'],
    datasets: [{
      label: 'Performance Metric',
      data: [150, 200, 300, 250, 100, 50, 75, 125, 175, 225],
      backgroundColor: [
        'rgba(0, 128, 0, 0.8)', // Top 5: Green with higher opacity
        'rgba(0, 128, 0, 0.8)',
        'rgba(0, 128, 0, 0.8)',
        'rgba(0, 128, 0, 0.8)',
        'rgba(0, 128, 0, 0.8)',
        'rgba(255, 0, 0, 0.5)', // Least 5: Red with lower opacity
        'rgba(255, 0, 0, 0.5)',
        'rgba(255, 0, 0, 0.5)',
        'rgba(255, 0, 0, 0.5)',
        'rgba(255, 0, 0, 0.5)'
      ],
      borderColor: [
        'rgba(0, 128, 0, 1)', // Top 5: Green border
        'rgba(0, 128, 0, 1)',
        'rgba(0, 128, 0, 1)',
        'rgba(0, 128, 0, 1)',
        'rgba(0, 128, 0, 1)',
        'rgba(255, 0, 0, 1)', // Least 5: Red border
        'rgba(255, 0, 0, 1)',
        'rgba(255, 0, 0, 1)',
        'rgba(255, 0, 0, 1)',
        'rgba(255, 0, 0, 1)'
      ],
      borderWidth: 2 // Thicker border for highlighting
    }]
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });

}
// areaOffice()

// top least LGA performance
async function topLeastPerformance() {
  const ctx = document.getElementById('topLeastPerformance').getContext('2d');

  try {
    const response = await fetch(`https://payzamfara.com/php/?getMDALGAPerformance`);
    const responseDta = await response.json();

    const topLgaNames = responseDta.top.map(item => item.lga);
    const topTotalPayments = responseDta.top.map(item => item.total_payments);
    const topTotalInvoices = responseDta.top.map(item => item.total_invoices);

    const leastLgaNames = responseDta.Least.map(item => item.lga);
    const leastTotalPayments = responseDta.Least.map(item => item.total_payments);
    const leastTotalInvoices = responseDta.Least.map(item => item.total_invoices);

    const combinedLgaNames = [...topLgaNames, ...leastLgaNames];
    const combinedTotalPayments = [...topTotalPayments, ...leastTotalPayments];
    const combinedTotalInvoices = [...topTotalInvoices, ...leastTotalInvoices];

    const labels = combinedLgaNames;

    const revenueCollected = combinedTotalPayments;
    const invoicesGenerated = combinedTotalInvoices;

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Revenue Collected',
          data: revenueCollected,
          backgroundColor: [
            'rgba(0, 128, 0, 0.8)',  // Top 5 - Green
            'rgba(0, 128, 0, 0.8)',
            'rgba(0, 128, 0, 0.8)',
            'rgba(0, 128, 0, 0.8)',
            'rgba(0, 128, 0, 0.8)',
            'rgba(255, 0, 0, 0.8)',  // Least 5 - Red
            'rgba(255, 0, 0, 0.8)',
            'rgba(255, 0, 0, 0.8)',
            'rgba(255, 0, 0, 0.8)',
            'rgba(255, 0, 0, 0.8)'
          ],
          borderColor: [
            'rgba(0, 128, 0, 1)',  // Top 5 - Green
            'rgba(0, 128, 0, 1)',
            'rgba(0, 128, 0, 1)',
            'rgba(0, 128, 0, 1)',
            'rgba(0, 128, 0, 1)',
            'rgba(255, 0, 0, 1)',  // Least 5 - Red
            'rgba(255, 0, 0, 1)',
            'rgba(255, 0, 0, 1)',
            'rgba(255, 0, 0, 1)',
            'rgba(255, 0, 0, 1)'
          ],
          borderWidth: 1,
          yAxisID: 'yLeft'
        },
        {
          label: 'Invoices Generated',
          data: invoicesGenerated,
          backgroundColor: [
            'rgba(0, 0, 255, 0.8)',  // Top 5 - Blue
            'rgba(0, 0, 255, 0.8)',
            'rgba(0, 0, 255, 0.8)',
            'rgba(0, 0, 255, 0.8)',
            'rgba(0, 0, 255, 0.8)',
            'rgba(255, 165, 0, 0.8)',  // Least 5 - Orange
            'rgba(255, 165, 0, 0.8)',
            'rgba(255, 165, 0, 0.8)',
            'rgba(255, 165, 0, 0.8)',
            'rgba(255, 165, 0, 0.8)'
          ],
          borderColor: [
            'rgba(0, 0, 255, 1)',  // Top 5 - Blue
            'rgba(0, 0, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(255, 165, 0, 1)',  // Least 5 - Orange
            'rgba(255, 165, 0, 1)',
            'rgba(255, 165, 0, 1)',
            'rgba(255, 165, 0, 1)',
            'rgba(255, 165, 0, 1)'
          ],
          borderWidth: 1,
          yAxisID: 'yRight'
        }
      ]
    };

    const options = {
      responsive: true,
      scales: {
        yLeft: {
          beginAtZero: true,
          position: 'left',
          title: {
            display: true,
            text: 'Revenue Collected'
          }
        },
        yRight: {
          beginAtZero: true,
          position: 'right',
          title: {
            display: true,
            text: 'Invoices Generated'
          },
          grid: {
            drawOnChartArea: false  // Only want the grid lines for one axis to show up
          }
        },
        x: {
          title: {
            display: true,
            text: 'LGA Name'
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.dataset.label || '';
              const value = context.raw || 0;
              return `${label}: ${value}`;
            }
          }
        }
      }
    };

    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });


  } catch (error) {
    console.log(error)
  }

}
topLeastPerformance()

// Top & Least 5 performing Revenue Head
async function topLeastPerformanceRev() {
  const ctx = document.getElementById('topLeastPerformanceRev').getContext('2d');

  try {
    const response = await fetch(`https://payzamfara.com/php/?getRevenueHeadsPerformance`);
    const responseDta = await response.json();

    const topRevNames = responseDta.top.map(item => item.revenue_head);
    const topTotalPayments = responseDta.top.map(item => item.total_payments);

    const leastRevNames = responseDta.Least.map(item => item.revenue_head);
    const leastTotalPayments = responseDta.Least.map(item => item.total_payments);

    const combinedRevNames = [...topRevNames, ...leastRevNames];
    const combinedTotalPayments = [...topTotalPayments, ...leastTotalPayments];

    const labels = combinedRevNames;

    const revenueCollected = combinedTotalPayments;

    const data = {
      labels: labels,
      datasets: [{
        label: 'Revenue Collected',
        data: revenueCollected,
        backgroundColor: [
          'rgba(0, 128, 0, 0.8)',  // Top 5 - Green
          'rgba(0, 128, 0, 0.8)',
          'rgba(0, 128, 0, 0.8)',
          'rgba(0, 128, 0, 0.8)',
          'rgba(0, 128, 0, 0.8)',
          'rgba(255, 0, 0, 0.8)',  // Least 5 - Red
          'rgba(255, 0, 0, 0.8)',
          'rgba(255, 0, 0, 0.8)',
          'rgba(255, 0, 0, 0.8)',
          'rgba(255, 0, 0, 0.8)'
        ],
        borderColor: [
          'rgba(0, 128, 0, 1)',  // Top 5 - Green
          'rgba(0, 128, 0, 1)',
          'rgba(0, 128, 0, 1)',
          'rgba(0, 128, 0, 1)',
          'rgba(0, 128, 0, 1)',
          'rgba(255, 0, 0, 1)',  // Least 5 - Red
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)'
        ],
        borderWidth: 2,
        barThickness: 30,  // Highlight bars by making them thicker
      }]
    };

    const options = {
      responsive: true,
      indexAxis: 'y',  // This makes the bar chart horizontal
      scales: {
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Revenue Collected'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Revenue Head'
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.dataset.label || '';
              const value = context.raw || 0;
              return `${label}: ${value}`;
            }
          }
        }
      }
    };

    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });



  } catch (error) {
    console.log(error)
  }
}
topLeastPerformanceRev()

// Top & Least 5 performing MDA
async function topLeastPerformanceMDA() {
  const ctx = document.getElementById('topLeastPerformanceMDA').getContext('2d');

  try {
    const response = await fetch(`https://payzamfara.com/php/?getMDAPerformance`);
    const responseDta = await response.json();

    const topMdaNames = responseDta.top.map(item => item.mda);
    const topTotalPayments = responseDta.top.map(item => item.total_payments);

    const leastMdaNames = responseDta.Least.map(item => item.mda);
    const leastTotalPayments = responseDta.Least.map(item => item.total_payments);

    const combinedMdaNames = [...topMdaNames, ...leastMdaNames];
    const combinedTotalPayments = [...topTotalPayments, ...leastTotalPayments];

    const labels = combinedMdaNames;

    const revenueCollected = combinedTotalPayments;

    const data = {
      labels: labels,
      datasets: [{
        label: 'Revenue Collected',
        data: revenueCollected,
        backgroundColor: [
          'rgba(0, 128, 0, 0.8)',  // Top 5 - Green
          'rgba(0, 128, 0, 0.8)',
          'rgba(0, 128, 0, 0.8)',
          'rgba(0, 128, 0, 0.8)',
          'rgba(0, 128, 0, 0.8)',
          'rgba(255, 0, 0, 0.8)',  // Least 5 - Red
          'rgba(255, 0, 0, 0.8)',
          'rgba(255, 0, 0, 0.8)',
          'rgba(255, 0, 0, 0.8)',
          'rgba(255, 0, 0, 0.8)'
        ],
        borderColor: [
          'rgba(0, 128, 0, 1)',  // Top 5 - Green
          'rgba(0, 128, 0, 1)',
          'rgba(0, 128, 0, 1)',
          'rgba(0, 128, 0, 1)',
          'rgba(0, 128, 0, 1)',
          'rgba(255, 0, 0, 1)',  // Least 5 - Red
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)'
        ],
        borderWidth: 2,
        barThickness: 30,  // Highlight bars by making them thicker
      }]
    };

    const options = {
      responsive: true,
      indexAxis: 'y',  // This makes the bar chart horizontal
      scales: {
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Revenue Collected'
          }
        },
        y: {
          title: {
            display: true,
            text: 'MDA'
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.dataset.label || '';
              const value = context.raw || 0;
              return `${label}: ${value}`;
            }
          }
        }
      }
    };

    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });

  } catch (error) {

  }


}
topLeastPerformanceMDA()

// preferred payment method
async function paymentMethod() {
  const ctx = document.getElementById('paymentMethod').getContext('2d');

  try {
    const response = await fetch(`https://payzamfara.com/php/?analyticsTaxPayerPayment`);
    const responseDta = await response.json();

    const payment_channel = responseDta.message.map(item => item.payment_channel)
    const total_amount = responseDta.message.map(item => item.percentage)

    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    const generateColors = (numColors) => {
      const colors = [];
      for (let i = 0; i < numColors; i++) {
        colors.push(getRandomColor());
      }
      return colors;
    };

    const data = {
      labels: payment_channel,
      datasets: [{
        label: 'Payment Methods',
        data: total_amount,
        backgroundColor: generateColors(responseDta.message.length),
        borderWidth: 1
      }]
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.label || '';
              const value = context.raw || 0;
              return `${label}: ${value}%`;
            }
          }
        }
      }
    };

    new Chart(ctx, {
      type: 'pie',
      data: data,
      options: options
    });


  } catch (error) {
    console.log(error)
  }
}
paymentMethod()

// invoice generated category
async function invgenerated() {
  const ctx = document.getElementById('invgenerated').getContext('2d');

  try {
    const response = await fetch(`https://payzamfara.com/php/?getInvoicesGeneratedBasedOnCategories`);
    const responseDta = await response.json();

    const theCategories = responseDta.invoicesPerCategory.map(item => item.category)
    const theTotalPayments = responseDta.invoicesPerCategory.map(item => item.count)

    const data = {
      labels: theCategories,
      datasets: [{
        label: 'Number of Invoices Generated',
        data: theTotalPayments,
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',  // Individual
          'rgba(54, 162, 235, 0.8)',  // Corporate
          'rgba(255, 206, 86, 0.8)',  // State Agency
          'rgba(75, 192, 192, 0.8)'   // Federal Agency
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',  // Individual
          'rgba(54, 162, 235, 1)',  // Corporate
          'rgba(255, 206, 86, 1)',  // State Agency
          'rgba(75, 192, 192, 1)'   // Federal Agency
        ],
        borderWidth: 1
      }]
    };

    const options = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          position: 'top'
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.dataset.label || '';
              const value = context.raw || 0;
              return `${label}: ${value}`;
            }
          }
        }
      }
    };

    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });


  } catch (error) {
    console.log(error)
  }
}
invgenerated()

// invoice paid category
async function invpaid() {
  const ctx = document.getElementById('invpaid').getContext('2d');

  try {
    const response = await fetch(`https://payzamfara.com/php/?getAnalyticPaidInvoiceBasedOnCategories`);
    const responseDta = await response.json();

    const theCategories = responseDta.paidInvoicesPerCategory.map(item => item.category)
    const theTotalPayments = responseDta.paidInvoicesPerCategory.map(item => item.count)

    const data = {
      labels: theCategories,
      datasets: [{
        label: 'Number of Invoices Paid',
        data: theTotalPayments,
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',  // Individual
          'rgba(54, 162, 235, 0.8)',  // Corporate
          'rgba(255, 206, 86, 0.8)',  // State Agency
          'rgba(75, 192, 192, 0.8)'   // Federal Agency
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',  // Individual
          'rgba(54, 162, 235, 1)',  // Corporate
          'rgba(255, 206, 86, 1)',  // State Agency
          'rgba(75, 192, 192, 1)'   // Federal Agency
        ],
        borderWidth: 1
      }]
    };

    const options = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          position: 'top'
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.dataset.label || '';
              const value = context.raw || 0;
              return `${label}: ${value}`;
            }
          }
        }
      }
    };

    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });

  } catch (error) {
    console.log(error)
  }
}
invpaid()

// Average  payment time
async function avgpayment() {
  const ctx = document.getElementById('avgpayment').getContext('2d');

  try {
    const response = await fetch(`https://payzamfara.com/php/?averagePaymentTime`);
    const responseDta = await response.json();

    const theMonth = responseDta.map(item => item.month)
    const thePaymentTime = responseDta.map(item => item.avg_cycle_time)

    const data = {
      labels: theMonth,
      datasets: [{
        label: 'Average Payment Time',
        data: thePaymentTime,
        borderColor: 'rgba(54, 162, 235, 1)',  // Blue line
        backgroundColor: 'rgba(54, 162, 235, 0.2)',  // Light blue fill (optional)
        borderWidth: 2,
        fill: true  // If you want the area under the line to be filled with color
      }]
    };

    const options = {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Days'
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Average Payment Time'
          }
        }
      },
      plugins: {
        legend: {
          position: 'top'
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.dataset.label || '';
              const value = context.raw || 0;
              return `${label}: ${value} days`;
            }
          }
        }
      }
    };

    new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });

  } catch (error) {
    console.log(error)
  }
}
avgpayment()

// monthly invoice verification
function monthlyInvVerification() {
  const ctx = document.getElementById('monthlyInvVerification').getContext('2d');

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      label: 'Number of Invoices Verified',
      data: [30, 25, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',  // January
        'rgba(54, 162, 235, 0.8)',  // February
        'rgba(255, 206, 86, 0.8)',  // March
        'rgba(75, 192, 192, 0.8)',  // April
        'rgba(153, 102, 255, 0.8)',  // May
        'rgba(255, 159, 64, 0.8)',  // June
        'rgba(199, 199, 199, 0.8)',  // July
        'rgba(83, 102, 255, 0.8)',  // August
        'rgba(99, 255, 132, 0.8)',  // September
        'rgba(132, 99, 255, 0.8)',  // October
        'rgba(162, 235, 54, 0.8)',  // November
        'rgba(206, 86, 255, 0.8)'   // December
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',  // January
        'rgba(54, 162, 235, 1)',  // February
        'rgba(255, 206, 86, 1)',  // March
        'rgba(75, 192, 192, 1)',  // April
        'rgba(153, 102, 255, 1)',  // May
        'rgba(255, 159, 64, 1)',  // June
        'rgba(199, 199, 199, 1)',  // July
        'rgba(83, 102, 255, 1)',  // August
        'rgba(99, 255, 132, 1)',  // September
        'rgba(132, 99, 255, 1)',  // October
        'rgba(162, 235, 54, 1)',  // November
        'rgba(206, 86, 255, 1)'   // December
      ],
      borderWidth: 1
    }]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Invoices Verified'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Month'
        }
      }
    },
    plugins: {
      legend: {
        display: false  // Hide the legend since there is only one dataset
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}`;
          }
        }
      }
    }
  };

  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });
}
// monthlyInvVerification()

// weekly invoice verification
function weeklyInvVerification() {
  const ctx = document.getElementById('weeklyInvVerification').getContext('2d');

  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12'],
    datasets: [{
      label: 'Number of Invoices Verified',
      data: [30, 25, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',  // Week 1
        'rgba(54, 162, 235, 0.8)',  // Week 2
        'rgba(255, 206, 86, 0.8)',  // Week 3
        'rgba(75, 192, 192, 0.8)',  // Week 4
        'rgba(153, 102, 255, 0.8)',  // Week 5
        'rgba(255, 159, 64, 0.8)',  // Week 6
        'rgba(199, 199, 199, 0.8)',  // Week 7
        'rgba(83, 102, 255, 0.8)',  // Week 8
        'rgba(99, 255, 132, 0.8)',  // Week 9
        'rgba(132, 99, 255, 0.8)',  // Week 10
        'rgba(162, 235, 54, 0.8)',  // Week 11
        'rgba(206, 86, 255, 0.8)'   // Week 12
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',  // Week 1
        'rgba(54, 162, 235, 1)',  // Week 2
        'rgba(255, 206, 86, 1)',  // Week 3
        'rgba(75, 192, 192, 1)',  // Week 4
        'rgba(153, 102, 255, 1)',  // Week 5
        'rgba(255, 159, 64, 1)',  // Week 6
        'rgba(199, 199, 199, 1)',  // Week 7
        'rgba(83, 102, 255, 1)',  // Week 8
        'rgba(99, 255, 132, 1)',  // Week 9
        'rgba(132, 99, 255, 1)',  // Week 10
        'rgba(162, 235, 54, 1)',  // Week 11
        'rgba(206, 86, 255, 1)'   // Week 12
      ],
      borderWidth: 1
    }]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Invoices Verified'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Week'
        }
      }
    },
    plugins: {
      legend: {
        display: false  // Hide the legend since there is only one dataset
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}`;
          }
        }
      }
    }
  };

  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });
}
// weeklyInvVerification()

// daily invoice verification
function dailyInvVerification() {
  const ctx = document.getElementById('dailyInvVerification').getContext('2d');

  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10'],
    datasets: [{
      label: 'Number of Invoices Verified',
      data: [30, 25, 35, 40, 45, 50, 55, 60, 65, 70],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',  // Day 1
        'rgba(54, 162, 235, 0.8)',  // Day 2
        'rgba(255, 206, 86, 0.8)',  // Day 3
        'rgba(75, 192, 192, 0.8)',  // Day 4
        'rgba(153, 102, 255, 0.8)',  // Day 5
        'rgba(255, 159, 64, 0.8)',  // Day 6
        'rgba(199, 199, 199, 0.8)',  // Day 7
        'rgba(83, 102, 255, 0.8)',  // Day 8
        'rgba(99, 255, 132, 0.8)',  // Day 9
        'rgba(132, 99, 255, 0.8)',  // Day 10
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',  // Day 1
        'rgba(54, 162, 235, 1)',  // Day 2
        'rgba(255, 206, 86, 1)',  // Day 3
        'rgba(75, 192, 192, 1)',  // Day 4
        'rgba(153, 102, 255, 1)',  // Day 5
        'rgba(255, 159, 64, 1)',  // Day 6
        'rgba(199, 199, 199, 1)',  // Day 7
        'rgba(83, 102, 255, 1)',  // Day 8
        'rgba(99, 255, 132, 1)',  // Day 9
        'rgba(132, 99, 255, 1)',  // Day 10
      ],
      borderWidth: 1
    }]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Invoices Verified'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Day'
        }
      }
    },
    plugins: {
      legend: {
        display: false  // Hide the legend since there is only one dataset
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}`;
          }
        }
      }
    }
  };

  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });
}
// dailyInvVerification()


// commonsubject raised support
function commonsubjectSupport() {
  const ctx = document.getElementById('commonsubjectSupport').getContext('2d');

  const labels = ['Technical', 'Billing', 'Account', 'Sales', 'Other'];
  const dataCounts = [45, 30, 15, 10, 20];  // Example data counts

  const data = {
    labels: labels,
    datasets: [{
      label: 'Support Issues',
      data: dataCounts,
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',  // Red
        'rgba(54, 162, 235, 0.8)',  // Blue
        'rgba(255, 206, 86, 0.8)',  // Yellow
        'rgba(75, 192, 192, 0.8)',  // Green
        'rgba(153, 102, 255, 0.8)'  // Purple
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Count'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Support Issue Category'
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}`;
          }
        }
      }
    }
  };

  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });
}
commonsubjectSupport()

// supportClosure
function supportClosure() {
  const ctx = document.getElementById('supportClosure').getContext('2d');

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dataValues = [75, 80, 85, 70, 90, 95, 88, 92, 85, 87, 89, 93];  // Example data for percentage of tickets closed

  const data = {
    labels: labels,
    datasets: [{
      label: 'Percentage of Tickets Closed',
      data: dataValues,
      borderColor: 'rgba(54, 162, 235, 1)',  // Blue Line
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      fill: true,
      tension: 0.1,  // Smooth curve
      borderWidth: 2
    }]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Percentage of Tickets Closed (%)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Time'
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}%`;
          }
        }
      }
    }
  };

  new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });
}
supportClosure()

// supportResolu
function supportResolu() {
  const ctx = document.getElementById('supportResolu').getContext('2d');

  const labels = ['0-24 hours', '24-48 hours', '>48 hours'];
  const dataValues = [100, 75, 50];  // Example data for number of tickets resolved

  // Create a gradient color scheme from light to dark
  const gradient = ctx.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');  // Light color
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');        // Dark color

  const data = {
    labels: labels,
    datasets: [{
      label: 'Number of Tickets Resolved',
      data: dataValues,
      backgroundColor: gradient,
      borderColor: 'rgba(0, 0, 0, 1)',
      borderWidth: 1
    }]
  };

  const options = {
    responsive: true,
    indexAxis: 'y',  // Display the bars horizontally
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Tickets Resolved'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Resolution Time Range'
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}`;
          }
        }
      }
    }
  };

  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });
}
supportResolu()

// averageTransactionTime
function averageTransactionTime() {
  const ctx = document.getElementById('averageTransactionTime').getContext('2d');

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dataValues = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4];  // Example data for average transaction time

  const data = {
    labels: labels,
    datasets: [{
      label: 'Average Transaction Time',
      data: dataValues,
      borderColor: 'rgba(54, 162, 235, 1)',  // Blue Line
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      fill: true,
      tension: 0.1,  // Smooth curve
      borderWidth: 2
    }]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Average Transaction Time'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Time (Months)'
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}`;
          }
        }
      }
    }
  };

  new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });
}
averageTransactionTime()

// Monthly TIN Request
async function monthlyTinRequest() {
  const ctx = document.getElementById('monthlyTinRequest').getContext('2d');

  try {
    const response = await fetch(`https://payzamfara.com/php/?getAnalyticsTINRequestPerMonth`);
    const responseDta = await response.json();

    const theMonth = responseDta.tinRequestsPerMonth.map(item => item.month)
    const requestCount = responseDta.tinRequestsPerMonth.map(item => item.requestCount)

    const labels = theMonth;
    const dataValues = requestCount;  // Example data for number of TIN requests

    // Use a pre-defined color palette to distinguish months
    const colors = [
      'rgba(255, 99, 132, 0.8)',   // Red
      'rgba(54, 162, 235, 0.8)',   // Blue
      'rgba(255, 206, 86, 0.8)',   // Yellow
      'rgba(75, 192, 192, 0.8)',   // Green
      'rgba(153, 102, 255, 0.8)'   // Purple
    ];

    const data = {
      labels: labels,
      datasets: [{
        label: 'Number of TIN Requests',
        data: dataValues,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1
      }]
    };

    const options = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Number of Monthly TIN Requests'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Month'
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.dataset.label || '';
              const value = context.raw || 0;
              return `${label}: ${value}`;
            }
          }
        }
      }
    };

    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });


  } catch (error) {
    console.log(error)
  }
}
monthlyTinRequest()

// weekly TIN Request
function weeklyTinRequest() {
  const ctx = document.getElementById('weeklyTinRequest').getContext('2d');

  const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];
  const dataValues = [100, 120, 140, 130, 110];  // Example data for number of invoices verified

  // Use a pre-defined color palette to distinguish weeks
  const colors = [
    'rgba(255, 99, 132, 0.8)',   // Red
    'rgba(54, 162, 235, 0.8)',   // Blue
    'rgba(255, 206, 86, 0.8)',   // Yellow
    'rgba(75, 192, 192, 0.8)',   // Green
    'rgba(153, 102, 255, 0.8)'   // Purple
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Number of Weekly TIN Requests',
      data: dataValues,
      backgroundColor: colors,
      borderColor: colors,
      borderWidth: 1
    }]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Weekly TIN Requests'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Weeks'
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}`;
          }
        }
      }
    }
  };

  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });
}
// weeklyTinRequest()

//  Visitor's count rate
function visitorsCount() {
  const ctx = document.getElementById('visitorsCount').getContext('2d');

  const labels = ['Daily', 'Weekly', 'Monthly'];
  const dataValues = [500, 1500, 3000];  // Example data for number of visitors

  const data = {
    labels: labels,
    datasets: [{
      label: 'Number of Visitors',
      data: dataValues,
      borderColor: 'rgba(54, 162, 235, 1)',  // Blue Line
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      fill: true,
      tension: 0.1,  // Smooth curve
      borderWidth: 2
    }]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Visitors'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Time'
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}`;
          }
        }
      }
    }
  };

  new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });
}
visitorsCount()

// Impressions
function impressionsChart() {
  const ctx = document.getElementById('impressionsChart').getContext('2d');

  const labels = ['Daily', 'Weekly', 'Monthly'];
  const dataValues = [1000, 7000, 30000];  // Example data for number of impressions

  const data = {
    labels: labels,
    datasets: [{
      label: 'Number of Impressions',
      data: dataValues,
      borderColor: 'rgba(75, 192, 192, 1)',  // Green Line
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
      tension: 0.1,  // Smooth curve
      borderWidth: 2
    }]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Impressions'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Time'
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}`;
          }
        }
      }
    }
  };

  new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });
}
impressionsChart()

// socialMedia
function socialMedia() {
  const ctx = document.getElementById('socialMedia').getContext('2d');

  const labels = ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'YouTube'];
  const dataValues = [300, 200, 250, 150, 350];  // Example data for number of interactions

  // Use a pre-defined color palette from Chart.js
  const colors = [
    'rgba(54, 162, 235, 0.8)',  // Blue for Facebook
    'rgba(75, 192, 192, 0.8)',  // Green for Twitter
    'rgba(255, 206, 86, 0.8)',  // Yellow for Instagram
    'rgba(153, 102, 255, 0.8)', // Purple for LinkedIn
    'rgba(255, 99, 132, 0.8)'   // Red for YouTube
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Number of Interactions',
      data: dataValues,
      backgroundColor: colors,
      borderColor: colors.map(color => color.replace('0.8', '1')),
      borderWidth: 1
    }]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Interactions'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Social Media Platform'
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}`;
          }
        }
      }
    }
  };

  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });
}
// socialMedia()