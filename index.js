const weather=document.getElementById('condation')
const country=document.getElementById('country')
const city=document.getRootNode('city')
const main=document.getElementById('main')
const description=document.getElementById('description')
const temp=document.getElementById('temp')
const pressur=document.getRootNode('pressur')
const huminity =document.getElementById('huminity')

const input=document.getElementById('input')
const history = document.getElementById('history')


const API_KEY='d30524ed959c2cfd5158ed9165159628'
const URL=`https://samples.openweathermap.org/data/2.5/weather?appid=${API_KEY}`

const ICON ='http://openweathermap.org/img/wn/'