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
import { GridItemType, Item } from "../../domain/models/Others";





export const appItems: Item[] = [
  {
    name: "Home",
    icon: (style: string, size: string) => (
      <BsHouse className={style} size={size} />
    ),
    link: "/",
    itemContent: [
      {
        name: "Assets",
        icon: (style: string, size: string) => {
          return <BsBoxSeam className={style} size={size} />;
        },
        link: "/assets",
        itemContent: [
          {
            name: "Dashboard",
            icon: (style: string, size: string) => {
              return <BsSpeedometer className={style} size={size} />;
            },
            link: "/assets/dashboard",
          },
          {
            name: "Computers",
            icon: (style: string, size: string) => {
              return <BsLaptop className={style} size={size} />;
            },
            link: "/assets/computers",
            formLink: "/assets/forms/computers",
          },
          {
            name: "Monitors",
            icon: (style: string, size: string) => {
              return <BsDisplay className={style} size={size} />;
            },
            link: "/assets/monitors",
            formLink: "/assets/forms/monitors",
          },
          {
            name: "Software",
            icon: (style: string, size: string) => {
              return <TbApps className={style} size={size} />;
            },
            link: "/assets/software",
            formLink: "/assets/forms/software",
          },
          {
            name: "Network devices",
            icon: (style: string, size: string) => {
              return <TbSitemap className={style} size={size} />;
            },
            link: "/assets/network-devices",
            formLink: "/assets/forms/network-devices",
          },
          {
            name: "Devices",
            icon: (style: string, size: string) => {
              return <TbUsb className={style} size={size} />;
            },
            link: "/assets/devices",
            formLink: "/assets/forms/devices",
          },
          {
            name: "Printers",
            icon: (style: string, size: string) => {
              return <TbPrinter className={style} size={size} />;
            },
            link: "/assets/printers",
            formLink: "/assets/forms/printers",
          },
          {
            name: "Cartridges",
            icon: (style: string, size: string) => {
              return <TbDropletFilled2 className={style} size={size} />;
            },
            link: "/assets/cartridges",
            formLink: "/assets/forms/cartridges",
          },
          {
            name: "Consumables",
            icon: (style: string, size: string) => {
              return <BsBoxSeam className={style} size={size} />;
            },
            link: "/assets/consumables",
            formLink: "/assets/forms/consumables",
          },
          {
            name: "Phones",
            icon: (style: string, size: string) => {
              return <TbPhone className={style} size={size} />;
            },
            link: "/assets/phones",
            formLink: "/assets/forms/phones",
          },
          {
            name: "Racks",
            icon: (style: string, size: string) => {
              return <TbServer className={style} size={size} />;
            },
            link: "/assets/racks",
            formLink: "/assets/forms/racks",
          },
          {
            name: "Enclosures",
            icon: (style: string, size: string) => {
              return <TbColumns className={style} size={size} />;
            },
            link: "/assets/enclosures",
            formLink: "/assets/forms/enclosures",
          },
          {
            name: "PDUs",
            icon: (style: string, size: string) => {
              return <TbPlug className={style} size={size} />;
            },
            link: "/assets/pdus",
            formLink: "/assets/forms/pdus",
          },
          {
            name: "Passive devices",
            icon: (style: string, size: string) => {
              return <TbBrowser className={style} size={size} />;
            },
            link: "/assets/passive-devices",
            formLink: "/assets/forms/passive-devices",
          },
          {
            name: "Unmanaged devices",
            icon: (style: string, size: string) => {
              return <TbQuestionMark className={style} size={size} />;
            },
            link: "/assets/unmanaged-devices",
          },
          {
            name: "Cables",
            icon: (style: string, size: string) => {
              return <TbLine className={style} size={size} />;
            },
            link: "/assets/cables",
            formLink: "/assets/forms/cables",
          },
          {
            name: "Simcards",
            icon: (style: string, size: string) => {
              return <TbFileBarcode className={style} size={size} />;
            },
            link: "/assets/simcards",
            formLink: "/assets/forms/simcards",
          },
          {
            name: "Global",
            icon: (style: string, size: string) => {
              return <TbList className={style} size={size} />;
            },
            link: "/assets/global",
          },
        ],
      },
      {
        name: "Assistance",
        icon: (style: string, size: string) => {
          return <BsHeadset className={style} size={size} />;
        },
        link: "/assistance",
        itemContent: [
          {
            name: "Dashboard",
            icon: (style: string, size: string) => {
              return <BsSpeedometer className={style} size={size} />;
            },
            link: "/assistance/dashboard",
          },
          {
            name: "Tickets",
            icon: (style: string, size: string) => {
              return <BsExclamationCircle className={style} size={size} />;
            },
            link: "/assistance/tickets",
          },
          {
            name: "Create Ticket",
            icon: (style: string, size: string) => {
              return <TbPlus className={style} size={size} />;
            },
            link: "/ticket-form",
          },
          {
            name: "Problems",
            icon: (style: string, size: string) => {
              return <BsExclamationTriangle className={style} size={size} />;
            },
            link: "/assistance/problems",
          },
          {
            name: "Changes",
            icon: (style: string, size: string) => {
              return <TbCheckupList className={style} size={size} />;
            },
            link: "/assistance/changes",
          },
          {
            name: "Planing",
            icon: (style: string, size: string) => {
              return <TbCalendarTime className={style} size={size} />;
            },
            link: "/assistance/planing",
          },
          {
            name: "Statistics",
            icon: (style: string, size: string) => {
              return <BsFillBarChartFill className={style} size={size} />;
            },
            link: "/assistance/statistics",
          },
          {
            name: "Recurring Tickets",
            icon: (style: string, size: string) => {
              return <TbHistory className={style} size={size} />;
            },
            link: "/assistance/recurring-tickets",
          },
          {
            name: "Reocurring Changes",
            icon: (style: string, size: string) => {
              return <TbHistory className={style} size={size} />;
            },
            link: "/assistance/recurring-changes",
          },
        ],
      },
      {
        name: "Management",
        icon: (style: string, size: string) => {
          return <BsWallet2 className={style} size={size} />;
        },
        link: "/management",
        itemContent: [
          {
            name: "Licenses",
            icon: (style: string, size: string) => {
              return <TbLicense className={style} size={size} />;
            },
            link: "/management/Licenses",
          },
          {
            name: "Budgets",
            icon: (style: string, size: string) => {
              return <TbReportMoney className={style} size={size} />;
            },
            link: "/management/Budgets",
          },
          {
            name: "Suppliers",
            icon: (style: string, size: string) => {
              return <TbPackage className={style} size={size} />;
            },
            link: "/management/Suppliers",
          },
          {
            name: "Contacts",
            icon: (style: string, size: string) => {
              return <BsPersonFill className={style} size={size} />;
            },
            link: "/management/Contacts",
          },
          {
            name: "Contracts",
            icon: (style: string, size: string) => {
              return <TbSignature className={style} size={size} />;
            },
            link: "/management/Contracts",
          },
          {
            name: "Documents",
            icon: (style: string, size: string) => {
              return <TbFileText className={style} size={size} />;
            },
            link: "/management/Documents",
          },
          {
            name: "Lines",
            icon: (style: string, size: string) => {
              return <TbPhoneCalling className={style} size={size} />;
            },
            link: "/management/Lines",
          },
          {
            name: "Certificates",
            icon: (style: string, size: string) => {
              return <TbCertificate className={style} size={size} />;
            },
            link: "/management/Certificates",
          },
          {
            name: "Data centers",
            icon: (style: string, size: string) => {
              return <TbBuildingWarehouse className={style} size={size} />;
            },
            link: "/management/Data centers",
          },
          {
            name: "Clusters",
            icon: (style: string, size: string) => {
              return <TbVectorTriangle className={style} size={size} />;
            },
            link: "/management/Clusters",
          },
          {
            name: "Domains",
            icon: (style: string, size: string) => {
              return <TbWorld className={style} size={size} />;
            },
            link: "/management/Domains",
          },
          {
            name: "Appliances",
            icon: (style: string, size: string) => {
              return <TbMouse2 className={style} size={size} />;
            },
            link: "/management/Appliances",
          },
          {
            name: "Databases",
            icon: (style: string, size: string) => {
              return <TbDatabase className={style} size={size} />;
            },
            link: "/management/Databases",
          },
        ],
      },
      {
        name: "Tools",
        icon: (style: string, size: string) => {
          return <BsBriefcase className={style} size={size} />;
        },
        link: "/tools",
        itemContent: [
          {
            name: "Projects",
            icon: (style: string, size: string) => {
              return <TbIdBadge2 className={style} size={size} />;
            },
            link: "/tools/projects",
          },
          {
            name: "Reminders",
            icon: (style: string, size: string) => {
              return <TbWallpaper className={style} size={size} />;
            },
            link: "/tools/reminders",
          },
          {
            name: "RSS feed",
            icon: (style: string, size: string) => {
              return <TbWifi className={style} size={size} />;
            },
            link: "/tools/rss-feed",
          },
          {
            name: "Knowledge Base",
            icon: (style: string, size: string) => {
              return <TbBooks className={style} size={size} />;
            },
            link: "/tools/knowledge-base",
          },
          {
            name: "Reservations",
            icon: (style: string, size: string) => {
              return <TbId className={style} size={size} />;
            },
            link: "/tools/reservations",
          },
          {
            name: "Reports",
            icon: (style: string, size: string) => {
              return <TbFileTime className={style} size={size} />;
            },
            link: "/tools/reports",
          },
          {
            name: "Saved searches",
            icon: (style: string, size: string) => {
              return <TbChecklist className={style} size={size} />;
            },
            link: "/tools/saved-searches",
          },
        ],
      },
      {
        name: "Administration",
        icon: (style: string, size: string) => {
          return <BsShieldCheck className={style} size={size} />;
        },
        link: "/administration",
        itemContent: [
          {
            name: "Users",
            icon: (style: string, size: string) => {
              return <BsPerson className={style} size={size} />;
            },
            link: "/administration/users",
          },
          {
            name: "Groups",
            icon: (style: string, size: string) => {
              return <BsPeople className={style} size={size} />;
            },
            link: "/administration/groups",
          },
          {
            name: "Entities",
            icon: (style: string, size: string) => {
              return <BsLayers className={style} size={size} />;
            },
            link: "/administration/entities",
          },
          {
            name: "Rules",
            icon: (style: string, size: string) => {
              return <BsBook className={style} size={size} />;
            },
            link: "/administration/rules",
          },
          {
            name: "Dictionaries",
            icon: (style: string, size: string) => {
              return <BsBook className={style} size={size} />;
            },
            link: "/administration/dictionaries",
          },
          {
            name: "Profiles",
            icon: (style: string, size: string) => {
              return <BsPersonBadge className={style} size={size} />;
            },
            link: "/administration/profiles",
          },
          {
            name: "Notification Queue",
            icon: (style: string, size: string) => {
              return <TbMessageReport className={style} size={size} />;
            },
            link: "/administration/notification-queue",
          },
          {
            name: "Logs",
            icon: (style: string, size: string) => {
              return <TbNotes className={style} size={size} />;
            },
            link: "/administration/logs",
          },
          {
            name: "Inventory",
            icon: (style: string, size: string) => {
              return <TbClipboardCheck className={style} size={size} />;
            },
            link: "/administration/inventory",
          },
        ],
      },
      {
        name: "Setup",
        icon: (style: string, size: string) => {
          return <BsGear className={style} size={size} />;
        },
        link: "/setup",
        itemContent: [
          {
            name: "Dropdowns",
            icon: (style: string, size: string) => {
              return <BsListNested className={style} size={size} />;
            },
            link: "/setup/Dropdowns",
          },
          {
            name: "Components",
            icon: (style: string, size: string) => {
              return <TbComponents className={style} size={size} />;
            },
            link: "/setup/Components",
          },
          {
            name: "Notifications",
            icon: (style: string, size: string) => {
              return <TbBellRinging className={style} size={size} />;
            },
            link: "/setup/Notifications",
          },
          {
            name: "Service levels",
            icon: (style: string, size: string) => {
              return <BsUiChecks className={style} size={size} />;
            },
            link: "/setup/service-levels",
          },
          {
            name: "General",
            icon: (style: string, size: string) => {
              return <TbAdjustments className={style} size={size} />;
            },
            link: "/setup/general",
          },
          {
            name: "Fields Uniqueness",
            icon: (style: string, size: string) => {
              return <BsUiChecksGrid className={style} size={size} />;
            },
            link: "/setup/fields-uniqueness",
          },
          {
            name: "Automatic actions",
            icon: (style: string, size: string) => {
              return <BsFillPlayBtnFill className={style} size={size} />;
            },
            link: "/setup/automatic-actions",
          },
          {
            name: "Authentication",
            icon: (style: string, size: string) => {
              return <BsPersonCheckFill className={style} size={size} />;
            },
            link: "/setup/authentication",
          },
          {
            name: "Receivers",
            icon: (style: string, size: string) => {
              return <BsFillInboxFill className={style} size={size} />;
            },
            link: "/setup/receivers",
          },
          {
            name: "External links",
            icon: (style: string, size: string) => {
              return <BsLink45Deg className={style} size={size} />;
            },
            link: "/setup/external-links",
          },
          {
            name: "Plugins",
            icon: (style: string, size: string) => {
              return <TbPuzzle className={style} size={size} />;
            },
            link: "/setup/plugins",
          },
        ],
      },
    ],
  },
];

export const assetsGridItems:GridItemType[] = [


  {
    name: "Computers",
    bgColor: "#F3D0D0",
    textColor: "#C53232",
    hoverBgColor: "#e39393",
    hoverBorderColor: "#D45656",
    asset: "computers",
    path: "/assets/computers",
    icon: (style?: string, size?: string) => {
      return <TbDeviceLaptop className="w-6 h-6 stroke-1" />;
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
    icon: (style?: string, size?: string) => {
      return <TbApps className="w-6 h-6 stroke-1" />;
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
    icon: (style?: string, size?: string) => {
      return <TbSitemap className="w-6 h-6 stroke-1" />;
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
    icon: (style?: string, size?: string) => {
      return <TbServer className="w-6 h-6 stroke-1" />;
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
    icon: (style?: string, size?: string) => {
      return <TbColumns className="w-6 h-6 stroke-1" />;
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
    icon: (style?: string, size?: string) => {
      return <TbDeviceDesktop className="w-6 h-6 stroke-1" />;
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
    icon: (style?: string, size?: string) => {
      return <TbKey className="w-6 h-6 stroke-1" />;
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
    icon: (style?: string, size?: string) => {
      return <TbPrinter className="w-6 h-6 stroke-1" />;
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
    icon: (style?: string, size?: string) => {
      return <TbPlug className="w-6 h-6 stroke-1" />;
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
    icon: (style?: string, size?: string) => {
      return <TbPhone className="w-6 h-6 stroke-1" />;
    },
  },
];
export const assetsGridGraphs = [];
