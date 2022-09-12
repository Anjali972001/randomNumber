var guestList=["Anjali Kumari","Tanya","Amrita","Arpita","Akansha","Rishita","Anjali mishra"];
var  guest=prompt("What is your name....")
if(guestList.includes(guest))//this include function will check whether entered guest name is inside the guest list.
{
    alert("Please! Welcome");

}
else{
    alert("Better luck next time...")
}
// this can be used where in a party only limited guest is invited.
// using this we can check whether the person is allowed to enter in ther party or not.
// his is simple program where only conditiponal statement is used. 