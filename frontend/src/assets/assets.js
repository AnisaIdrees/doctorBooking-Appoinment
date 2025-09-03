import { FaLock } from "react-icons/fa6";
import { RiUserFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaLockOpen } from "react-icons/fa";
import images from './'

export const icons = {

    hidePswdIcon: FaLock,
    userIcon: RiUserFill,
    emailIcon: MdEmail,
    showPswdIcon: FaLockOpen
}

export const images ={

}
// function checkUserMessage(message) {
//   const text = message.toLowerCase();
//   if (text.includes("appointment")) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let userInput1 = "I want to book an appointment";
// let userInput2 = "Just checking something";

// console.log(checkUserMessage(userInput1)); // true
// console.log(checkUserMessage(userInput2)); // false