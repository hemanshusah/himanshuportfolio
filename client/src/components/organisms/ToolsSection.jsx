import React from 'react';
import ToolPill from '../molecules/ToolPill';

export default function ToolsSection({ tools = {} }) {
  const designTools = tools.design || [];
  const marketingTools = tools.marketing || [];
  const operationsTools = tools.operations || [];

  return (
    <section id="tools">
      <div className="section-header reveal">
        <div>
          <p className="section-label">Stack</p>
          <h2 className="section-title">Tools &amp;<br />Platforms</h2>
        </div>
      </div>
      <div className="tools-categories">
        <div className="reveal">
          <div className="tool-cat-label">Design &amp; Creative</div>
          <div className="tools-row">
            {designTools.map((tool, idx) => (
              <ToolPill key={idx} name={tool} />
            ))}
          </div>
        </div>
        <div className="reveal reveal-delay-1">
          <div className="tool-cat-label">Marketing &amp; Advertising</div>
          <div className="tools-row">
            {marketingTools.map((tool, idx) => (
              <ToolPill key={idx} name={tool} />
            ))}
          </div>
        </div>
        <div className="reveal reveal-delay-2">
          <div className="tool-cat-label">Productivity, CRM &amp; Operations</div>
          <div className="tools-row">
            {operationsTools.map((tool, idx) => (
              <ToolPill key={idx} name={tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
