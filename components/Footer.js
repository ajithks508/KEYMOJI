import StickyFooter from 'react-sticky-footer';
const Footer = () =>{
    return(
        <StickyFooter bottomThreshold={50} normalStyles={{backgroundColor: "#d0d3d4",padding: "2rem"}}
        stickyStyles={{backgroundColor: "rgba(255,255,255,.8)",padding: "2rem",width:"100%"}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="row">
                    <div className="col">
                        <i className="ti ti-layout-grid2"></i><br/>
                        <label>Shop</label>
                    </div>
                    <div className="col">
                        <i className="ti ti-heart"></i><br/>
                        <label>Wishlist</label>
                    </div>
                    <div className="col">
                        <i className="ti ti-shopping-cart"></i><br/>
                        <label>Cart</label>
                    </div>
                    <div className="col">
                        <i className="ti ti-user"></i>
                        <label>Account</label>
                    </div>
                </div>
            </nav>
        </StickyFooter>
    );
}
export default Footer;