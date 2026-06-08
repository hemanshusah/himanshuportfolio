import React, { useEffect, useState } from 'react';
import CustomCursor from '../components/atoms/CustomCursor';
import Navbar from '../components/organisms/Navbar';
import HeroSection from '../components/organisms/HeroSection';
import MarqueeSection from '../components/organisms/MarqueeSection';
import AboutSection from '../components/organisms/AboutSection';
import ToolsSection from '../components/organisms/ToolsSection';
import CVSection from '../components/organisms/CVSection';
import JourneySection from '../components/organisms/JourneySection';
import CapabilitiesSection from '../components/organisms/CapabilitiesSection';
import ContactSection from '../components/organisms/ContactSection';
import Footer from '../components/organisms/Footer';

const API_BASE_URL = 'http://localhost:5001/api';

export default function PortfolioPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/portfolio`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then((payload) => {
        setData(payload);
        setLoading(false);
      })
      .catch((err) => {
        console.error('API fetch failed, falling back to static content', err);
        setLoading(false);
      });
  }, []);

  // REVEAL ANIMATIONS GLOBAL OBSERVER
  useEffect(() => {
    if (loading || !data) return;

    // Use a small timeout to let React finish rendering the DOM
    const timer = setTimeout(() => {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      }, { threshold: 0.08 });

      const targets = document.querySelectorAll('.reveal, .journey-entry, .edu-card');
      targets.forEach((el) => obs.observe(el));

      return () => {
        targets.forEach((el) => obs.unobserve(el));
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [loading, data]);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0A0A0A',
        color: '#F5F0E8',
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: '2rem',
        letterSpacing: '0.1em'
      }}>
        LOADING...
      </div>
    );
  }

  const portfolioData = data || {};

  return (
    <>
      <CustomCursor />
      <Navbar initials={portfolioData.profile?.initials} />
      <HeroSection profile={portfolioData.profile} />
      <MarqueeSection items={portfolioData.marquee} />
      <AboutSection stats={portfolioData.stats} />
      <ToolsSection tools={portfolioData.tools} />
      <CVSection cvItems={portfolioData.cv} resumeDownloadUrl={`${API_BASE_URL}/resume/download`} />
      <JourneySection journey={portfolioData.journey} />
      <CapabilitiesSection capabilities={portfolioData.capabilities} />
      <ContactSection profile={portfolioData.profile} />
      <Footer initials={portfolioData.profile?.initials} location={portfolioData.profile?.location} />
    </>
  );
}
