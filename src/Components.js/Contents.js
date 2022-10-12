import React from 'react'

const merchants1 = new URL("../Uploads/merchants1.png", import.meta.url)
const merchants2= new URL("../Uploads/merchants2.png", import.meta.url)
const merchants3 = new URL("../Uploads/merchants3.png", import.meta.url)
const merchants4 = new URL("../Uploads/merchants4.png", import.meta.url)
const merchants5 = new URL("../Uploads/merchants5.png", import.meta.url)
const merchants6 = new URL("../Uploads/merchants6.png", import.meta.url)
const merchants7 = new URL("../Uploads/merchants7.png", import.meta.url)
const merchants8 = new URL("../Uploads/merchants8.png", import.meta.url)
const kit = new URL("../Uploads/kit.jpg", import.meta.url)
const arrr = new URL("../Uploads/arr-r.png", import.meta.url)
const arrl = new URL("../Uploads/arrl.png", import.meta.url)
const s1 = new URL("../Uploads/s1.png", import.meta.url)
const s2 = new URL("../Uploads/s2.png", import.meta.url)
const s3 = new URL("../Uploads/s3.png", import.meta.url)
const s4 = new URL("../Uploads/s4.png", import.meta.url)
const takker = new URL("../Uploads/7-1.png", import.meta.url)
const person = new URL("../Uploads/person.png", import.meta.url)




export default function Contents() {
  return (
    <div className='contents'>
        <div className='merchants'>
            <p className='p3'>Our Merchants</p>
            <div className='merchants-logo'>
                <img src={merchants1} alt='merchant'/>
                <img src={merchants2} alt='merchant'/>
                <img src={merchants3} alt='merchant'/>
                <img src={merchants4} alt='merchant'/>
                <img src={merchants5} alt='merchant'/>
                <img src={merchants6} alt='merchant'/>
                <img src={merchants7} alt='merchant'/>
                <img src={merchants8} alt='merchant'/>
            </div>
            <div className='kits-con'>
                <div className='kit kit1'>
                    <img src={kit} alt="kit"/>
                    <div className='text'>
                        <p className='p1'>Picture Hanging Kit</p>
                        <p className='p2'>Suitable for hanging pictures and mirrors up to 10kgs/22lbs and canvas prints of all sizes.</p>
                        <p className='p4'>Shop now 	&rarr;</p>
                    </div>
                </div>
                <div className='kit'>
                    <img src={kit} alt="kit"/>
                    <div className='text'>
                        <p className='p1'>Picture Hanging Kit</p>
                        <p className='p2'>Suitable for hanging pictures and mirrors up to 10kgs/22lbs and canvas prints of all sizes.</p>
                        <p className='p4'>Shop now &rarr;</p>

                    </div>
                </div>
            </div>
            
        </div>
        <div className='featured'>
            <div className='header'>
                <p className='p3'>Featured Categories</p>
                <div className='arrows'>
                    <span><img src={arrl} alt='merchant'/></span>
                    <span><img src={arrr} alt='merchant'/></span>
                </div>
            </div>

             <div className='categories'>
                <div className='fc'>
                    <img src={kit} alt='kit' />
                </div>
                <div className='fc'>
                    <img src={kit} alt='kit' />
                </div>
                <div className='fc'>
                    <img src={kit} alt='kit' />
                </div>
            </div>
        </div>
        <div className='customer-s'>
            <h3>We Are Customer Centric</h3>
            <div className='service'>
                <div className='s1'>
                    <img src={s1} alt='van' />
                    <p>Worldwide Delivery</p>
                </div>
                <div className='s1'>
                    <img src={s2} alt='van' />
                    <p>30 Days Free Return</p>

                </div>                
                <div className='s1'>
                    <img src={s3} alt='van' />
                    <p>99% Positive Feebacks</p>
                </div>                
                <div className='s1'>
                    <img src={s4} alt='van' />
                    <p>Secured Payment</p>
                </div>
            </div>
        </div>
        <div className='adv-con'>
            <div className='text-con-con'>
                <div className='text-con'>
                    <h3>BUY FROM US</h3>
                    <p>We want to make your indoor&outdoor hanging simple and easy</p>
                    <button>Start Shopping</button>
                </div>
            </div>
            <div>
                <img src={takker} alt='takker' />
            </div>
        </div>

        <div className='customer-r'>
            <p>Customer Review</p>
            
            <div className='reviews-con'>
                <div className='reviews'>
                    <span className='apostroph'>"</span>
                    <img src={person} alt='pesrcon' />
                    <div className='r-words'>
                        <h3>Alexis Brian</h3>
                        <p>Suitable for hanging pictures and mirrors up to 10kgs/22lbs and canvas prints of all sizes.</p>
                    </div>
                </div>
                <div className='reviews'>
                    <span className='apostroph'>"</span>
                    <img src={person} alt='pesrcon' />
                    <div className='r-words'>
                        <h3>Alexis Brian</h3>
                        <p>Suitable for hanging pictures and mirrors up to 10kgs/22lbs and canvas prints of all sizes.</p>
                    </div>
                </div>
                <div className='reviews'>
                    <span className='apostroph'>"</span>
                    <img src={person} alt='pesrcon' />
                    <div className='r-words'>
                        <h3>Alexis Brian</h3>
                        <p>Suitable for hanging pictures and mirrors up to 10kgs/22lbs and canvas prints of all sizes.</p>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}
