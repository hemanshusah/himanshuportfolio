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

// Import local static copy of the data as a fallback to guarantee instant loading
import fallbackData from '../data/portfolioData.json';

const API_BASE_URL = 'http://localhost:5001/api';

export default function PortfolioPage() {
  // Initialize state directly with the local data to bypass loading screen delays
  const [data, setData] = useState(fallbackData);

  useEffect(() => {
    // Attempt background validation against the backend
    fetch(`${API_BASE_URL}/portfolio`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then((payload) => {
        // STRICT VALIDATION: Only apply payload if it is a valid portfolio structure.
        // This prevents other local services on port 5001 from overwriting state with empty objects.
        if (payload && payload.profile && payload.profile.name) {
          setData(payload);
        } else {
          console.warn('Backend API returned invalid data structure. Keeping local fallback data.');
        }
      })
      .catch((err) => {
        console.warn('Backend API not responding; running on local fallback data.', err.message);
      });
  }, []);

  // REVEAL ANIMATIONS GLOBAL OBSERVER
  useEffect(() => {
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
  }, [data]);

  const portfolioData = data || fallbackData;

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
