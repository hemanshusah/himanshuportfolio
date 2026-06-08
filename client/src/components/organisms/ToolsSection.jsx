import React from 'react';
import ToolPill from '../molecules/ToolPill';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './ToolsSection.css';

export default function ToolsSection({ tools = {} }) {
  const [revealHeaderRef, isHeaderRevealed] = useIntersectionObserver();
  const [revealDesignRef, isDesignRevealed] = useIntersectionObserver();
  const [revealMarketingRef, isMarketingRevealed] = useIntersectionObserver();

  const designTools = tools.design || [];
  const marketingTools = tools.marketing || [];

  return (
    <section id="tools">
      <div ref={revealHeaderRef} className={`section-header reveal ${isHeaderRevealed ? 'visible' : ''}`}>
        <div>
          <p className="section-label">Stack</p>
          <h2 className="section-title">Tools &amp;<br />Platforms</h2>
        </div>
      </div>
      <div className="tools-categories">
        <div ref={revealDesignRef} className={`reveal ${isDesignRevealed ? 'visible' : ''}`}>
          <div className="tool-cat-label">Design &amp; Creative</div>
          <div className="tools-row">
            {designTools.map((tool, idx) => (
              <ToolPill key={idx} name={tool} />
            ))}
          </div>
        </div>
        <div ref={revealMarketingRef} className={`reveal reveal-delay-1 ${isMarketingRevealed ? 'visible' : ''}`}>
          <div className="tool-cat-label">Marketing &amp; Advertising</div>
          <div className="tools-row">
            {marketingTools.map((tool, idx) => (
              <ToolPill key={idx} name={tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
