import * as React from 'react';
import gsap from 'gsap';
import { Helmet } from 'react-helmet';
import {
  Header,
  Hero,
  About,
  Projects,
  Contact,
  Footer,
  Aside,
} from '../layout';
import '../sass/main.scss';
import './index.scss';

const IndexPage = () => {
  const element = React.useRef();
  const q = gsap.utils.selector(element);
  const timeline = React.useRef();

  React.useEffect(() => {
    timeline.current = gsap
      .timeline()
      .to(q('.hero_baseline-title'), {
        ease: 'power4.inOut',
        y: 0,
        opacity: 1,
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        duration: 2,
      })
      .to(q('.section_hero-image'), {
        ease: 'elastic.out(1, 0.3)',
        y: 0,
        opacity: 1,
        duration: 2,
      })
      .to(q('.baseline_title-button'), {
        opacity: 1,
        duration: 1,
      });
  }, []);
  return (
    <>
      <Helmet>
        <html lang='en' />
        <title>Bouchard Mehdi - Portfolio</title>
        <meta
          name='description'
          content='Bouchard Mehdi, FrontEnd React developer and Webdesigner in the south of France.'
        />
      </Helmet>
      <Header />
      <main className='container'>
        <Hero element={element} lang='en' />
        <About lang='en' />
        <Projects lang='en' />
        <Contact lang='en' />
      </main>
      <Aside />
      <Footer lang='en' />
    </>
  );
};

export default IndexPage;
