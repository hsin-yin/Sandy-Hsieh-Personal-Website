import React, { useEffect } from 'react';
import "./index.css";
import Header from './components/Header';
import Main from "./components/Main";

function App() {
  useEffect(() => {
    const contents = document.querySelectorAll('.main_content');
    const navHightlights = document.querySelectorAll('.navHightlight');
    const navTitles = document.querySelectorAll('.navTitle');

    const handleScroll = () => {
      const halfWinInnerHigh = window.innerHeight / 2;
      let currentContentIndex = -1;

      contents.forEach((content, index) => {
        const contentOffset = content.offsetTop;
        if (window.scrollY + halfWinInnerHigh > contentOffset) {
          currentContentIndex = index;
        }
      });

      if (currentContentIndex !== -1) {
        navHightlights.forEach((Hightlight) => {
          Hightlight.classList.remove('navHightlightStyle');
        });
        navTitles.forEach((title) => {
          title.classList.add('navTitleStyle');
        });

        navHightlights[currentContentIndex].classList.add('navHightlightStyle');
        navTitles[currentContentIndex].classList.remove('navTitleStyle');

      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='app'>
      <Header />
      <Main />
      <footer>Sandy Hsieh - Inspired by Brittany Chiang</footer>
    </div>
  );
}

export default App;