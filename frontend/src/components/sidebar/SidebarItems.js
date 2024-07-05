import { TbUserPlus } from "react-icons/tb";
import { TbUser } from "react-icons/tb";
import { BsPalette2 } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";

const SidebarItems = [
  {
    id: 1000,
    icon: <BsPalette2 />,
    text: "Supplier Management",
    nestedFunctions: [
      {
        id: 105,
        link: "/admin/inventory/supplier-registration",
        nestedItemicon: <TbUserPlus />,
        nestedItemtext: "Add supplier",
      },

      {
        id: 106,
        link: "/admin/inventory/manage-suppliers",
        nestedItemicon: <TbUser />,
        nestedItemtext: "Manage suppliers",
      },
    ],
  },

  {
    id: 3000,
    text: "Payroll Management",
    nestedFunctions: [
      {
        id: 304,
        link: "/admin/payroll/AddPayroll",
        nestedItemicon: <GiTakeMyMoney />,
        nestedItemtext: "Add Payroll",
      },

      {
        id: 305,
        link: "/admin/payroll/ManagePayroll",
        nestedItemicon: <GiReceiveMoney />,
        nestedItemtext: "Manage Payrolls",
      },
    ],
  },
];

export default SidebarItems;
