let userinfo=localStorage.getItem('userdata')
if(userinfo){
    let usergot=JSON.parse(userinfo);
    console.log("we have");
    document.getElementById('FirstName').textContent=usergot.FirstName;
    document.getElementById('LastName').textContent=usergot.LastName;
    document.getElementById('Country').textContent=usergot.Country;
    document.getElementById('PhoneNumber').textContent=usergot.PhoneNumber;
    document.getElementById('State').textContent=usergot.State;
    document.getElementById('City').textContent=usergot.City;
    document.getElementById('Village').textContent=usergot.Village;
}
else{
    Storevalue();
}
function Storevalue(){
    console.log("we don not have")
    
    let FirstName=prompt("Please enter your firstName");
    let LastName=prompt("Please enter your LastName");
    let Country=prompt("Please enter your Country");
    let PhoneNumber=prompt("Please enter your PhoneNumber");
    let State=prompt("Please enter your State");
    let City=prompt("Please enter your City");
    let Village=prompt("Please enter your Village");

    let usergot={
        FirstName,
        LastName,
        Country,
        PhoneNumber,
        State,
        City,
        Village
    }
    localStorage.setItem("userdata",JSON.stringify(usergot));
   
    document.getElementById('FirstName').textContent=usergot.FirstName;
    document.getElementById('LastName').textContent=usergot.LastName;
    document.getElementById('Country').textContent=usergot.Country;
    document.getElementById('PhoneNumber').textContent=usergot.PhoneNumber;
    document.getElementById('State').textContent=usergot.State;
    document.getElementById('City').textContent=usergot.City;
    document.getElementById('Village').textContent=usergot.Village;
}