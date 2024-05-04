import { useEffect, useMemo, useState } from 'react';
import 'animate.css';
import Presentation from './components/Presentation';
import Projects from './components/Projects/Projects';
import SecondSection from './components/SecondSection';
import SocialsAndExperience from './components/SocialsAndExperience';
import { useSites } from './hooks/useSites';
import SpinnerLoader from './components/SpinnerLoader/SpinnerLoader';
import Technologies from './components/Technologies';
import AboutMe from './components/AboutMe';
import './App.css';

function App() {
  const { parsedSites, getSites } = useSites();
  const [isMobileDevice, setIsMobileDevice] = useState(true);

  useEffect(() => {
    getSites();
    setIsMobileDevice(() => matchMedia('(max-width: 768px)').matches);
  }, []);

  const isReady = useMemo(() => parsedSites.length, [parsedSites]);

  return isReady ? (
    <>
      <div className='container m-auto min-h-screen items-center  grid grid-cols-1 lg:grid-cols-2 p-8 lg:px-20 overflow-hidden'>
        <div className='wrapper flex flex-col gap-8'>
          <div className='animate__animated animate__fadeInDown order-1'>
            <Presentation />
          </div>
          <div
            className={`animate__animated animate__fadeIn${
              isMobileDevice ? 'Up' : 'Down'
            } flex justify-between max-w-96 items-center order-3 mb-8 lg:mb-0 lg:order-2`}
          >
            <SecondSection />
          </div>
          <div
            className={`animate__animated animate__fadeIn${
              isMobileDevice ? 'Left' : 'Up'
            }  order-2 lg:order-3`}
          >
            <SocialsAndExperience />
          </div>
        </div>
        <div className='animate__animated animate__fadeInRight '>
          <Projects parsedSites={parsedSites} />
        </div>
      </div>
      <div className='container m-auto p-8 lg:px-20'>
        <AboutMe />
      </div>
      <div className='container m-auto p-8 lg:px-20'>
        <Technologies />
      </div>
    </>
  ) : (
    <div className='min-h-screen flex items-center justify-center'>
      <SpinnerLoader />
    </div>
  );
}

export default App;
