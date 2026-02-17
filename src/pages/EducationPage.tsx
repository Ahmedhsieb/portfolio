import React from 'react';
import { GlitchText } from '../components/GlitchText';
import { cvData } from '../data/cvData';
export function EducationPage() {
  return (
    <main className="min-h-screen w-full px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-neon-green font-mono">$ </span>
            <GlitchText as="span" className="text-neon-cyan">
              cat education.log
            </GlitchText>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-neon-magenta" />
        </div>

        <div className="space-y-6">
          {cvData.education.map((edu) =>
          <article
            key={`${edu.institution}-${edu.degree}`}
            className="border border-neon-cyan/30 bg-dark-secondary p-6 hover:border-neon-magenta/50 transition-colors">

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-neon-cyan font-mono mb-2">
                    {edu.institution}
                  </h2>
                  <p className="text-neon-green font-mono">{edu.degree}</p>
                </div>
                <span className="text-text-muted font-mono text-sm mt-2 sm:mt-0">
                  {edu.period}
                </span>
              </div>

              <ul className="space-y-2" role="list">
                {edu.details.map((detail, index) =>
              <li key={index} className="flex items-start text-text-muted">
                    <span
                  className="text-neon-green mr-3 flex-shrink-0"
                  aria-hidden="true">

                      ▹
                    </span>
                    <span>{detail}</span>
                  </li>
              )}
              </ul>
            </article>
          )}
        </div>

        <div className="mt-12 border border-neon-magenta/30 bg-dark-secondary p-6">
          <h2 className="text-2xl font-bold text-neon-green font-mono mb-4">
            <span className="text-neon-cyan">&gt;</span> Academic Achievements
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border-l-2 border-neon-cyan pl-4">
              <div className="text-neon-cyan text-xl font-bold font-mono">
                3.9/4.0
              </div>
              <div className="text-text-muted text-sm">GPA</div>
            </div>
            <div className="border-l-2 border-neon-magenta pl-4">
              <div className="text-neon-magenta text-xl font-bold font-mono">
                Dean's List
              </div>
              <div className="text-text-muted text-sm">All Semesters</div>
            </div>
            <div className="border-l-2 border-neon-green pl-4">
              <div className="text-neon-green text-xl font-bold font-mono">
                Published
              </div>
              <div className="text-text-muted text-sm">Senior Thesis</div>
            </div>
            <div className="border-l-2 border-neon-cyan pl-4">
              <div className="text-neon-cyan text-xl font-bold font-mono">
                Top 5%
              </div>
              <div className="text-text-muted text-sm">Class Ranking</div>
            </div>
          </div>
        </div>
      </div>
    </main>);

}