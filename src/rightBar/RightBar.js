import './RightBar.css'
import Gadget from './gadgets/Gadget'
const RightBar = () => {
    return (
        <div className='right_bar'>
            <div className="main_heading">
                <h2>Add to your feed</h2>
            </div>
            <Gadget name="Amazon" 
            desc = "Company * Internet" 
            photoURL="https://media-exp1.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_100_100/0/1612205615891?e=1632355200&v=beta&t=z0lS9_itdoxNFX_oJl3_w3ncJCs63Uv9FxBQF3r5L6I"  
            />
            <Gadget name="Melinda French Gates" 
            desc = "Co-chair of the Bill & Melinda Gates" 
            photoURL="https://media-exp1.licdn.com/dms/image/C5603AQEpRvy5RHa_Vw/profile-displayphoto-shrink_100_100/0/1540298440311?e=1629936000&v=beta&t=WnuxNSCvPRLl0S2KydLPsPF2C5VcG6dBXlgOV6euFMU"  
            />
            <Gadget name="ibex.Pakistan" 
            desc = "Company • Outsourcing/Offshoring" 
            photoURL="https://media-exp1.licdn.com/dms/image/C4E0BAQEQp7lz0O-dxg/company-logo_100_100/0/1586463849189?e=1632355200&v=beta&t=gZx8UECG_QvGbMEVbC9-ldG6ApsjeqyhMHKjZXWriz8"  
            />
        </div>
    )
}

export default RightBar
