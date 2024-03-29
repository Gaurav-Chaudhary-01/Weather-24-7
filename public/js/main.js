const SubmitBtn=document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');

const temp_real_val=document.getElementById('temp_real_val');
const temp_status=document.getElementById('temp_status');

const datahide=document.querySelector(".middle_layer");


const getInfo=async(event) => {
    event.preventDefault();
    let city_val=cityName.value;
   
    if(city_val===""){
        city_name.innerText = `Please write the name before Search`;
        datahide.classList.add("data_hide");

    }else{
        try{
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${city_val}&units=metric&appid=2fec275f77ca3d0d2bd4084685f721fa`;
            const response=await fetch(url);
            const data=await response.json();
            const arrData=[data];
            console.log(data);

            city_name.innerText =`${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText=arrData[0].main.temp;
            // temp_status.innerText=arrData[0].weather[0].main;

            const tempMood=arrData[0].weather[0].main;

            //condition to check sunny and cloudy
            if(tempMood==="Clear"){
                temp_status.innerHTML=
                `<i class="fa fa-sun " style="color:#eccc68;" ></i>`;
            }else if(tempMood==="Clouds")
            {
                temp_status.innerHTML=
                `<i class="fa fa-cloud " style="color:#f1f2f6;" ></i>`;
            }else if(tempMood==="Rain")
            {
                temp_status.innerHTML=
                `<i class="fa fa-cloud-rain " style="color:#a4b0be;" ></i>`;
            }
            
            else{
                temp_status.innerHTML=
                `<i class="fa fa-sun " style="color:#eccc68;" ></i>`;
            }

            datahide.classList.remove("data_hide");

        }catch{
            city_name.innerText = `Please write city name prperly`;
            datahide.classList.add("data_hide");

        }
       
    }
}


SubmitBtn.addEventListener('click',getInfo);