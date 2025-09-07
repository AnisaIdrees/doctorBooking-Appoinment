import { FaLock } from "react-icons/fa6";
import { RiUserFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaLockOpen } from "react-icons/fa";
import Profileimage from '/profile.png';
import dropdown from '/dropdown.png'
import NavLogo from '/NavLogo.png'
import teamDr from '/teamDr.png'
import doctor from '/doctor.png'
import heroBanner from '/heroBanner.jpg'
import SpecialityMenu from "../components/SpecialityMenu";


export const icons = {

    hidePswdIcon: FaLock,
    userIcon: RiUserFill,
    emailIcon: MdEmail,
    showPswdIcon: FaLockOpen
}

export const images = {
    profileImg: Profileimage,
    dropdown: dropdown,
    NavbarLogo: NavLogo,
    doctor: doctor,
    heroBanner: heroBanner

}


export const SpecialityData = [

    {
        speciality: 'General Physician',
        image: Profileimage,
    },
    {
        speciality: 'Dermotolohist',
        image: Profileimage,
    },
    {
        speciality: 'Neuorologist',
        image: Profileimage,
    },
    {
        speciality: 'Gynecologist',
        image: Profileimage,
    },
    {
        speciality: 'pediatricians',
        image: Profileimage,
    },
]