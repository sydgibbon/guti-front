import { BsHouse, BsBoxSeam, BsLaptop, BsDisplay } from "react-icons/bs";
import { TbApps, TbBrowser, TbColumns, TbDropletFilled2, TbFileBarcode, TbLine, TbList, TbPhone, TbPlug, TbPrinter, TbQuestionMark, TbServer, TbSitemap, TbUsb, } from "react-icons/tb";

export const appItems = [
    {
      name: "Home",
      icon: function() {
        return <BsHouse/>;
      },
      link: "/",
      itemContent: [
        {
          name: "Assets",
          icon: function() {
            return <BsBoxSeam/>;
          },
          link: "/assets",
          itemContent: [
            {
              name: "Computers",
              icon: function() {
                return <BsLaptop/>;
              },
              link: "/assets/computers",
            },
            {
              name: "Monitors",
              icon: function() {
                return <BsDisplay/>;
              },
              link: "/assets/monitors",
            },            {
              name: "Software",
              icon: function() {
                return <TbApps/>;
              },
              link: "/assets/software",
            },
            {
              name: "Network devices",
              icon: function() {
                return <TbSitemap/>;
              },
              link: "/assets/network-devices",
            },
            {
              name: "Devices",
              icon: function() {
                return <TbUsb/>;
              },
              link: "/assets/devices",
            },
            {
              name: "Printers",
              icon: function() {
                return <TbPrinter/>;
              },
              link: "/assets/printers",
            },
            {
              name: "Cartridges",
              icon: function() {
                return <TbDropletFilled2/>;
              },
              link: "/assets/cartridges",
            },
            {
              name: "Consumables",
              icon: function() {
                return <BsBoxSeam/>;
              },
              link: "/assets/consumables",
            },
            {
              name: "Phones",
              icon: function() {
                return <TbPhone/>;
              },
              link: "/assets/phones",
            },
            {
              name: "Racks",
              icon: function() {
                return <TbServer/>;
              },
              link: "/assets/racks",
            },
            {
              name: "Enclosures",
              icon: function() {
                return <TbColumns/>;
              },
              link: "/assets/enclosures",
            },
            {
              name: "PDUs",
              icon: function() {
                return <TbPlug/>;
              },
              link: "/assets/pdus",
            },
            {
              name: "Passive devices",
              icon: function() {
                return <TbBrowser/>;
              },
              link: "/assets/passive-devices",
            },
            {
              name: "Unmanaged devices",
              icon: function() {
                return <TbQuestionMark/>;
              },
              link: "/assets/unmanaged-devices",
            },
            {
              name: "Cables",
              icon: function() {
                return <TbLine/>;
              },
              link: "/assets/cables",
            },
            {
              name: "Simcards",
              icon: function() {
                return <TbFileBarcode/>;
              },
              link: "/assets/simcards",
            },
            {
              name: "Global",
              icon: function() {
                return <TbList/>;
              },
              link: "/assets/global",
            },
          ],
        },
      ],
    },
  ];