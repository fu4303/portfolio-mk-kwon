import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Min Kyung Kwon</h2>
        <p><a href="mailto:MIN.KYUNG.KWON.DEV@gmail.com">MIN.KYUNG.KWON.DEV @gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Min. I like creating things.
        I am a Front End Developer, Graphic Designer and Artist.
        I majored in Industrial Design at <a href="https://en.hongik.ac.kr/contents/www/eng/seoulcam.html">Hong-Ik University in Seoul, South Korea</a>.
        I worked at <a href="http://www.colosso.net/">Colosso</a> as a Graphic Designer. Our major clients&apos;re Samsung, LG & SK Telecom.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Min Kyung Kwon <Link to="/">minkyungkwon.dev</Link>.</p>
    </section>
  </section>
);

export default SideBar;
