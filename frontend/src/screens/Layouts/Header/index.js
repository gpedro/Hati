import React from 'react'

const Header = () => { 
    return(
            
        <header className="page-header" role="banner">
        <div className="page-logo">
            <span className="page-logo-link press-scale-down d-flex align-items-center position-relative" data-toggle="modal" data-target="#modal-shortcut">
                <img src="img/logo.png" alt="Hati AAC" aria-roledescription="logo" />
                <span className="page-logo-text mr-1">Hati AAC</span>
                <span className="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2"></span>
                <i className="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300"></i>
            </span>
        </div>
    
        <div className="search">
            <form className="app-forms hidden-xs-down" role="search" action="page_search.html" autoComplete="off">
                <br />
                <div className="input-group input-group-lg mb-3">
                    <input type="text" className="form-control shadow-inset-2" id="filter-icon" placeholder="Search of Character" aria-label="type 2 or more letters" />
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fal fa-search"></i></span>
                    </div>
                </div>
            </form>
        </div>
    </header>    

    )
}



export default Header 