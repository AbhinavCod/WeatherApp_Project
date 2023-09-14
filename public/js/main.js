const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_real_val = document.getElementById("temp_real_val");
const datahide = document.querySelector(".middle_layer");


const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal===""){
        city_name.innerText = "Plz write the name before search";
        datahide.classList.add("data_hide");
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=c310fcc9fa18e7c78b704dc18044323a`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
            const tempMod = arrData[0].weather[0].main;

            // condition to check weather status
            if(tempMod=="Clear"){
                temp_status.innerHTML = '<i class="fa-solid fa-sun" style="color:#eccc68"></i>';
            }
            else if(tempMod=="Clouds"){
                temp_status.innerHTML = "<i class='fa-solid fa-cloud' style='color:#009ad8'></i>";
            }
            else if(tempMod=="Rain"){
                temp_status.innerHTML = '<i class="fa-solid fa-cloud-rain" style="color:#a4b0be"></i>';
            }
            else if(tempMod=="Thunderstorm"){
                temp_status.innerHTML = '<i class="fa-solid fa-cloud-bolt" style="color:grey"></i>';
            }
            else{
                temp_status.innerHTML = '<i class="fa-solid fa-sun" style="color:#eccc68"></i>';
            }

            datahide.classList.remove("data_hide");

        }
        catch{
            city_name.innerText = "Plz write the name before search";
            datahide.classList.add("data_hide");
        }
    }


}
submitBtn.addEventListener('click',getInfo);