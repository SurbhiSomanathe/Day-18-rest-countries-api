const countriesElem=document.querySelector(".countries");
const dropDown=document.querySelector(".dropDown")
const dropElem=document.querySelector(".drop")
const region=document.querySelectorAll(".region")
const search=document.querySelector(".search")




async function getCountry(){
    const url=await fetch("https://restcountries.com/v3.1/all");
    const res=await url.json();
    console.log(res);
    res.forEach(element => {
        showCountry(element)        
    });
}
getCountry()
function showCountry(data){
    const country=document.createElement("div")
    country.classList.add("country")
    country.innerHTML=` <div class="country-img">
    <img src="${data.flags.png}" alt="">
</div>
<div class="country-info">
    <h5>${data.altSpellings}</h5>                
    <p class="regionName">Region:</strong>${data.region}</p>
    <p><strong>Capital:</strong>${data.capital}</p>
    <p><strong>PostalCode:</strong>${data.area}</p>
    <p><strong>TimeZone:</strong>${data.timezones}</p>
    <p><strong>Latlng:</strong>${data.latlng}</p> 
         
</div>`
countriesElem.appendChild(country)
}
dropDown.addEventListener("click", ()=>{
  dropElem.classList.toggle("showDropDown")
  console.log("hello");

})
const regionName=document.getElementsByClassName("regionName")
const countryName=document.getElementsByClassName("countryName")
region.forEach(element => {
    element.addEventListener("click", ()=>{
         console.log(element);
        Array.from(regionName).forEach(elem => {
           if(elem.innerText.includes(element.innerText) || element.innerText=="All"){
           elem.parentElement.parentElement.style.display="grid"
        }else{
            elem.parentElement.parentElement.style.display="none"
        }
        });
    })
        });
