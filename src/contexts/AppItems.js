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
  // Management
  BsPersonFill,
  // Setup
  BsListNested,
  BsUiChecks,
  BsUiChecksGrid,
  BsFillPlayBtnFill,
  BsPersonCheckFill,
  BsFillInboxFill,
  BsLink45Deg,
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
  // Management
  TbLicense,
  TbReportMoney,
  TbPackage,
  TbSignature,
  TbFileText,
  TbPhoneCalling,
  TbCertificate,
  TbBuildingWarehouse,
  TbVectorTriangle,
  TbWorld,
  TbMouse2,
  TbDatabase,
  // Tools
  TbIdBadge2,
  TbWallpaper,
  TbWifi,
  TbBooks,
  TbId,
  TbFileTime,
  TbChecklist,
  // Setup
  TbComponents,
  TbBellRinging,
  TbAdjustments,
  TbPuzzle,
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
            formLink: "/assets/computers/form",
          },
          {
            name: "Monitors",
            icon: function () {
              return <BsDisplay className="block my-auto" />;
            },
            link: "/assets/monitors",
            formLink: "/assets/monitors/form",
          },
          {
            name: "Software",
            icon: function () {
              return <TbApps className="block my-auto" />;
            },
            link: "/assets/software",
            formLink: "/assets/software/form",
          },
          {
            name: "Network devices",
            icon: function () {
              return <TbSitemap className="block my-auto" />;
            },
            link: "/assets/network-devices",
            formLink: "/assets/network-devices/form",
          },
          {
            name: "Devices",
            icon: function () {
              return <TbUsb className="block my-auto" />;
            },
            link: "/assets/devices",
            formLink: "/assets/devices/form",
          },
          {
            name: "Printers",
            icon: function () {
              return <TbPrinter className="block my-auto" />;
            },
            link: "/assets/printers",
            formLink: "/assets/printers/form",
          },
          {
            name: "Cartridges",
            icon: function () {
              return <TbDropletFilled2 className="block my-auto" />;
            },
            link: "/assets/cartridges",
            formLink: "/assets/cartridges/form",
          },
          {
            name: "Consumables",
            icon: function () {
              return <BsBoxSeam className="block my-auto" />;
            },
            link: "/assets/consumables",
            formLink: "/assets/consumables/form",
          },
          {
            name: "Phones",
            icon: function () {
              return <TbPhone className="block my-auto" />;
            },
            link: "/assets/phones",
            formLink: "/assets/phones/form",
          },
          {
            name: "Racks",
            icon: function () {
              return <TbServer className="block my-auto" />;
            },
            link: "/assets/racks",
            formLink: "/assets/racks/form",
          },
          {
            name: "Enclosures",
            icon: function () {
              return <TbColumns className="block my-auto" />;
            },
            link: "/assets/enclosures",
            formLink: "/assets/enclosures/form",
          },
          {
            name: "PDUs",
            icon: function () {
              return <TbPlug className="block my-auto" />;
            },
            link: "/assets/pdus",
            formLink: "/assets/pdus/form",
          },
          {
            name: "Passive devices",
            icon: function () {
              return <TbBrowser className="block my-auto" />;
            },
            link: "/assets/passive-devices",
            formLink: "/assets/passive-devices/form",
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
            formLink: "/assets/cables/form",
          },
          {
            name: "Simcards",
            icon: function () {
              return <TbFileBarcode className="block my-auto" />;
            },
            link: "/assets/simcards",
            formLink: "/assets/simcards/form",
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
        name: "assistance",
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
        itemContent: [
          {
            name: "Licenses",
            icon: function () {
              return <TbLicense className="block my-auto" />;
            },
            link: "/management/Licenses",
          },
          {
            name: "Budgets",
            icon: function () {
              return <TbReportMoney className="block my-auto" />;
            },
            link: "/management/Budgets",
          },
          {
            name: "Suppliers",
            icon: function () {
              return <TbPackage className="block my-auto" />;
            },
            link: "/management/Suppliers",
          },
          {
            name: "Contacts",
            icon: function () {
              return <BsPersonFill className="block my-auto" />;
            },
            link: "/management/Contacts",
          },
          {
            name: "Contracts",
            icon: function () {
              return <TbSignature className="block my-auto" />;
            },
            link: "/management/Contracts",
          },
          {
            name: "Documents",
            icon: function () {
              return <TbFileText className="block my-auto" />;
            },
            link: "/management/Documents",
          },
          {
            name: "Lines",
            icon: function () {
              return <TbPhoneCalling className="block my-auto" />;
            },
            link: "/management/Lines",
          },
          {
            name: "Certificates",
            icon: function () {
              return <TbCertificate className="block my-auto" />;
            },
            link: "/management/Certificates",
          },
          {
            name: "Data centers",
            icon: function () {
              return <TbBuildingWarehouse className="block my-auto" />;
            },
            link: "/management/Data centers",
          },
          {
            name: "Clusters",
            icon: function () {
              return <TbVectorTriangle className="block my-auto" />;
            },
            link: "/management/Clusters",
          },
          {
            name: "Domains",
            icon: function () {
              return <TbWorld className="block my-auto" />;
            },
            link: "/management/Domains",
          },
          {
            name: "Appliances",
            icon: function () {
              return <TbMouse2 className="block my-auto" />;
            },
            link: "/management/Appliances",
          },
          {
            name: "Databases",
            icon: function () {
              return <TbDatabase className="block my-auto" />;
            },
            link: "/management/Databases",
          },
        ]
      },
      {
        name: "Tools",
        icon: function () {
          return <BsBriefcase className="block my-auto" />;
        },
        link: "/tools",
        itemContent: [
          {
            name: "Projects",
            icon: function () {
              return <TbIdBadge2 className="block my-auto" />;
            },
            link: "/tools/projects",
          },
          {
            name: "Reminders",
            icon: function () {
              return <TbWallpaper className="block my-auto" />;
            },
            link: "/tools/reminders",
          },
          {
            name: "RSS feed",
            icon: function () {
              return <TbWifi className="block my-auto" />;
            },
            link: "/tools/rss-feed",
          },
          {
            name: "Knowledge Base",
            icon: function () {
              return <TbBooks className="block my-auto" />;
            },
            link: "/tools/knowledge-base",
          },
          {
            name: "Reservations",
            icon: function () {
              return <TbId className="block my-auto" />;
            },
            link: "/tools/reservations",
          },
          {
            name: "Reports",
            icon: function () {
              return <TbFileTime className="block my-auto" />;
            },
            link: "/tools/reports",
          },
          {
            name: "Saved searches",
            icon: function () {
              return <TbChecklist className="block my-auto" />;
            },
            link: "/tools/saved-searches",
          },
        ]
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
        itemContent: [
          {
            name: "Dropdowns",
            icon: function () {
              return <BsListNested className="block my-auto" />;
            },
            link: "/setup/Dropdowns",
          },
          {
            name: "Components",
            icon: function () {
              return <TbComponents className="block my-auto" />;
            },
            link: "/setup/Components",
          },
          {
            name: "Notifications",
            icon: function () {
              return <TbBellRinging className="block my-auto" />;
            },
            link: "/setup/Notifications",
          },
          {
            name: "Service levels",
            icon: function () {
              return <BsUiChecks className="block my-auto" />;
            },
            link: "/setup/service-levels",
          },
          {
            name: "General",
            icon: function () {
              return <TbAdjustments className="block my-auto" />;
            },
            link: "/setup/general",
          },
          {
            name: "Fields Uniqueness",
            icon: function () {
              return <BsUiChecksGrid className="block my-auto" />;
            },
            link: "/setup/fields-uniqueness",
          },
          {
            name: "Automatic actions",
            icon: function () {
              return <BsFillPlayBtnFill className="block my-auto" />;
            },
            link: "/setup/automatic-actions",
          },
          {
            name: "Authentication",
            icon: function () {
              return <BsPersonCheckFill className="block my-auto" />;
            },
            link: "/setup/authentication",
          },
          {
            name: "Receivers",
            icon: function () {
              return <BsFillInboxFill className="block my-auto" />;
            },
            link: "/setup/receivers",
          },
          {
            name: "External links",
            icon: function () {
              return <BsLink45Deg className="block my-auto" />;
            },
            link: "/setup/external-links",
          },
          {
            name: "Plugins",
            icon: function () {
              return <TbPuzzle className="block my-auto" />;
            },
            link: "/setup/plugins",
          },
        ]
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
