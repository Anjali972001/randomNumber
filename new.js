var guestList=["Anjali Kumari","Tanya","Amrita","Arpita","Akansha","Rishita","Anjali mishra"];
var  guest=prompt("What is your name....")
if(guestList.includes(guest))//this include function will check whether entered guest name is inside the guest list.
{
    alert("Please! Welcome");

}
else{
    alert("Better luck next time...")
}