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
    </div>
  )
}
