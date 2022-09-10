import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Icon } from "@iconify/react";
import { FiClipboard } from "react-icons/fi";
import FlipToFrontIcon from "@mui/icons-material/FlipToFront";

export const SidebarItems = [
  {
    key: 1,
    text: "Homepage",
    link: "/customer/homepage",
    icon: <Icon icon="bx:home-alt-2" width="20" height="20" />,
    nestedItem: null,
  },
  {
    key: 2,
    text: "Products",
    icon: <Icon icon="gridicons:product" width="20" height="20" />,
    isOpen: <ExpandMore />,
    isClose: <ExpandLess />,
    nestedItem: [
      {
        key: 100,
        text: "Products",
        link: "/customer/products",
        icon: <FiClipboard fontSize="20px" />,
        isOpen: false,
        nestedItem: null,
      },
      {
        key: 101,
        text: "Import List",
        link: "/customer/products/import-list",
        icon: <FiClipboard fontSize="20px" />,
        isOpen: false,
        nestedItem: null,
      },
      {
        key: 103,
        text: "Live Products",
        link: "/customer/products/live-products",
        icon: <FiClipboard fontSize="20px" />,
        isOpen: false,
        nestedItem: null,
      },
    ],
  },
  {
    key: 3,
    text: "Orders",
    icon: <FiClipboard fontSize="20px" />,
    isOpen: <ExpandMore />,
    isClose: <ExpandLess />,
    nestedItem: [
      {
        key: 100,
        text: "Orders",
        link: "/customer/orders",
        icon: <FiClipboard fontSize="20px" />,
        isOpen: false,
        indentifier: "nestedItem",
        nestedItem: null,
      },
      {
        key: 101,
        text: "Dispute List",
        link: "/customer/orders/dispute-list",
        icon: <FiClipboard fontSize="20px" />,
        isOpen: false,
        nestedItem: null,
      },
      {
        key: 102,
        text: "Order Tracking",
        link: "/customer/orders/order-tracking",
        icon: <FiClipboard fontSize="20px" />,
        isOpen: false,
        nestedItem: null,
      },
    ],
  },
  {
    key: 4,
    text: "Payments",
    link: "/customer/payments",
    icon: <Icon icon="fluent:payment-24-regular" width="20" height="20" />,
    nestedItem: null,
  },
  {
    key: 5,
    text: "Notifications",
    link: "/customer/notifications",
    icon: <Icon icon="carbon:notification" width="20" height="20" />,
    nestedItem: null,
  },
  {
    key: 6,
    text: "Extra",
    icon: <FlipToFrontIcon width="20px" height="20px" />,
    isOpen: <ExpandMore />,
    isClose: <ExpandLess />,
    nestedItem: [
      {
        key: 100,
        text: "Branding",
        link: "/customer/products/branding",
        icon: <FiClipboard fontSize="20px" />,
        isOpen: false,
        nestedItem: null,
      },
      {
        key: 101,
        text: "Bundle",
        link: "/customer/products/bundle",
        icon: <FiClipboard fontSize="20px" />,
        isOpen: false,
        nestedItem: null,
      },
      {
        key: 102,
        text: "Bulk",
        link: "/customer/bulk",
        icon: <Icon icon="akar-icons:shipping-box-v1" width="20" height="20" />,
        nestedItem: null,
      },
      {
        key: 103,
        text: "Extra storage",
        link: "/customer/storage",
        icon: <FlipToFrontIcon width="20px" height="20px" />,
        nestedItem: null,
      },
    ],
  },
];

// Admin Routing
export const AdminSidebarItems = [
  {
    key: 1,
    text: "Homepage",
    link: "/admin/homepage",
    icon: <Icon icon="bx:home-alt-2" width="20" height="20" />,
    nestedItem: null,
  },
  {
    key: 2,
    text: "Sourcing List",
    icon: <Icon icon="gridicons:product" width="20" height="20" />,
    isOpen: <ExpandMore />,
    isClose: <ExpandLess />,
    nestedItem: [
      {
        key: 100,
        text: "Sourcing List",
        link: "/admin/sourcing-list",
        icon: <FiClipboard fontSize="20px" />,
        isOpen: false,
        nestedItem: null,
      },
      {
        key: 101,
        text: "Requotation",
        link: "/admin/sourcing-list/requotation",
        icon: <FiClipboard fontSize="20px" />,
        isOpen: false,
        nestedItem: null,
      },
      {
        key: 102,
        text: "New Sourcing Request",
        link: "/admin/sourcing-list/new-sourcing-request",
        icon: <FiClipboard fontSize="20px" />,
        isOpen: false,
        nestedItem: null,
      },
    ],
  },
  {
    key: 3,
    text: "Orders",
    icon: <FiClipboard fontSize="20px" />,
    isOpen: <ExpandMore />,
    isClose: <ExpandLess />,
    nestedItem: [
      {
        key: 100,
        text: "Orders",
        link: "/admin/orders",
        icon: <FiClipboard fontSize="20px" />,
        isOpen: false,
        nestedItem: null,
      },
      {
        key: 101,
        text: "Dispute List",
        link: "/admin/orders/dispute-list",
        icon: <FiClipboard fontSize="20px" />,
        isOpen: false,
        nestedItem: null,
      },
    ],
  },
  {
    key: 4,
    text: "Bulk Purchase",
    link: "/admin/bulk-purchase",
    icon: <Icon icon="akar-icons:shipping-box-v1" width="20" height="20" />,
    nestedItem: null,
  },
  {
    key: 5,
    text: "Payments",
    link: "/admin/payment",
    icon: <Icon icon="fluent:payment-24-regular" width="20" height="20" />,
    nestedItem: null,
  },
  {
    key: 5,
    text: "Notification",
    link: "/admin/notification",
    icon: <Icon icon="carbon:notification" width="20" height="20" />,
    nestedItem: null,
  },
  {
    key: 6,
    text: "Affiliate Programs",
    link: "/admin/affiliate-program",
    icon: <Icon icon="carbon:notification" width="20" height="20" />,
    nestedItem: null,
  },
];