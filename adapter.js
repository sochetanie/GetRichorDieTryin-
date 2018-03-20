window.onload = function() {
  getData()
  // createUser()
}

$(document).ready(function(){
  createUser()
  $('.ui.mini.modal')
  .modal('show')
  $('#chart').toggle()
})

let apple = []
let amazon = []
let google = []
let microsoft = []
let facebook = []
let nvidia = []
let ibm = []
let ebay = []

function getData() {
    fetch('https://www.quandl.com/api/v3/datatables/WIKI/PRICES.json?date.gte=20160801&date.lt=20170801&ticker=MSFT,FB,AAPL,GOOGL,AMZN,NVDA,IBM,EBAY&api_key=-uF_NbkA7_3nmTJLmr4t', {
    method: 'GET',
})
.then(response => response.json())
.then(json => separateData(json, postData))

}

function separateData(json, callback) {
    json.datatable.data.forEach(arr => {
        if (arr[0] === 'AMZN') {
            amazon.push( {stock: {name: 'Amazon', ticker: arr[0], date: arr[1], price: arr[5]} })
        } else if (arr[0] === 'MSFT') {
            microsoft.push( {stock: {name: 'Microsoft', ticker: arr[0], date: arr[1], price: arr[5]} })
        } else if (arr[0] === 'AAPL') {
            apple.push( {stock: {name: 'Apple', ticker: arr[0], date: arr[1], price: arr[5]} })
        } else if (arr[0] === 'GOOGL') {
            google.push( {stock: {name: 'Google', ticker: arr[0], date: arr[1], price: arr[5]}} )
        } else if (arr[0] === 'FB') {
            facebook.push( {stock: {name: 'Facebook', ticker: arr[0], date: arr[1], price: arr[5]} })
        } else if (arr[0] === 'NVDA') {
            nvidia.push( {stock: {name: 'NVIDIA', ticker: arr[0], date: arr[1], price: arr[5]} })
        } else if (arr[0] === 'IBM') {
            ibm.push( {stock: {name: 'IBM', ticker: arr[0], date: arr[1], price: arr[5]} })
        } else if (arr[0] === 'EBAY') {
            ebay.push( {stock: {name: 'eBay', ticker: arr[0], date: arr[1], price: arr[5]} })
        }
    })
    callback(apple)
    callback(amazon)
    callback(google)
    callback(facebook)
    callback(microsoft)
    callback(nvidia)
    callback(ibm)
    callback(ebay)
}

function postData(data) {
  // debugger
  console.log(data)
    fetch('http://localhost:3000/stocks', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    })
  }

function createUser() {
  $('#signup').submit(function(event) {
  event.preventDefault()
  let values = $(this).serialize()
  let posting = $.post('http://localhost:3000/users', values)
      posting.done(function(data) {
        $('#signup').toggle()
        $('#username').text(`Hi, ${data.name}`)
        let portfolioForm = new MyForm()
        $('#portfolioForm').append(portfolioForm.render())
        ourAPI()
        grabPortfolio()
      })
  })
}

function startPlaybackGunit() {
  return document.querySelector('#gunit').play();
}

function startPlaybackSweedish() {
  return document.querySelector('#sweedish').play();
}

function show() {
  $('#gif').append('<img src="./images/mario.gif"/>')
    setTimeout(function(){
      $('#gif').remove()
    }, 3500)
}

function grabPortfolio() {
  $('#chart').show()

  $('#portfolioForm').on('click', '#buttn', function(event) {
     event.preventDefault()
     startPlaybackGunit().then(function() {
       console.log('The play() Promise fulfilled! Rock on!')
     }).catch(function(error) {
       console.log('The play() Promise rejected!')
       console.log('Use the Play button instead.')
       console.log(error)
     })

     if (!!event.target.dataset.clear) {
       let clearForm = new MyForm()
       $('#portfolioForm').empty()
       $('#portfolioForm').append(clearForm.render())

       chart.unload()

       startPlaybackSweedish()
         .then(show())
         .catch(function(error) {
           console.log('The play() Promise rejected!')
           console.log('Use the Play button instead.')
           console.log(error)
          })
      }

    let selections = document.querySelectorAll('#portfolio')
    let chosen = []
    selections.forEach((company) => {
      if (company.checked) {
        chosen.push(company.value)
      }
    })

    let userPortfolio=[]
     for (let i=0; i<chartArray.length; i++) {
       for (let j=0; j<chosen.length; j++) {
         if (chartArray[i][0][0].includes(chosen[j])) {
           userPortfolio.push(chartArray[i])
         }
       }
     }

     for(let k=0; k<userPortfolio.length; k++){
        chart.load({
        columns:[
            userPortfolio[k][0],
            userPortfolio[k][1]
        ],
      })
     }

  })
}


let chartArray=[]
function filterData(data, companyName){
  let companyArray=[]

   let twentySixteen = data.filter((stock)=>{
    return stock.name === companyName
    }).filter((stock)=>{
      return stock.date.substring(0,4) === '2016'
    }).map((el)=>{
      return el.price
    })

  let twentySeventeen = data.filter((stock)=>{
    return stock.name === companyName
    }).filter((stock)=>{
      return stock.date.substring(0,4) === '2017'
    }).map((el)=>{
      return el.price
    })

  twentySixteen.unshift(companyName + ' 2016')
  twentySeventeen.unshift(companyName + ' 2017')
  companyArray.push(twentySixteen)
  companyArray.push(twentySeventeen)
  chartArray.push(companyArray)
}

function ourAPI(){
  $.get('http://localhost:3000/stocks',function(data){
    let amazon = filterData(data, 'Amazon')
    let google = filterData(data, 'Google')
    let microsoft = filterData(data, 'Microsoft')
    let facebook = filterData(data, 'Facebook')
    let apple = filterData(data, 'Apple')
    let nvidia = filterData(data, 'NVIDIA')
    let ebay = filterData(data, 'eBay')
    let ibm = filterData(data, 'IBM')
    })
}

  var chart = c3.generate({
    bindto: '#chart',
    padding: {
        top: 20,
        right: 100,
        bottom: 20,
        left: 100,
    },
    data: {
      columns: []
    },
    axis: {
      x: {
        label: {
          text: 'Months',
          position: 'outer-center'
        }
      },
      y: {
        label: {
          text: 'Prices',
          position: 'outer-middle'
        }
      }
    }
})

