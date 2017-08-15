import React from 'react';
import './header.css';
class Header extends React.Component{
    render(){
        var proName='';
        return (
            <div className='header'>
                <span className="icon-logo_paper"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></span>{`${proName}-Paper`}
            </div>
        )
    }
}
export default Header