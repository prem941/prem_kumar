async function weather(){
let x ={
    method:"GET"
}

fetch("https://api.openweathermap.org/data/2.5/weather?q=Srinagar,IN&appid=aefdd90392c9ac9182c5eb72d08cfa3a&units=metric",x)
.then(function(response){
    return response.json();
})
.then(function(jsondata){
    console.log(jsondata);
    let a = document.getElementById("tem");
    let b = document.getElementById("temp2");
    let c = document.getElementById("pres");
    let d = document.getElementById("wind");
    let e = document.getElementById("hum");
    let f = document.getElementById("sky");
    let g = document.getElementById("trans");
    let i = document.getElementById("bg2");
    let j = document.getElementById("ic");
    
    
        
        
    
    a.textContent=jsondata.main.temp+'\u00b0c';
    b.textContent="feels like : "+jsondata.main.feels_like;
    c.textContent="pressure :"+jsondata.main.pressure;
    d.textContent="wind :"+jsondata.wind.speed;
    e.textContent="humidity :"+jsondata.main.humidity;
    f.textContent=jsondata.weather[0].main;
    g.textContent=jsondata.weather[0].icon;

    let h = document.createElement("img");
        h.style.height="80px"
        h.style.padding="20px"
        j.appendChild(h);
    if(g.textContent==="01d"){
        h.src="https://cdn-icons-png.flaticon.com/128/869/869869.png";}
    else if(g.textContent==="01n"){
        h.src="https://cdn-icons-png.flaticon.com/128/9689/9689796.png";}
    
    let y =document.getElementById("bg");
    
    if(f.textContent=="Clear"){
        y.style.backgroundImage="url(https://i.pinimg.com/originals/22/07/43/220743df7f831dce831375e9949a68c6.gif)";
        if(g.textContent==="01d"){
            y.style.backgroundImage="url(https://www.wallpaperengine.space/s/Charming-Summer-Breeze)";

        }
        else if(g.textContent==='01n'){
            y.style.backgroundImage="url(https://i.pinimg.com/originals/29/54/f6/2954f6fb5fa96cd38b989e265015c30e.gif)";

        }
    }
    else if(f.textContent=="Clouds"){
        y.style.backgroundImage="url(https://i.pinimg.com/originals/9e/9f/c8/9e9fc8b700f1aca5a52267d57051ca44.gif)"
    }
    else if(f.textContent=="Rain"){
        y.style.backgroundImage="url(https://i.makeagif.com/media/11-17-2021/Xirc6d.gif)"
    }
    else if(f.textContent=="Snow"){
        y.style.backgroundImage="url(https://i.pinimg.com/originals/18/6d/50/186d504e54b6c9422ea3950976a19fc6.gif)"
    }
    else{
        y.style.backgroundImage="url(https://i.pinimg.com/originals/22/07/43/220743df7f831dce831375e9949a68c6.gif)"
    }
});
}
weather();
