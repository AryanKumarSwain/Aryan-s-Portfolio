import React from 'react';
import Typed from 'typed.js';

function Profession() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Developer','Coder','Graphic Designer'],
      loop: true,
      typeSpeed : 100,
      backSpeed : 80,
      backDelay : 1500

    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App col-w-[60%]">
      <span ref={el} />
    </div>
  );
}
export default Profession;