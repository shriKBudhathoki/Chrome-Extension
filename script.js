


// localStorage.setItem("myLeads", "www.google.com")

console.log(localStorage.getItem("myLeads"))


let MyLeads=[]
let oldleads=[]
const MyText=document.getElementById("Text-box")  // For Input text box 
const NM=document.getElementById("New")           // Save Button 
let ulel=document.getElementById("ul-el")          // Order List 
let SaveBtn=document.getElementById("tab-el")


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("Myleads")) // storing the previous value from the console  

//  Question : Get the leads from the localstorage and store it in variable,leadsFromLocalStorage and log out he variable 

//Question: ["leads1","leads2"] or null 

// 1) Check if leadsFromLocalStorage is truthy or not and if so set to its value and call renderleadds()


if(leadsFromLocalStorage) // checking the term is truthy or falsyif falsy js self remove it and do work as is work self to increment self
    
{
    MyLeads=leadsFromLocalStorage
    render(MyLeads)
}

// const tabs =[ {url: "https://www.facebook.com/ShreeKrishnaBudhathoki.1604"}

// ] Hard Coded 

    SaveBtn.addEventListener("click",function()
                        {
chrome.tabs.query({active: true, currentWindow: true},function(tabs)
                  {
                                              MyLeads.push(tabs[0].url)
                      localStorage.setItem("Myleads",JSON.stringify ( MyLeads ) )
                                              // Render the Array to local storage 
                                              render(MyLeads)
                                             // console.log(tabs[0].url)
                                          })

                      
                  })                           

function render(leads)
{
let listItems= " "
for (let i=0;i<leads.length;i++)
{
// 2. Add the items listitems variable instead of the ulel.innerHTML

// listItems+= "<li><a target='_blank' href='"+MyLeads[i]+ "'>"+MyLeads[i]+"</a></li>" First Method with ancor tag 


    //temple string 
listItems +=`
        <li>
            <a target='_blank' href='
            ${MyLeads[i]}'>
            ${MyLeads[i]}</a>
        </li>`

    ; // Third Method and MAke a new tab by using the target='_blank '



    console.log(listItems)
// listItems+= "<li>"+MyLeads[i]+"</li>" Second  Method with ancor tag 

}
// 3. Render the ListItems inside the unordered list usiing ulEl.innerHTML
ulel.innerHTML=listItems
}
// 1) Store the delete btn in the deletion variable 
const Deel=document.getElementById("Del")

// 2) Add an event listener to the deletion variable and listen for a click event
Deel.addEventListener("dblclick",function(){

    // 3) Inside the event listener function, call the clearData() function [Eg: clear localstorage,Myleads and the DOM ]
    localStorage.clear()
    MyLeads=[]
    render(MyLeads)

}
    )
                        
NM.addEventListener("click",function(){
              //Push the mylead array 
MyLeads.push(MyText.value) //it give the html typing value  to our javascript by .value
MyText.value=" " // it's for remove the search box msg or text 
localStorage.setItem("Myleads",JSON.stringify(MyLeads))  //save the myleads array to localstorage
     render(MyLeads)
              //Push the value from input field

    console.log(localStorage.getItem("Myleads")) // verify that works
    
})
// 1. Create a variable,listItems which hold all the HTML for the list items 
// Assign it to an empty string to begin with 


//create the render function 

// clear the input field 
// Adding <a> tag 

//style the list 






//temple string 

 const Handsome="Code With Harry"

const email=`Hey ${Handsome}! How is it going? Cheers Per`

console.log(email)




// Preparing the developyment 

// Developing to crome extension

// Learning the JSON
// What is localstorage 
//Storing arrays in localstorage 

//Get the leads from localstorage
// Truthly and falsy statements
// checking localstorage before rendering
//Style the delete button 
//Make the delete button work
// How function parameters can improve our code 
// Parameter Argument 
// Refactor renderLeads() to use a parameter 


// 1.) Refator the fuction so that takes parameter,leadsFromLocalStorage,that it URLSearchParams 2.) instead of the global myleads CSSVariableReferenceValue. Rembeber to update all innovaioms 
// of the function as weell


//Save the tab url 
// How to get the current Tab 
// Use the Chrome API to get the current tab