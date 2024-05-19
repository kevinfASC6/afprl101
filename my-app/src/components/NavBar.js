import '.././App.css'; 

const NavBar = () => {  
    function handleHome() { 
        window.location.href = "/";
    } 
    function handleBib() { 
        window.location.href = "/bib";
    }
    return (
        <div className='nav-bar'> 
            <h1 className='home-start'>AFPRL 101: A Timeline</h1>  
            <div className='nav-bar-links'>
                <p onClick={handleHome}>Home</p> 
                <p onClick={handleBib}>Works Cited</p> 
            </div>
        </div>
    )
}

export default NavBar; 