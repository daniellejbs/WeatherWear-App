//Listing outfit options in arrays
//Cold outfits
const coldCasual = ["Long-sleeve top", "Wool jumper", "Jeans", "Boots", "Insulated coat"];
const coldWork = ["Vest", "Wool jumper", "Tailored trousers", "Ankle boots", "Wool trench coat"];
const coldFormal = ["Blouse", "Blazer", "Tailored skirt", "Tights", "Heels", "Faux-fur coat"];

//Mild outfits
const mildCasual = ["T-shirt", "Hoodie", "Jogging bottoms", "Trainers", "Body warmer"];
const mildWork = ["Shirt", "Smart trousers", "Loafers", "Trench coat"];
const mildFormal = ["Midi dress", "Heels", "Trench coat"];

//Hot outfits
const hotCasual = ["Tank top", "Shorts", "Sandals", "Sunglasses"];
const hotWork = ["Sleeveless blouse", "Flowy skirt", "Sandals"];
const hotFormal = ["Maxi dress", "Heeled sandals"];

//Messages to output
const coldMessage = "It's cold outside, stay warm by wearing this:";
const mildMessage = "It's a mild day, wear this";
const hotMessage = "It's a hot day, stay cool by wearing this";

//Function and if/else statements
function generateOutfit(temp, eventType) {
    if (temp === "cold" && eventType === "casual") {
        return coldCasual;
    }
    if (temp === "cold" && eventType === "work") {
        return coldWork;
    }
    if (temp === "cold" && eventType === "formal") {
        return coldFormal;
    }
    if (temp === "mild" && eventType === "casual") {
        return mildCasual;
    }
    if (temp === "mild" && eventType === "work") {
        return mildWork;
    }
    if (temp === "mild" && eventType === "formal") {
        return mildFormal;
    }
    if (temp === "hot" && eventType === "casual") {
        return hotCasual;
    }
    if (temp === "hot" && eventType === "work") {
        return hotWork;
    }
    if (temp === "hot" && eventType === "formal") {
        return hotFormal;
    }
}

//Adding event listener 
let generateButton = document.getElementById("action");

generateButton.addEventListener("click", function() {
    let temp = document.getElementById("tempSelect").value; //selects the value from the tempSelect id from HTML
    let eventType = document.getElementById("eventSelect").value;

    let outputDiv = document.getElementById("output"); //ensuring generated outfits go to the right area on the page
    outputDiv.textContent = ""; //clear previous results

    //prompt for user to select both a temp and event
    if (!temp || !eventType) {
        outputDiv.textContent = "Please select both temperature and event.";
        return;
    }

    //Assigning variable of outfit to function
    let outfit = generateOutfit(temp, eventType);

    //Add messages to the output
    let message = "";
    if (temp === "cold") {
        message = coldMessage;
    } else if (temp === "mild") {
        message = mildMessage;
    } else if (temp === "hot") {
        message = hotMessage;
    }

    //.innerHTML allows you to format text as you would in a HTML doc
    //Adding <ul> to begin a list for formatting outfits 
    outputDiv.innerHTML = `<p>${message}</p><ul>`;

    //inserting loop for array to print 
    // += ensures adds to what is already there instead of overriding the messages
    for (let i = 0; i < outfit.length; i++) {
        outputDiv.innerHTML += `<li> 👗${outfit[i]}</li>`; //will list each array item as a bullet point 
    }

    outputDiv.innerHTML += "</ul>"; //closing tag
});

//Adding a button to clear the results once done
let clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function () {
    let outputDiv = document.getElementById("output");
    outputDiv.textContent = ""; //button to clear results
});

//Change CSS through JS - change background colour based on temp when generate button is clicked
let temperature = document.getElementById("tempSelect");

temperature.addEventListener("change", function () {
    let page = document.body;
    let temp = temperature.value;

    if (temp === "cold") {
        page.style.backgroundColor = "#E8F1F2";
    }
    else if (temp === "mild") {
        page.style.backgroundColor = "#FFF4D6";
    }
    else if (temp === "hot") {
        page.style.backgroundColor = "#FFE1D6";
    }
});

