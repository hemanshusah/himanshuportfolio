import React from 'react';
import ContactLink from '../molecules/ContactLink';

export default function ContactSection({ profile = {} }) {
  const { email, phone, linkedin, initials } = profile;

  return (
    <section id="contact">
      <div>
        <p className="about-label reveal">Let's Connect</p>
        <h2 className="contact-title reveal reveal-delay-1">Let's<br /><em>Build</em><br />Together</h2>
        <p className="contact-text reveal reveal-delay-2">
          Whether you're a founder looking to define your brand, expand to new markets, or build a community — I'd love to hear what you're working on.
        </p>
        <div className="contact-links reveal reveal-delay-3">
          {phone && (
            <ContactLink
              label="Phone"
              text={phone}
              href={`tel:${phone.replace(/\s+/g, '')}`}
              icon="☎"
            />
          )}
          {email && (
            <ContactLink
              label="Email"
              text={email}
              href={`mailto:${email}`}
              icon="@"
            />
          )}
          {linkedin && (
            <ContactLink
              label="LinkedIn"
              text="Himanshu Sah"
              href={linkedin}
              icon="in"
              target="_blank"
            />
          )}
        </div>
      </div>
      <div className="contact-visual reveal reveal-delay-2">
        <div className="contact-big">{initials || 'HS'}</div>
        <div className="contact-badge"><span>Available<br />Now</span><small>Open to Work</small></div>
      </div>
    </section>
  );
}
