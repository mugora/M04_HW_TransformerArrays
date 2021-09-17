var chrs = [
    {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
    {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
    {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
    {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
    {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
    {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

// do not write any elements into your HTML file
const autoElements = (autos) => {
    //creating elements for the HTML file to read
    let divElement = document.createElement("div");
    let nameElement = document.createElement("div");
    let classElement = document.createElement("div");
    let aflElement = document.createElement("div");
    let vehicleElement = document.createElement("div");
    let autobotImg = document.createElement("img");
    let decepticonImg = document.createElement("img");

    //Creating text / content for the HTML file
    nameElement.innerHTML = "Name: " + autos.name;
    classElement.innerHTML = "Class: " + autos.class.toUpperCase();
    vehicleElement.innerHTML = "Vehicle: " + autos.vehicle;

    //writing content into the divElement
    divElement.appendChild(nameElement);
    divElement.appendChild(classElement);
    divElement.appendChild(aflElement);
    divElement.appendChild(vehicleElement);
    divElement.appendChild(autobotImg);
    divElement.appendChild(decepticonImg);

    //Writing the divElement into the body of the page
    document.body.appendChild(divElement);

    //Applying CSS Styles to the HTML file
    divElement.classList.add("character");
    divElement.classList.add("img");
    divElement.classList.add("div");


    //if the character being looped through has an afl of autobot/decepticon, give them either a class of "autobot", or "decepitcon"
   if(autos.afl==="autobot"){
          divElement.classList.add("autobot");
          autobotImg.src="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
    }else{
       divElement.classList.add("decepticon");
       decepticonImg.src="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
   }
// in the characters' "vehicle" data, change the color of that value in the div based on its value
// truck=blue
// tank=green
// card=gold
// plane=white
   if(autos.vehicle==="truck"){
      vehicleElement.style.color="blue";
   }else if (autos.vehicle==="tank"){
       vehicleElement.style.color="green";
   }else  if (autos.vehicle==="car"){
       vehicleElement.style.color="gold";
   }else{
       vehicleElement.style.color="white";
   }

}
//autoElements(chrs[0]);
for(let i = 0; i<chrs.length; i++){
    autoElements(chrs[i])
}


// loop through the above array to append a div using .append() into the body tag

// the appended div should always have the ".character" class

// display the characters name, class, and vehicle in the div

// Information should be displayed as "Name: Optimus Prime", with the next information on a different line

// if the character being looped through has an afl of autobot/decepticon, give them either a class of "autobot", or "decepitcon"

// in the top right, based on the top information, insert an img elemnt for either the autobot or decepticon

// link for autobot image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png

// link for decepticon image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png

// in the characters' "class" data, all of those values' letters should be capitalized when displayed in the div (so 'leader' should become 'LEADER')

// in the characters' "vehicle" data, change the color of that value in the div based on its value
// truck=blue
// tank=green
// card=gold
// plane=white

