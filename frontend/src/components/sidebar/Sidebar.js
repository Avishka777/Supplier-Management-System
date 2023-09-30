import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import SideBarItems from "./SidebarItems";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";
import { GiTronArrow } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";

function SideBar() {

	const {stateTrack , setStateTrack} = useContext(AppContext)
	const [selected, setSelected] = useState(null);

	useEffect(() => {
		eventTransformer(stateTrack);
	}, []);

	const eventTransformer = (num) => {
		setStateTrack(num);
		setSelected(0);
	};

	return (
		<div className="sidebar-container">
			{/* brandname modifications arrow computers*/}
			<div className="brandName">
			<GiTronArrow size={23}style={{ cursor: "pointer" , marginLeft: "13px", marginTop: "15px" ,color: "#CCAF31"  }}/>
				<span className="brandFront"style={{ marginTop: "15px" ,color: "#CCAF31"  }}>ARROW COMPUTERS</span>
			</div>
			{/* side menu items container */}
			<div className="side-bar-item-container">
				{SideBarItems.map((item, index) => {
					const { id, icon, text, nestedFunctions } = item;

					return (
						<div key={index}>
							<div className="mainFunctionAssets" key={id}>
								<span className="mainFunction">
									<span className="functionPrompt">
										
										<span
											className="mainFuncItemName"
											onClick={() => {
												eventTransformer(index);
												console.log(index);
											}}
										>
											{text}
										</span>
										<span
											className={`scrollFuncIcon ${
												index === stateTrack &&
												"scroll-function-show"
											}`}
										>
											<IoIosArrowForward />
										</span>
									</span>

									<div
										className={`nested-function-container${
											index === stateTrack
												? "cont-show"
												: ""
										}`}
									>
										{nestedFunctions.map(
											(nestedFunction, index) => {
												const {
													link,
													nestedItemicon,
													nestedItemtext,
												} = nestedFunction;

												return (
													<NavLink key={index}
														to={link}
														className={({
															isActive,
														}) =>
															isActive
																? "active-nested-item"
																: "side-bar-nested-item"
														}
													>
														<span className="icon">
															{nestedItemicon}
														</span>
														<span className="item-name">
															{nestedItemtext}
														</span>
													</NavLink>
												);
											}
										)}
									</div>
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default SideBar;
