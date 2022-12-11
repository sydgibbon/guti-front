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
    icon: function (style, size) {
      return <BsHouse className={style} size={size}/>;
    },
    link: "/",
    itemContent: [
      {
        name: "Assets",
        icon: function (style, size) {
          return <BsBoxSeam className={style} size={size} />;
        },
        link: "/assets",
        itemContent: [
          {
            name: "Dashboard",
            icon: function (style, size) {
              return <BsSpeedometer className={style} size={size} />;
            },
            link: "/assets/dashboard",
          },
          {
            name: "Computers",
            icon: function (style, size) {
              return <BsLaptop className={style} size={size}/>;
            },
            link: "/assets/computers",
            formLink: "/computer-form",
          },
          {
            name: "Monitors",
            icon: function (style, size) {
              return <BsDisplay className={style} size={size} />;
            },
            link: "/assets/monitors",
            formLink: "/monitor-form",
          },
          {
            name: "Software",
            icon: function (style, size) {
              return <TbApps className={style} size={size} />;
            },
            link: "/assets/software",
            formLink: "/software-form",
          },
          {
            name: "Network devices",
            icon: function (style, size) {
              return <TbSitemap className={style} size={size} />;
            },
            link: "/assets/network-devices",
            formLink: "/netdevice-form",
          },
          {
            name: "Devices",
            icon: function (style, size) {
              return <TbUsb className={style} size={size} />;
            },
            link: "/assets/devices",
            formLink: "/device-form",
          },
          {
            name: "Printers",
            icon: function (style, size) {
              return <TbPrinter className={style} size={size} />;
            },
            link: "/assets/printers",
            formLink: "/printer-form",
          },
          {
            name: "Cartridges",
            icon: function (style, size) {
              return <TbDropletFilled2 className={style} size={size} />;
            },
            link: "/assets/cartridges",
            formLink: "/cartridge-form",
          },
          {
            name: "Consumables",
            icon: function (style, size) {
              return <BsBoxSeam className={style} size={size} />;
            },
            link: "/assets/consumables",
            formLink: "/consumable-form",
          },
          {
            name: "Phones",
            icon: function (style, size) {
              return <TbPhone className={style} size={size} />;
            },
            link: "/assets/phones",
            formLink: "/phone-form",
          },
          {
            name: "Racks",
            icon: function (style, size) {
              return <TbServer className={style} size={size} />;
            },
            link: "/assets/racks",
            formLink: "/rack-form",
          },
          {
            name: "Enclosures",
            icon: function (style, size) {
              return <TbColumns className={style} size={size} />;
            },
            link: "/assets/enclosures",
            formLink: "/enclosures-form",
          },
          {
            name: "PDUs",
            icon: function (style, size) {
              return <TbPlug className={style} size={size} />;
            },
            link: "/assets/pdus",
            formLink: "/pdu-form",
          },
          {
            name: "Passive devices",
            icon: function (style, size) {
              return <TbBrowser className={style} size={size} />;
            },
            link: "/assets/passive-devices",
            formLink: "/passivedevice-form",
          },
          {
            name: "Unmanaged devices",
            icon: function (style, size) {
              return <TbQuestionMark className={style} size={size} />;
            },
            link: "/assets/unmanaged-devices",
          },
          {
            name: "Cables",
            icon: function (style, size) {
              return <TbLine className={style} size={size} />;
            },
            link: "/assets/cables",
            formLink: "/cable-form",
          },
          {
            name: "Simcards",
            icon: function (style, size) {
              return <TbFileBarcode className={style} size={size} />;
            },
            link: "/assets/simcards",
            formLink: "/simcard-form",
          },
          {
            name: "Global",
            icon: function (style, size) {
              return <TbList className={style} size={size} />;
            },
            link: "/assets/global",
          },
        ],
      },
      {
        name: "assistance",
        icon: function (style, size) {
          return <BsHeadset className={style} size={size} />;
        },
        link: "/assistance",
        itemContent: [
          {
            name: "Dashboard",
            icon: function (style, size) {
              return <BsSpeedometer className={style} size={size} />;
            },
            link: "/assistance/dashboard",
          },
          {
            name: "Tickets",
            icon: function (style, size) {
              return <BsExclamationCircle className={style} size={size} />;
            },
            link: "/assistance/tickets",
          },
          {
            name: "Create Ticket",
            icon: function (style, size) {
              return <TbPlus className={style} size={size} />;
            },
            link: "/ticket-form",
          },
          {
            name: "Problems",
            icon: function (style, size) {
              return <BsExclamationTriangle className={style} size={size} />;
            },
            link: "/assistance/problems",
          },
          {
            name: "Changes",
            icon: function (style, size) {
              return <TbCheckupList className={style} size={size} />;
            },
            link: "/assistance/changes",
          },
          {
            name: "Planing",
            icon: function (style, size) {
              return <TbCalendarTime className={style} size={size} />;
            },
            link: "/assistance/planing",
          },
          {
            name: "Statistics",
            icon: function (style, size) {
              return <BsFillBarChartFill className={style} size={size} />;
            },
            link: "/assistance/statistics",
          },
          {
            name: "Recurring Tickets",
            icon: function (style, size) {
              return <TbHistory className={style} size={size} />;
            },
            link: "/assistance/recurring-tickets",
          },
          {
            name: "Reocurring Changes",
            icon: function (style, size) {
              return <TbHistory className={style} size={size} />;
            },
            link: "/assistance/recurring-changes",
          },
        ],
      },
      {
        name: "Management",
        icon: function (style, size) {
          return <BsWallet2 className={style} size={size} />;
        },
        link: "/management",
        itemContent: [
          {
            name: "Licenses",
            icon: function (style, size) {
              return <TbLicense className={style} size={size} />;
            },
            link: "/management/Licenses",
          },
          {
            name: "Budgets",
            icon: function (style, size) {
              return <TbReportMoney className={style} size={size} />;
            },
            link: "/management/Budgets",
          },
          {
            name: "Suppliers",
            icon: function (style, size) {
              return <TbPackage className={style} size={size} />;
            },
            link: "/management/Suppliers",
          },
          {
            name: "Contacts",
            icon: function (style, size) {
              return <BsPersonFill className={style} size={size} />;
            },
            link: "/management/Contacts",
          },
          {
            name: "Contracts",
            icon: function (style, size) {
              return <TbSignature className={style} size={size} />;
            },
            link: "/management/Contracts",
          },
          {
            name: "Documents",
            icon: function (style, size) {
              return <TbFileText className={style} size={size} />;
            },
            link: "/management/Documents",
          },
          {
            name: "Lines",
            icon: function (style, size) {
              return <TbPhoneCalling className={style} size={size} />;
            },
            link: "/management/Lines",
          },
          {
            name: "Certificates",
            icon: function (style, size) {
              return <TbCertificate className={style} size={size} />;
            },
            link: "/management/Certificates",
          },
          {
            name: "Data centers",
            icon: function (style, size) {
              return <TbBuildingWarehouse className={style} size={size} />;
            },
            link: "/management/Data centers",
          },
          {
            name: "Clusters",
            icon: function (style, size) {
              return <TbVectorTriangle className={style} size={size} />;
            },
            link: "/management/Clusters",
          },
          {
            name: "Domains",
            icon: function (style, size) {
              return <TbWorld className={style} size={size} />;
            },
            link: "/management/Domains",
          },
          {
            name: "Appliances",
            icon: function (style, size) {
              return <TbMouse2 className={style} size={size} />;
            },
            link: "/management/Appliances",
          },
          {
            name: "Databases",
            icon: function (style, size) {
              return <TbDatabase className={style} size={size} />;
            },
            link: "/management/Databases",
          },
        ]
      },
      {
        name: "Tools",
        icon: function (style, size) {
          return <BsBriefcase className={style} size={size} />;
        },
        link: "/tools",
        itemContent: [
          {
            name: "Projects",
            icon: function (style, size) {
              return <TbIdBadge2 className={style} size={size} />;
            },
            link: "/tools/projects",
          },
          {
            name: "Reminders",
            icon: function (style, size) {
              return <TbWallpaper className={style} size={size} />;
            },
            link: "/tools/reminders",
          },
          {
            name: "RSS feed",
            icon: function (style, size) {
              return <TbWifi className={style} size={size} />;
            },
            link: "/tools/rss-feed",
          },
          {
            name: "Knowledge Base",
            icon: function (style, size) {
              return <TbBooks className={style} size={size} />;
            },
            link: "/tools/knowledge-base",
          },
          {
            name: "Reservations",
            icon: function (style, size) {
              return <TbId className={style} size={size} />;
            },
            link: "/tools/reservations",
          },
          {
            name: "Reports",
            icon: function (style, size) {
              return <TbFileTime className={style} size={size} />;
            },
            link: "/tools/reports",
          },
          {
            name: "Saved searches",
            icon: function (style, size) {
              return <TbChecklist className={style} size={size} />;
            },
            link: "/tools/saved-searches",
          },
        ]
      },
      {
        name: "Administration",
        icon: function (style, size) {
          return <BsShieldCheck className={style} size={size} />;
        },
        link: "/administration",
        itemContent: [
          {
            name: "Users",
            icon: function (style, size) {
              return <BsPerson className={style} size={size} />;
            },
            link: "/administration/users",
          },
          {
            name: "Groups",
            icon: function (style, size) {
              return <BsPeople className={style} size={size} />;
            },
            link: "/administration/groups",
          },
          {
            name: "Entities",
            icon: function (style, size) {
              return <BsLayers className={style} size={size} />;
            },
            link: "/administration/entities",
          },
          {
            name: "Rules",
            icon: function (style, size) {
              return <BsBook className={style} size={size} />;
            },
            link: "/administration/rules",
          },
          {
            name: "Dictionaries",
            icon: function (style, size) {
              return <BsBook className={style} size={size} />;
            },
            link: "/administration/dictionaries",
          },
          {
            name: "Profiles",
            icon: function (style, size) {
              return <BsPersonBadge className={style} size={size} />;
            },
            link: "/administration/profiles",
          },
          {
            name: "Notification Queue",
            icon: function (style, size) {
              return <TbMessageReport className={style} size={size} />;
            },
            link: "/administration/notification-queue",
          },
          {
            name: "Logs",
            icon: function (style, size) {
              return <TbNotes className={style} size={size} />;
            },
            link: "/administration/logs",
          },
          {
            name: "Inventory",
            icon: function (style, size) {
              return <TbClipboardCheck className={style} size={size} />;
            },
            link: "/administration/inventory",
          },
        ],
      },
      {
        name: "Setup",
        icon: function (style, size) {
          return <BsGear className={style} size={size} />;
        },
        link: "/setup",
        itemContent: [
          {
            name: "Dropdowns",
            icon: function (style, size) {
              return <BsListNested className={style} size={size} />;
            },
            link: "/setup/Dropdowns",
          },
          {
            name: "Components",
            icon: function (style, size) {
              return <TbComponents className={style} size={size} />;
            },
            link: "/setup/Components",
          },
          {
            name: "Notifications",
            icon: function (style, size) {
              return <TbBellRinging className={style} size={size} />;
            },
            link: "/setup/Notifications",
          },
          {
            name: "Service levels",
            icon: function (style, size) {
              return <BsUiChecks className={style} size={size} />;
            },
            link: "/setup/service-levels",
          },
          {
            name: "General",
            icon: function (style, size) {
              return <TbAdjustments className={style} size={size} />;
            },
            link: "/setup/general",
          },
          {
            name: "Fields Uniqueness",
            icon: function (style, size) {
              return <BsUiChecksGrid className={style} size={size} />;
            },
            link: "/setup/fields-uniqueness",
          },
          {
            name: "Automatic actions",
            icon: function (style, size) {
              return <BsFillPlayBtnFill className={style} size={size} />;
            },
            link: "/setup/automatic-actions",
          },
          {
            name: "Authentication",
            icon: function (style, size) {
              return <BsPersonCheckFill className={style} size={size} />;
            },
            link: "/setup/authentication",
          },
          {
            name: "Receivers",
            icon: function (style, size) {
              return <BsFillInboxFill className={style} size={size} />;
            },
            link: "/setup/receivers",
          },
          {
            name: "External links",
            icon: function (style, size) {
              return <BsLink45Deg className={style} size={size} />;
            },
            link: "/setup/external-links",
          },
          {
            name: "Plugins",
            icon: function (style, size) {
              return <TbPuzzle className={style} size={size} />;
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
    icon: function (style, size) {
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
    icon: function (style, size) {
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
    icon: function (style, size) {
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
    icon: function (style, size) {
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
    icon: function (style, size) {
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
    icon: function (style, size) {
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
    icon: function (style, size) {
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
    icon: function (style, size) {
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
    icon: function (style, size) {
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
    icon: function (style, size) {
      return <TbPhone className="stroke-1 w-6 h-6" />;
    },
  },
];
export const assetsGridGraphs = [];
