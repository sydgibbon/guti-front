import {
  BsHouse,
  BsBoxSeam,
  BsLaptop,
  BsDisplay,
  BsHeadset,
  BsWallet2,
  BsBriefcase,
  BsShieldCheck,
  BsGear,
  BsSpeedometer,
  BsExclamationCircle,
  BsExclamationTriangle,
  BsFillBarChartFill,
  BsPerson,
  BsPeople,
  BsLayers,
  BsBook,
  BsPersonBadge,
} from "react-icons/bs";
import {
  TbApps,
  TbBrowser,
  TbColumns,
  TbDeviceDesktop,
  TbDeviceLaptop,
  TbDropletFilled2,
  TbFileBarcode,
  TbKey,
  TbLine,
  TbList,
  TbPhone,
  TbPlug,
  TbPrinter,
  TbQuestionMark,
  TbServer,
  TbSitemap,
  TbUsb,
  TbPlus,
  TbCheckupList,
  TbCalendarTime,
  TbHistory,
  TbNotes,
  TbMessageReport,
  TbClipboardCheck,
} from "react-icons/tb";

export const appItems = [
  {
    name: "Home",
    icon: function () {
      return <BsHouse />;
    },
    link: "/",
    itemContent: [
      {
        name: "Assets",
        icon: function () {
          return <BsBoxSeam className="block my-auto" />;
        },
        link: "/assets",
        itemContent: [
          {
            name: "Dashboard",
            icon: function () {
              return <BsSpeedometer className="block my-auto" />;
            },
            link: "/assets/dashboard",
          },
          {
            name: "Computers",
            icon: function () {
              return <BsLaptop className="block my-auto" />;
            },
            link: "/assets/computers",
          },
          {
            name: "Monitors",
            icon: function () {
              return <BsDisplay className="block my-auto" />;
            },
            link: "/assets/monitors",
          },
          {
            name: "Software",
            icon: function () {
              return <TbApps className="block my-auto" />;
            },
            link: "/assets/software",
          },
          {
            name: "Network devices",
            icon: function () {
              return <TbSitemap className="block my-auto" />;
            },
            link: "/assets/network-devices",
          },
          {
            name: "Devices",
            icon: function () {
              return <TbUsb className="block my-auto" />;
            },
            link: "/assets/devices",
          },
          {
            name: "Printers",
            icon: function () {
              return <TbPrinter className="block my-auto" />;
            },
            link: "/assets/printers",
          },
          {
            name: "Cartridges",
            icon: function () {
              return <TbDropletFilled2 className="block my-auto" />;
            },
            link: "/assets/cartridges",
          },
          {
            name: "Consumables",
            icon: function () {
              return <BsBoxSeam className="block my-auto" />;
            },
            link: "/assets/consumables",
          },
          {
            name: "Phones",
            icon: function () {
              return <TbPhone className="block my-auto" />;
            },
            link: "/assets/phones",
          },
          {
            name: "Racks",
            icon: function () {
              return <TbServer className="block my-auto" />;
            },
            link: "/assets/racks",
          },
          {
            name: "Enclosures",
            icon: function () {
              return <TbColumns className="block my-auto" />;
            },
            link: "/assets/enclosures",
          },
          {
            name: "PDUs",
            icon: function () {
              return <TbPlug className="block my-auto" />;
            },
            link: "/assets/pdus",
          },
          {
            name: "Passive devices",
            icon: function () {
              return <TbBrowser className="block my-auto" />;
            },
            link: "/assets/passive-devices",
          },
          {
            name: "Unmanaged devices",
            icon: function () {
              return <TbQuestionMark className="block my-auto" />;
            },
            link: "/assets/unmanaged-devices",
          },
          {
            name: "Cables",
            icon: function () {
              return <TbLine className="block my-auto" />;
            },
            link: "/assets/cables",
          },
          {
            name: "Simcards",
            icon: function () {
              return <TbFileBarcode className="block my-auto" />;
            },
            link: "/assets/simcards",
          },
          {
            name: "Global",
            icon: function () {
              return <TbList className="block my-auto" />;
            },
            link: "/assets/global",
          },
        ],
      },
      {
        name: "Assistance",
        icon: function () {
          return <BsHeadset className="block my-auto" />;
        },
        link: "/assistance",
        itemContent: [
          {
            name: "Dashboard",
            icon: function () {
              return <BsSpeedometer className="block my-auto" />;
            },
            link: "/assistance/dashboard",
          },
          {
            name: "Tickets",
            icon: function () {
              return <BsExclamationCircle className="block my-auto" />;
            },
            link: "/assistance/tickets",
          },
          {
            name: "Create Ticket",
            icon: function () {
              return <TbPlus className="block my-auto" />;
            },
            link: "/ticket-form",
          },
          {
            name: "Problems",
            icon: function () {
              return <BsExclamationTriangle className="block my-auto" />;
            },
            link: "/assistance/problems",
          },
          {
            name: "Changes",
            icon: function () {
              return <TbCheckupList className="block my-auto" />;
            },
            link: "/assistance/changes",
          },
          {
            name: "Planing",
            icon: function () {
              return <TbCalendarTime className="block my-auto" />;
            },
            link: "/assistance/planing",
          },
          {
            name: "Statistics",
            icon: function () {
              return <BsFillBarChartFill className="block my-auto" />;
            },
            link: "/assistance/statistics",
          },
          {
            name: "Recurring Tickets",
            icon: function () {
              return <TbHistory className="block my-auto" />;
            },
            link: "/assistance/recurring-tickets",
          },
          {
            name: "Reocurring Changes",
            icon: function () {
              return <TbHistory className="block my-auto" />;
            },
            link: "/assistance/recurring-changes",
          },
        ],
      },
      {
        name: "Management",
        icon: function () {
          return <BsWallet2 className="block my-auto" />;
        },
        link: "/management",
      },
      {
        name: "Tools",
        icon: function () {
          return <BsBriefcase className="block my-auto" />;
        },
        link: "/tools",
      },
      {
        name: "Administration",
        icon: function () {
          return <BsShieldCheck className="block my-auto" />;
        },
        link: "/administration",
        itemContent: [
          {
            name: "Users",
            icon: function () {
              return <BsPerson className="block my-auto" />;
            },
            link: "/administration/users",
          },
          {
            name: "Groups",
            icon: function () {
              return <BsPeople className="block my-auto" />;
            },
            link: "/administration/groups",
          },
          {
            name: "Entities",
            icon: function () {
              return <BsLayers className="block my-auto" />;
            },
            link: "/administration/entities",
          },
          {
            name: "Rules",
            icon: function () {
              return <BsBook className="block my-auto" />;
            },
            link: "/administration/rules",
          },
          {
            name: "Dictionaries",
            icon: function () {
              return <BsBook className="block my-auto" />;
            },
            link: "/administration/dictionaries",
          },
          {
            name: "Profiles",
            icon: function () {
              return <BsPersonBadge className="block my-auto" />;
            },
            link: "/administration/profiles",
          },
          {
            name: "Notification Queue",
            icon: function () {
              return <TbMessageReport className="block my-auto" />;
            },
            link: "/administration/notification-queue",
          },
          {
            name: "Logs",
            icon: function () {
              return <TbNotes className="block my-auto" />;
            },
            link: "/administration/logs",
          },
          {
            name: "Inventory",
            icon: function () {
              return <TbClipboardCheck className="block my-auto" />;
            },
            link: "/administration/inventory",
          },
        ],
      },
      {
        name: "Setup",
        icon: function () {
          return <BsGear className="block my-auto" />;
        },
        link: "/setup",
      },
    ],
  },
];

export const assetsGridItems = [
  {
    name: "Computers",
    bgColor: "#F3D0D0",
    textColor: "#C53232",
    hoverBgColor: "#e39393",
    hoverBorderColor: "#D45656",
    asset: "computers",
    path: "/assets/computers",
    icon: function () {
      return <TbDeviceLaptop className="stroke-1 w-6 h-6" />;
    },
  },
  {
    name: "Software",
    bgColor: "#d1f1a8",
    textColor: "#70b11c",
    hoverBgColor: "#aee666",
    hoverBorderColor: "#8bdc24",
    asset: "softwares",
    path: "/assets/software",
    icon: function () {
      return <TbApps className="stroke-1 w-6 h-6" />;
    },
  },
  {
    name: "Network devices",
    bgColor: "#c8dae4",
    textColor: "#4a7b96",
    hoverBgColor: "#95b7cb",
    hoverBorderColor: "#6195b2",
    asset: "networkequipments",
    path: "/assets/network-devices",
    icon: function () {
      return <TbSitemap className="stroke-1 w-6 h-6" />;
    },
  },
  {
    name: "Racks",
    bgColor: "#f7d79a",
    textColor: "#b77d0e",
    hoverBgColor: "#f1bb53",
    hoverBorderColor: "#e69d12",
    asset: "racks",
    path: "/assets/racks",
    icon: function () {
      return <TbServer className="stroke-1 w-6 h-6" />;
    },
  },
  {
    name: "Enclosures",
    bgColor: "#d7e8e4",
    textColor: "#599a8b",
    hoverBgColor: "#a6ccc3",
    hoverBorderColor: "#76b0a2",
    asset: "enclosures",
    path: "/assets/enclosures",
    icon: function () {
      return <TbColumns className="stroke-1 w-6 h-6" />;
    },
  },
  {
    name: "Monitors",
    bgColor: "#dc6f6f",
    textColor: "#661919",
    hoverBgColor: "#cd3232",
    hoverBorderColor: "#8f2323",
    asset: "monitors",
    path: "/assets/monitors",
    icon: function () {
      return <TbDeviceDesktop className="stroke-1 w-6 h-6" />;
    },
  },
  {
    name: "Licenses",
    bgColor: "#9bc06b",
    textColor: "#32431c",
    hoverBgColor: "#759c42",
    hoverBorderColor: "#4d662c",
    asset: "softwarelicenses",
    path: "/assets/dashboard",
    icon: function () {
      return <TbKey className="stroke-1 w-6 h-6" />;
    },
  },
  {
    name: "Printers",
    bgColor: "#5da8d6",
    textColor: "#153b52",
    hoverBgColor: "#2f84b8",
    hoverBorderColor: "#1f587b",
    asset: "printers",
    path: "/assets/printers",
    icon: function () {
      return <TbPrinter className="stroke-1 w-6 h-6" />;
    },
  },
  {
    name: "PDUs",
    bgColor: "#ffb62f",
    textColor: "#624000",
    hoverBgColor: "#e29200",
    hoverBorderColor: "#956100",
    asset: "pdus",
    path: "/assets/pdus",
    icon: function () {
      return <TbPlug className="stroke-1 w-6 h-6" />;
    },
  },
  {
    name: "Phones",
    bgColor: "#a0cec2",
    textColor: "#376b5d",
    hoverBgColor: "#6eb4a2",
    hoverBorderColor: "#488d7b",
    asset: "phones",
    path: "/assets/phones",
    icon: function () {
      return <TbPhone className="stroke-1 w-6 h-6" />;
    },
  },
];
export const assetsGridGraphs = [];
