import React from 'react';

const Quote = ({ quote }) => {
  return (

    <p>
      { quote.text } <br />
      <span>- { quote.author }</span>
    </p>

  );
};

export default Quote;

// import React from 'react';

// function Nav() {
//   return (


//     <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">

//         <h1 className="navbar-brand" href="#">
//         Breaking Bad app
//         </h1>


//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                 <a className="nav-link" href="https://www.google.com.ar">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item active">
//                 <a className="nav-link" href="https://www.google.com.ar">Home <span className="sr-only">(current)</span></a>
//                 </li>


//                 <li className="nav-item">
//                 <a className="nav-link disabled" href="https://www.google.com.ar" tabIndex="-1" aria-disabled="true">Disabled</a>
//                 </li>
//             </ul>
//         </div> 
//     </nav>

//   );
// };

// export default Nav;
