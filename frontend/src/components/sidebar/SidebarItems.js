import { MdContentPasteSearch, MdInsights } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import { MdOutlineInventory2 } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { TbUserPlus } from "react-icons/tb";
import { TbUser } from "react-icons/tb";
import { FaPaw } from "react-icons/fa";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { BsPalette2 } from "react-icons/bs";
import { CiMedicalCross } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { FaSyringe } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import { MdOutlineInsights } from "react-icons/md";
import { MdMedicalServices } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { MdSell } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";

import { BsPeopleFill } from "react-icons/bs";
import { MdHolidayVillage } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";

// main function icons
import { AiFillApi } from "react-icons/ai";
import { BiStoreAlt } from "react-icons/bi";
import { BiPlusMedical } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";

// delivery function icons
import { FaUserPlus } from "react-icons/fa";
import { TbPackageExport } from "react-icons/tb";
import { BiTimer } from "react-icons/bi";
import { AiOutlineFileDone } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";

// inventory
import {TbReportAnalytics} from "react-icons/tb"


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