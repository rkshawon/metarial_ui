import imgOne from "./assets/img/1.png";
import imgTwo from "./assets/img/2.png";
import imgThree from "./assets/img/3.png";
import imgFour from "./assets/img/4.png";
import imgFive from "./assets/img/5.png";
import imgSix from "./assets/img/6.png";
import shopify from "../src/portals/customer/assets/shopify.png";
import woocommerce from "../src/portals/customer/assets/woocommerce.png";
import visa from "../src/portals/customer/assets/visa.png";
import invoiceIcon from "../src/portals/customer/assets/invoiceIcon.png";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SettingsIcon from "@mui/icons-material/Settings";
import ListAltIcon from "@mui/icons-material/ListAlt";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";

export const product_cards = [
  {
    id: 1,
    img: imgOne,
    title: "Foundations Matte Flip Flop",
    price: "$12.9",
    cut_price: "$16.9",
    sub_title: "By U-SEND Fulfillment",
    status: "Pending",
  },
  {
    id: 2,
    img: imgTwo,
    title: "Foundations Matte Flip Flop",
    price: "$12.9",
    sub_title: "By U-SEND Fulfillment",
    status: "Place Order",
  },
  {
    id: 3,
    img: imgThree,
    title: "Foundations Matte Flip Flop",
    price: "$12.9",
    cut_price: "$16.9",
    sub_title: "By U-SEND Fulfillment",
    status: "Pending",
  },
  {
    id: 4,
    img: imgThree,
    title: "Foundations Matte Flip Flop ",
    price: "$12.9",
    cut_price: "$16.9",
    sub_title: "By U-SEND Fulfillment",
    status: "Pending",
  },
  {
    id: 5,
    img: imgFive,
    title: "Foundations Matte Flip Flop",
    price: "$12.9",
    cut_price: "$16.9",
    sub_title: "By U-SEND Fulfillment",
    status: "Place Order",
  },
  {
    id: 6,
    img: imgOne,
    title: "Foundations Matte Flip Flop",
    price: "$12.9",
    cut_price: "$16.9",
    sub_title: "By U-SEND Fulfillment",
    status: "Pending",
  },
  {
    id: 7,
    img: imgSix,
    title: "Foundations Matte Flip Flop",
    price: "$12.9",
    cut_price: "$16.9",
    sub_title: "By U-SEND Fulfillment",
    status: "Pending",
  },
  {
    id: 8,
    img: imgOne,
    title: "Foundations Matte Flip Flop",
    price: "$12.9",
    cut_price: "$16.9",
    sub_title: "By U-SEND Fulfillment",
    status: "Place Order",
  },
  {
    id: 9,
    img: imgFive,
    title: "Foundations Matte Flip Flop",
    price: "$12.9",
    cut_price: "$16.9",
    sub_title: "By U-SEND Fulfillment",
    status: "Place Order",
  },
  {
    id: 10,
    img: imgOne,
    title: "Foundations Matte Flip Flop",
    price: "$12.9",
    cut_price: "$16.9",
    sub_title: "By U-SEND Fulfillment",
    status: "Pending",
  },
  {
    id: 11,
    img: imgSix,
    title: "Foundations Matte Flip Flop",
    price: "$12.9",
    cut_price: "$16.9",
    sub_title: "By U-SEND Fulfillment",
    status: "Pending",
  },
  {
    id: 12,
    img: imgOne,
    title: "Foundations Matte Flip Flop",
    price: "$12.9",
    cut_price: "$16.9",
    sub_title: "By U-SEND Fulfillment",
    status: "Place Order",
  },
];

export const overview_cards = [
  {
    id: 1,
    icon: <CreditCardIcon />,
    title: "Revenue",
    price: "€8500",
    count: "",
    link: "",
  },
  {
    id: 2,
    icon: <SettingsIcon />,
    title: "COGS",
    price: "€2675",
    count: "",
    link: "",
  },
  {
    id: 3,
    icon: <ListAltIcon />,
    title: "Open Orders",
    price: "",
    count: 54,
    link: "/customer/orders",
  },
  {
    id: 4,
    icon: <NotificationsNoneIcon />,
    title: "New Notification",
    price: "",
    count: 16,
    link: "/customer/notifications",
  },
  {
    id: 5,
    icon: <CrisisAlertIcon />,
    title: "Disputes",
    price: "",
    count: 3,
    link: "/customer/orders/dispute-list",
  },
];

export const circularContent = [
  {
    id: 1,
    text: 121,
    percent: 21,
    type: "Awaiting",
    amount: "$1205.72",
  },
  {
    id: 2,
    text: 42,
    percent: 42,
    type: "Processing",
    amount: "$198.01",
  },
  {
    id: 3,
    text: 621,
    percent: 62,
    type: "Shipped",
    amount: "$534.72",
  },
  {
    id: 4,
    text: 7,
    percent: 25,
    type: "Failed",
    amount: "$287.13",
  },
];

export const orderTrackingCircular = [
  {
    id: 1,
    text: 121,
    percent: 21,
    type: "In Transit",
    amount: "$1205.72",
  },
  {
    id: 2,
    text: 42,
    percent: 42,
    type: "Picked up",
    amount: "$198.01",
  },
  {
    id: 3,
    text: 621,
    percent: 62,
    type: "Delivered",
    amount: "$534.72",
  },
  {
    id: 4,
    text: 7,
    percent: 25,
    type: "Failed",
    amount: "$287.13",
  },
];

export const storeData = [
  {
    id: 1,
    title: "Pattrick Leach- ",
    sub_title: "store.pat_leach.shopify.com",
    store: "Shopify",
    img: shopify,
  },
  {
    id: 2,
    title: "Pattrick Leach- ",
    sub_title: "store.pat_leach.woocommerce.com",
    store: "Woo Commerce",
    img: woocommerce,
  },
];

export const bundleList = [
  {
    id: 1,
    title: "Bundle 001",
    sub_title: "Buy Product 1- Blue Recieve Product 1- Blue 2x",
  },
  {
    id: 2,
    title: "Bundle 002",
    sub_title: "Buy Product 1- Blue Recieve Product 1- Blue 2x",
  },
  {
    id: 1,
    title: "Bundle 003",
    sub_title: "Buy Product 1- Blue Recieve Product 1- Blue 2x",
  },
  {
    id: 1,
    title: "Bundle 004",
    sub_title: "Buy Product 1- Blue Recieve Product 1- Blue 2x",
  },
  {
    id: 1,
    title: "Bundle 005",
    sub_title: "Buy Product 1- Blue Recieve Product 1- Blue 2x",
  },
];

export const paymentMethods = [
  {
    id: 1,
    title: "**** **** 3258",
    method: "Visa",
    img: visa,
  },
  {
    id: 2,
    title: "**** **** 7459",
    method: "Visa",
    img: visa,
  },
];

export const invoiceHistory = [
  {
    id: 1,
    date: "12 July, 2022",
    amount: "$2145.53",
    icon: invoiceIcon,
  },
  {
    id: 2,
    date: "12 July, 2022",
    amount: "$2145.53",
    icon: invoiceIcon,
  },
  {
    id: 3,
    date: "12 July, 2022",
    amount: "$2145.53",
    icon: invoiceIcon,
  },
  {
    id: 4,
    date: "12 July, 2022",
    amount: "$2145.53",
    icon: invoiceIcon,
  },
  {
    id: 5,
    date: "12 July, 2022",
    amount: "$2145.53",
    icon: invoiceIcon,
  },
  {
    id: 6,
    date: "12 July, 2022",
    amount: "$2145.53",
    icon: invoiceIcon,
  },
  {
    id: 7,
    date: "12 July, 2022",
    amount: "$2145.53",
    icon: invoiceIcon,
  },
  {
    id: 8,
    date: "12 July, 2022",
    amount: "$2145.53",
    icon: invoiceIcon,
  },
  {
    id: 9,
    date: "12 July, 2022",
    amount: "$2145.53",
    icon: invoiceIcon,
  },
  {
    id: 10,
    date: "12 July, 2022",
    amount: "$2145.53",
    icon: invoiceIcon,
  },
];

export const images = [
  {
    original: imgOne,
    thumbnail: imgOne,
  },
  {
    original: imgTwo,
    thumbnail: imgTwo,
  },
  {
    original: imgThree,
    thumbnail: imgThree,
  },
  {
    original: imgFive,
    thumbnail: imgFive,
  },
];
