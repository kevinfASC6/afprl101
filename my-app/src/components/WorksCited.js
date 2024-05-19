import React from 'react';
import NavBar from './NavBar';
import '.././App.css'; // Import the CSS file for styling

const WorksCited = () => {
    return( 
        <div> 
            <NavBar /> 
            <div className="container">
            <h3 className="heading">Works Cited</h3> 
            <ul className="list">
                <li className="list-item">
                    The Equal Justice Initiative. <i>The Transatlantic Slave Trade. </i> 
                    <a href="https://eji.org/report/transatlantic-slave-trade/" className="link">https://eji.org/report/transatlantic-slave-trade/</a>
                </li>
                <li className="list-item">
                    Makalani, Minkah. <i>Pan-Africanism. </i> 
                    <a href="https://wayback.archive-it.org/11788/20200108191610/http://exhibitions.nypl.org/africanaage/essay-pan-africanism.html" className="link">https://wayback.archive-it.org/11788/20200108191610/http://exhibitions.nypl.org/africanaage/essay-pan-africanism.html</a>
                </li>
                <li className='list-item'>
                    Gomez, Michael A. <i>Reversing Sail: A History of the African Diaspora. </i> 
                    Cambridge University Press, 2008.
                </li> 
                <li className='list-item'> 
                    Carson, Clayborne, et al. <i>African American Lives: The Struggle for Freedom. </i> Pearson Longman, 2005. 
                </li> 
                <li className='list-item'>
                    Iweriebor, Ehiedu E. G. <i>The Colonization of Africa </i> 
                    <a href='https://wayback.archive-it.org/11788/20200109141010/http://exhibitions.nypl.org/africanaage/essay-colonization-of-africa.html' className='link'>https://wayback.archive-it.org/11788/20200109141010/http://exhibitions.nypl.org/africanaage/essay-colonization-of-africa.html</a>
                </li>
                <li className='list-item'>
                    Purnell, Derecka. Becoming Abolitionists: Police, Protests, and the Pursuit of Freedom. Astra House, 2022. 
                </li>
            </ul> 
            </div>
        </div>
    )
}

export default WorksCited;
