import { createContext, useState } from 'react';
const showCart = createContext();

function CreateContextProvider({ children }) {
    const [show, setShow] = useState(false);
    const [showPay, setShowPay] = useState(false);
    const [showNavMobile, setShowNavMobile] = useState(false);
    const [showSeachMobile, setShowSeachMobile] = useState(false);

    const handleShow = () => {
        setShow(true);
    };
    const handleHide = () => {
        setShow(false);
    };
    const handleShowPay = () => {
        setShowPay(true);
    };
    const handleHidePay = () => {
        setShowPay(false);
    };
    const handleShowNavMobile = () => {
        setShowNavMobile(true);
    };
    const handleHideNavMobile = () => {
        setShowNavMobile(false);
    };
    const handleShowSeachMobile = () => {
        setShowSeachMobile(true);
    };
    const handleHideSeachMobile = () => {
        setShowSeachMobile(false);
    };
    const value = {
        show,
        showPay,
        showNavMobile,
        showSeachMobile,
        handleHide,
        handleShow,
        handleHidePay,
        handleShowPay,
        handleHideNavMobile,
        handleShowNavMobile,
        handleShowSeachMobile,
        handleHideSeachMobile,
    };
    return <showCart.Provider value={value}>{children}</showCart.Provider>;
}
export { showCart, CreateContextProvider };
