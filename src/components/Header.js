import React  from 'react'
import counterpart from "counterpart"
import TemporaryDrawer from '../components/drawer'
import en from '../language/en'
import ar from '../language/ar'
counterpart.registerTranslations('en',en)
counterpart.registerTranslations('ar',ar)
counterpart.setLocale('en')

const Header = () => {
    const en=()=>{
        counterpart.setLocale('en');
        document.documentElement.dir='ltr';
    }
    const ar=()=>{
        counterpart.setLocale('ar');
        document.documentElement.dir='rtl';
    }
    return (
        <div className="container " data-dismiss="modal">
            <div className="row ">
                <div className="col-sm">
                    <div className="row">
                        <img src="/images/En.png" onClick={en} width="40" height="40" alt="English" className="m-1 p-1" />
                        <img src="/images/Ar.png" onClick={ar} width="40" height="40" alt="Aabic" className="m-1 p-1"/>
                    </div>
                    <div className="row">contactus@mcst.edu.sa</div>
                </div>
                <div className="col-sm ">
                    <div className="justify-content-md-center row">
                        <img src="/images/mcst.jpg" width="170" height="70" alt="mcst"/>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="justify-content-md-end row">
                        <TemporaryDrawer/> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
