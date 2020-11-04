const { default: Header } = require("./Header")
const { default: Product } = require("./Product")
import '../styles/Style.css';
import Footer from './Footer';
import Footerdata from './Footerdata';
import Navdata from './Navdata';

const Layout = (props) => {
    return(
        <div>
            <title>Product List</title>
            <link rel="stylesheet" href="https://unpkg.com/@icon/themify-icons/themify-icons.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"/>
            <Header/>
            {props.children}
            <Footerdata/>
            <Footer/>
        </div>
    );
}
export default Layout;