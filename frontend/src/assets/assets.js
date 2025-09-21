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
import generalPhsycian from '/generalPhsycian.png'
import Neuorologist from '/Neuorologist.png'
import cardiologist from '/cardiologist.png'
import dermatologist from '/dermatologist.png'
import bornBaby from '/bornBaby.png'
import appDr from '/appDr.png'



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
    heroBanner: heroBanner,
    appoinmentDr:appDr

}


export const SpecialityData = [

    {
        speciality: 'General Physician',
        image: generalPhsycian,
    },
    {
        speciality: 'Neurologist',
        image: Neuorologist,
    },
    {
        speciality: 'Gynecologist',
        image: bornBaby,
    },
    {
        speciality: 'Dermatologist',
        image: dermatologist,
    },
    {
        speciality: 'Cardiologist',
        image: cardiologist,
    },
]

export const doctors = [
  {
    _id: "1",
    name: "Dr. Ahmed Khan",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    speciality: "Cardiologist",
    degree: "MBBS, FCPS (Cardiology)",
    experience: "12 years",
    about: "Expert in diagnosing and treating heart diseases, performing angioplasty and cardiac procedures.",
    fees: 2500,
    address: { line1: "Clinic 12, Main Boulevard", line2: "Gulberg, Lahore" },
  },
  {
    _id: "2",
    name: "Dr. Ayesha Malik",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    speciality: "Dermatologist",
    degree: "MBBS, MCPS (Dermatology)",
    experience: "8 years",
    about: "Specialist in skin care, cosmetic treatments, and managing chronic skin conditions.",
    fees: 1800,
    address: { line1: "Skin Care Center, Block H", line2: "North Nazimabad, Karachi" },
  },
  {
    _id: "3",
    name: "Dr. Salman Ali",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    speciality: "Neurologist",
    degree: "MBBS, FCPS (Neurology)",
    experience: "15 years",
    about: "Specialist in brain, spinal cord, and nerve disorders with extensive research background.",
    fees: 3000,
    address: { line1: "Neuro Care Hospital", line2: "F-8 Markaz, Islamabad" },
  },
    {
    _id: "20",
    name: "Dr. Aliyan",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    speciality: "Neurologist",
    degree: "MBBS, FCPS (Neurology)",
    experience: "15 years",
    about: "Specialist in brain, spinal cord, and nerve disorders with extensive research background.",
    fees: 3000,
    address: { line1: "Neuro Care Hospital", line2: "F-8 Markaz, Islamabad" },
  },
  {
    _id: "4",
    name: "Dr. Sara Qureshi",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    speciality: "Pediatrician",
    degree: "MBBS, DCH (Child Health)",
    experience: "10 years",
    about: "Focused on child healthcare, immunization, and growth development monitoring.",
    fees: 1500,
    address: { line1: "Children’s Clinic", line2: "Saddar, Rawalpindi" },
  },
  {
    _id: "5",
    name: "Dr. Hamza Farooq",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    speciality: "Orthopedic Surgeon",
    degree: "MBBS, MS (Orthopedics)",
    experience: "18 years",
    about: "Expert in joint replacement, sports injuries, and trauma surgeries.",
    fees: 3500,
    address: { line1: "Orthopedic Center", line2: "Jail Road, Lahore" },
  },
  {
    _id: "6",
    name: "Dr. Maria Yousaf",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    speciality: "Gynecologist",
    degree: "MBBS, FCPS (Gynecology)",
    experience: "11 years",
    about: "Specialist in women’s health, pregnancy care, and infertility treatments.",
    fees: 2200,
    address: { line1: "Women Health Center", line2: "Shahra-e-Faisal, Karachi" },
  },
  {
    _id: "7",
    name: "Dr. Kamran Siddiqui",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    speciality: "ENT Specialist",
    degree: "MBBS, DLO (ENT)",
    experience: "9 years",
    about: "Expert in ear, nose, and throat surgeries, allergy management, and hearing disorders.",
    fees: 1600,
    address: { line1: "ENT Care Clinic", line2: "Model Town, Lahore" },
  },
  {
    _id: "8",
    name: "Dr. Hina Javed",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    speciality: "Psychiatrist",
    degree: "MBBS, FCPS (Psychiatry)",
    experience: "13 years",
    about: "Specialist in mental health, stress management, and depression therapies.",
    fees: 2000,
    address: { line1: "Mind Care Center", line2: "Blue Area, Islamabad" },
  },
  {
    _id: "9",
    name: "Dr. Bilal Usman",
    image: "https://randomuser.me/api/portraits/men/63.jpg",
    speciality: "General Physician",
    degree: "MBBS",
    experience: "6 years",
    about: "Provides treatment for common illnesses, preventive care, and basic health checkups.",
    fees: 1000,
    address: { line1: "Health Plus Clinic", line2: "Clifton, Karachi" },
  },
  {
    _id: "10",
    name: "Dr. Sana Rauf",
    image: "https://randomuser.me/api/portraits/women/81.jpg",
    speciality: "Endocrinologist",
    degree: "MBBS, FCPS (Endocrinology)",
    experience: "14 years",
    about: "Expert in hormonal disorders, diabetes, and thyroid management.",
    fees: 2800,
    address: { line1: "Hormone Clinic", line2: "Johar Town, Lahore" },
  },
  {
    _id: "11",
    name: "Dr. Imran Haider",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    speciality: "Nephrologist",
    degree: "MBBS, FCPS (Nephrology)",
    experience: "16 years",
    about: "Specialist in kidney diseases, dialysis, and transplant follow-ups.",
    fees: 3200,
    address: { line1: "Kidney Care Hospital", line2: "Satellite Town, Rawalpindi" },
  },
  {
    _id: "12",
    name: "Dr. Nadia Tariq",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    speciality: "Oncologist",
    degree: "MBBS, FCPS (Oncology)",
    experience: "17 years",
    about: "Specialist in cancer treatment, chemotherapy, and radiation therapy.",
    fees: 4000,
    address: { line1: "Cancer Care Center", line2: "PECHS, Karachi" },
  },
  {
    _id: "13",
    name: "Dr. Fahad Zubair",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
    speciality: "Pulmonologist",
    degree: "MBBS, FCPS (Pulmonology)",
    experience: "10 years",
    about: "Expert in lung diseases, asthma, tuberculosis, and respiratory disorders.",
    fees: 2300,
    address: { line1: "Chest Clinic", line2: "Cantt, Lahore" },
  },
  {
    _id: "14",
    name: "Dr. Mahnoor Sheikh",
    image: "https://randomuser.me/api/portraits/women/92.jpg",
    speciality: "Rheumatologist",
    degree: "MBBS, FCPS (Rheumatology)",
    experience: "9 years",
    about: "Specialist in arthritis, autoimmune diseases, and joint pain management.",
    fees: 2600,
    address: { line1: "Joint Care Hospital", line2: "G-10, Islamabad" },
  },
  {
    _id: "15",
    name: "Dr. Zain ul Abidin",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
    speciality: "Gastroenterologist",
    degree: "MBBS, FCPS (Gastroenterology)",
    experience: "20 years",
    about: "Expert in digestive system diseases, endoscopy, and liver disorders.",
    fees: 3800,
    address: { line1: "Gastro Clinic", line2: "DHA, Karachi" },
  },
];

