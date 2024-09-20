import ProfileImg from "./assets/images/ProfilePic.svg";
import SalesIcon from "./assets/icons/Total_sales_icon.svg";
import CustomerIcon from "./assets/icons/Total_customer_icon.svg";
import OrdersIcon from "./assets/icons/Total_orders_icon.svg";
import OrdersGraphIcon from "./assets/icons/Orders_graph_icon.svg";
import SalesGraphIcon from "./assets/icons/Sales_graph_icon.svg";
import CustomerGraphIcon from "./assets/icons/Customers_graph_icon.svg";
import ProfileImg2 from "./assets/images/ProfileImg2.svg";
import ProfileImg3 from "./assets/images/ProfileImg4.svg";
import ProfileImg4 from "./assets/images/ProfileImg5.svg";
import ProfileImg5 from "./assets/images/ProfileImg6.svg";
import ConstructionSector from "./assets/images/Construction_sector.svg";
import HealthSector from "./assets/images/Health_care_sector.svg";
import HomeSector from "./assets/images/Home_services_sector.svg";
import PetSector from "./assets/images/Pet_care_sector.svg";

export const mainDashboardRightColmData = [
  {
    id: "019273645",
    img: ProfileImg,
    name: "Name of the Raiser",
    sepone: "Technical Error",
    septwo: "Healthcare",
    heading: "I am facing Technical Issue during the Signup process",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    status: "Acknowledged",
  },
  {
    id: "019273645",
    img: ProfileImg,
    name: "Name of the Raiser",
    sepone: "Technical Error",
    septwo: "Healthcare",
    heading: "I am facing Technical Issue during the Signup process",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    status: "Open",
  },
  {
    id: "019273645",
    img: ProfileImg,
    name: "Name of the Raiser",
    sepone: "Technical Error",
    septwo: "Healthcare",
    heading: "I am facing Technical Issue during the Signup process",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    status: "On Hold",
  },
];

export const mainDashboardTopBox = [
  {
    img: SalesIcon,
    title: "Total Sales",
    body: "Rs. xxx.xx",
    graphImg: SalesGraphIcon,
    amount: "+5",
    text: "from last week",
    colr: "#FBBC05",
  },
  {
    img: CustomerIcon,
    title: "Total Customers",
    body: "XXXX",
    graphImg: CustomerGraphIcon,
    amount: "- 10%",
    text: "from last week",
    colr: "#EE5D50",
  },
  {
    img: OrdersIcon,
    title: "Total Orders",
    body: "XXXX",
    graphImg: OrdersGraphIcon,
    amount: "+ 10%",
    text: "from last week",
    colr: "#18CE98",
  },
];

export const serviceDashboardRightColmData = [
  {
    id: "019273645",
    img: ProfileImg,
    name: "Name of the Raiser",
    sepone: "Technical Error",
    septwo: "Healthcare",
    heading: "I am facing Technical Issue during the Signup process",
    status: "Open",
  },
  {
    id: "019273645",
    img: ProfileImg,
    name: "Name of the Raiser",
    sepone: "Technical Error",
    septwo: "Healthcare",
    heading: "I am facing Technical Issue during the Signup process",
    status: "Escalated",
  },
];

export const serviceDashboardOpenTickets = [
  {
    id: "019273645",
    img: ProfileImg,
    name: "Name of the Raiser",
    sepone: "Payment",
    septwo: "Healthcare",
    heading: "I am facing Technical Issue during the Signup process",
    status: "Open",
  },
  {
    id: "019273645",
    img: ProfileImg,
    name: "Samantha Williams",
    sepone: "Technical Error",
    septwo: "Healthcare",
    heading: "I am facing Technical Issue during the Signup process",
    status: "Open",
  },
];

export const serviceDashboardInProcess = [
  {
    id: "019273645",
    img: ProfileImg2,
    name: "Robert Williams",
    sepone: "Healthcare",
    septwo: "Technical Error",
    heading: "Status Pending",
  },
  {
    id: "019273645",
    img: ProfileImg2,
    name: "Robert Williams",
    sepone: "Healthcare",
    septwo: "Technical Error",
    heading: "Status Pending",
  },
];

export const serviceDashboardSolved = [
  {
    id: "019273645",
    img: ProfileImg,
    name: "Samantha Williams",
    sepone: "Technical Error",
    septwo: "Healthcare",
    heading: "I am facing Technical Issue during the Signup process",
    status: "Resolved",
  },
  {
    id: "019273645",
    img: ProfileImg2,
    name: "Samantha Williams",
    sepone: "Technical Error",
    septwo: "Healthcare",
    heading: "I am facing Technical Issue during the Signup process",
    status: "Resolved",
  },
];

export const serviceDashboardComplianceStatus = [
  {
    id: "019273645",
    img: ProfileImg2,
    name: "Robert Williams",
    sepone: "Healthcare",
    septwo: "Technical Error",
    heading: "Status Pending",
  },
  {
    id: "019273645",
    img: ProfileImg,
    name: "Robert Williams",
    sepone: "Healthcare",
    septwo: "Technical Error",
    heading: "Status Pending",
  },
];

export const serviceDashboardTopBox = [
  {
    img: SalesIcon,
    title: "Total Service Provider ",
    body: "Rs. xxx.xx",
    graphImg: SalesGraphIcon,
    amount: "+5",
    text: "from last week",
    colr: "#FBBC05",
  },
  {
    img: CustomerIcon,
    title: "New Service Provider ",
    body: "XXXX",
    graphImg: CustomerGraphIcon,
    amount: "- 10%",
    text: "from last week",
    colr: "#EE5D50",
  },
  {
    img: OrdersIcon,
    title: "Active Service Provider",
    body: "XXXX",
    graphImg: OrdersGraphIcon,
    amount: "+ 10%",
    text: "from last week",
    colr: "#18CE98",
  },
];

export const serviceDashboardProviders = [
  {
    img: ConstructionSector,
    title: "Construction Sector",
    ProfileImg: [ProfileImg3, ProfileImg4, ProfileImg5],
    newAdded: "+200",
    percent: "+11.02",
  },
  {
    img: HealthSector,
    title: "Health Care Sector",
    ProfileImg: [ProfileImg3, ProfileImg4, ProfileImg5],
    newAdded: "+180",
    percent: "+10.02",
  },
  {
    img: HomeSector,
    title: "Home Services Sector",
    ProfileImg: [ProfileImg3, ProfileImg4, ProfileImg5],
    newAdded: "+150",
    percent: "+9",
  },
  {
    img: PetSector,
    title: "Pet Care Sector",
    ProfileImg: [ProfileImg3, ProfileImg4, ProfileImg5],
    newAdded: "+100",
    percent: "+5",
  },
];
