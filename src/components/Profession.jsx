import React from 'react';
import Typed from 'typed.js';

function Profession() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['MERN Stack Developer','Web Developer','Graphic Designer','Freelancer','Coder'],
      loop: true,
      typeSpeed : 100,
      backSpeed : 80,
      backDelay : 1500

    });

    return () => {
     
      typed.destroy();
    };
  }, []);

  return (
    <div className=" text-3xl md:text-4xl col-w-full">
      <span ref={el} />
    </div>
  );
}
export default Profession;