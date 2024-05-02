import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../supplierContexts/AppContext";
import SideBarItems from "./SidebarItems";
import "./sidebar.scss"; 
import { GiTronArrow } from "react-icons/gi"; 
import { IoIosArrowForward } from "react-icons/io";

function SideBar() {
    // Accessing state and context
    const { stateTrack, setStateTrack } = useContext(AppContext);
    const [selected, setSelected] = useState(null);

    // useEffect to set initial state
    useEffect(() => {
        eventTransformer(stateTrack);
    }, []);

    // Function to handle sidebar item click
    const eventTransformer = (num) => {
        setStateTrack(num);
        setSelected(0);
    };

    return (
        <div className="sidebar-container">
            {/* Brand name section */}
            <div className="brandName">
                <GiTronArrow size={23} style={{ cursor: "pointer", marginLeft: "13px", marginTop: "15px", color: "#CCAF31" }} />
                <span className="brandFront" style={{ marginTop: "15px", color: "#CCAF31" }}>ARROW COMPUTERS</span>
            </div>
            {/* Side menu items container */}
            <div className="side-bar-item-container">
                {/* Mapping through sidebar items */}
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
                                        {/* Arrow icon for nested functions */}
                                        <span
                                            className={`scrollFuncIcon ${
                                                index === stateTrack &&
                                                "scroll-function-show"
                                                }`}
                                        >
                                            <IoIosArrowForward />
                                        </span>
                                    </span>

                                    {/* Nested function container */}
                                    <div
                                        className={`nested-function-container${
                                            index === stateTrack
                                                ? "cont-show"
                                                : ""
                                            }`}
                                    >
                                        {/* Mapping through nested functions */}
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
                                                        {/* Nested item icon */}
                                                        <span className="icon">
                                                            {nestedItemicon}
                                                        </span>
                                                        {/* Nested item text */}
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
