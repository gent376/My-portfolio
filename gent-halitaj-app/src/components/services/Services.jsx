import React, { useState } from 'react';
import './services.css';
import { BsCheckLg } from 'react-icons/bs';

const Services = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionId) => {
    if (activeSection === sectionId) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionId);
    }
  };

  return (
    <article id='services'>
      <h5>What I offer is...</h5>
      <h2>Services</h2>
      <div className='cards-services'>
        {[
          { id: 'ui', title: 'UI/UX Design' },
          { id: 'fe', title: 'Front-end Development' },
          { id: 'ot', title: 'Other...' },
        ].map((section) => (
          <div className='card-sevices' key={section.id}>
            <button type='button' onClick={() => toggleSection(section.id)}>{section.title}</button>
            <div className={`services-info ${activeSection === section.id ? '' : 'hidden'}`} id={section.id}>
              {Array.from({ length: 7 }).map((_, index) => (
                <h5 key={index}>
                  <span><BsCheckLg /></span>Lorem ipsum dolor sit amet.
                </h5>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default Services;

// import React from 'react';
// import './services.css';
// import { BsCheckLg } from 'react-icons/bs';

// const Services = () => {
//   const onHover = (sectionId) => {
//     document.getElementById(sectionId).classList.remove('hidden');
//   };

//   const onLeave = (sectionId) => {
//     document.getElementById(sectionId).classList.add('hidden');
//   };

//   return (
//     <article id='services'>
//       <h5>What I offer is...</h5>
//       <h2>Services</h2>
//       <div className='cards-services'>
//         <div className='card-sevices'>
//           <button
//             type='button'
//             onMouseEnter={() => onHover('ui')}
//             onMouseLeave={() => onLeave('ui')}
//           >
//             UI/UX Design
//           </button>
//           <div className='services-info hidden' id='ui'>
//           {Array.from({ length: 7 }).map((_, index) => (
//                 <h5 key={index}>
//                    <span><BsCheckLg /></span>Lorem ipsum dolor sit amet.
//                  </h5>
//               ))}
//           </div>
//         </div>
//         <div className='card-sevices'>
//           <button
//             type='button'
//             onMouseEnter={() => onHover('fe')}
//             onMouseLeave={() => onLeave('fe')}
//           >
//             Front-end Development
//           </button>
//           <div className='services-info hidden' id='fe'>
//           {Array.from({ length: 7 }).map((_, index) => (
//                  <h5 key={index}>
//                    <span><BsCheckLg /></span>Lorem ipsum dolor sit amet.
//                  </h5>
//                ))}
//           </div>
//         </div>
//         <div className='card-sevices'>
//           <button
//             type='button'
//             onMouseEnter={() => onHover('ot')}
//             onMouseLeave={() => onLeave('ot')}
//           >
//             Other...
//           </button>
//           <div className='services-info hidden' id='ot'>
//           {Array.from({ length: 7 }).map((_, index) => (
//                   <h5 key={index}>
//                    <span><BsCheckLg /></span>Lorem ipsum dolor sit amet.
//                  </h5>
//                ))}
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }

// export default Services;
