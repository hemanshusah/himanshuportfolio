import React from 'react';
import ContactLink from '../molecules/ContactLink';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './ContactSection.css';

export default function ContactSection({ profile = {} }) {
  const { email, initials } = profile;
  const [revealHeaderRef, isHeaderRevealed] = useIntersectionObserver();
  const [revealTitleRef, isTitleRevealed] = useIntersectionObserver();
  const [revealLinksRef, isLinksRevealed] = useIntersectionObserver();
  const [revealVisualRef, isVisualRevealed] = useIntersectionObserver();

  return (
    <section id="contact">
      <div>
        <p ref={revealHeaderRef} className={`about-label reveal ${isHeaderRevealed ? 'visible' : ''}`}>
          Let's Connect
        </p>
        <h2 ref={revealTitleRef} className={`contact-title reveal reveal-delay-1 ${isTitleRevealed ? 'visible' : ''}`}>
          Let's<br /><em>Build</em><br />Together
        </h2>
        <p className="contact-text">
          Whether you're a founder looking to define your brand or expand to new markets, I'd love to hear what you're working on.
        </p>
        <div ref={revealLinksRef} className={`contact-links reveal reveal-delay-3 ${isLinksRevealed ? 'visible' : ''}`}>
          {email && (
            <ContactLink
              label="Email"
              text={email}
              href={`mailto:${email}`}
              icon="@"
            />
          )}
        </div>
      </div>
      <div ref={revealVisualRef} className={`contact-visual reveal reveal-delay-2 ${isVisualRevealed ? 'visible' : ''}`}>
        <div className="contact-big">{initials || 'HS'}</div>
        <div className="contact-badge">
          <span>Available<br />Now</span>
          <small>Open to Work</small>
        </div>
      </div>
    </section>
  );
}
