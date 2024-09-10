// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");


addGuestButton.addEventListener("click", function() {
    const guest = guestInput.value;  // captures the value of what is being input
    //console.log(guest)
   

    if (guest !== "") { //if guest doesn't equal to empty string
       addToList(guest); // calls addToList function 
       updateGuestCount(); // 
       clearInput(); //clears the words in the box  
    }
});

const clearInput = function () {
   guestInput.value = ""; 

}

const addToList = function (guest) {
    const listItem = document.createElement("li")  // create a list element "li"
    listItem.innerText = guest; // changes the text to guest variable
    guestList.append(listItem);// adds the listItem to the guestlist

};

const updateGuestCount = function () {
    const guests = document.querySelectorAll(".guest-list li") // selects all list elements inside the ul list 
    guestCount.innerText = guests.length; //

    if (guests.length === 8) { // if the length of guests equals to 8 
        addGuestButton.classList.add("hide"); // then, add hide class to addguestbutton
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide"); // remove hide class to guestfull variable
    }
};

