import { useState, useEffect } from 'react';

const TopDown = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-16 right-16">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:bg-gradient-to-l hover:from-purple-500 hover:via-slate-500 hover:to-pink-300 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-opacity-80 transition ease-in-out duration-500"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
};

export default TopDown;
