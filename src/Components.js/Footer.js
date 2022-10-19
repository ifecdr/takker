import React from 'react'
import "../index.css";

const logo = new URL("../Uploads/logo.png",import.meta.url)
const brandname1 = new URL("../Uploads/brand1.png", import.meta.url)
const brandname3 = new URL("../Uploads/brand2.png", import.meta.url)
const brandname2 = new URL("../Uploads/brand3.png", import.meta.url)
export default function Footer() {
  return (
    <footer>
        <div className='footers-info'>
            <div className='details-1'>
                <img src={logo} alt="Logo" />
                <div className="secured-shopping">
                    <h4>Secured shoppinng</h4>
                    <div className="ss-container">
                        <img src={brandname1} alt="br1" />
                        <img src={brandname2} alt="br2" />
                        <img src={brandname3} alt="br3" />
                    </div>
                </div>
            </div>
            <div className='details-2'>
                <h3>Company</h3>
                <ul>
                    <li>How to use Takker FAQ & support</li>
                    <li>How to use Hardwall Takker Delivery & returns</li>
                    <li>About</li>
                    <li>Cookies</li>
                    <li>Privacy</li>
                    <li>Terms and use</li>
                </ul>
            </div>
            <div className='details-3'>
                <h3>Lets help you</h3>
                <ul>
                    <li>How to use Takker FAQ & support</li>
                    <li>How to use Hardwall Takker Delivery & returns</li>
                </ul>    
            </div>
            <div className='details-4'>
                <h3>Customer care</h3>
                <ul>
                    <li>FAQ & support</li>
                    <li>Delivery & returns</li>
                    <li>Got Questions ?</li>
                    <li>Call us 24/7!</li>
                    <li>+44 (0)28 9038 7007</li>
                    <li>Address</li>
                    <li>Takker Ltd. Adelaide House, Hawthorn Business Centre, 1 Falcon Road, Belfast, BT12 6SJ</li>
                </ul>

            </div>
        </div>
    </footer>
  )
}
