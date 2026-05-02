
import React from 'react';

export const DarkProTemplate = ({ data, reference }) => (
  <div ref={reference} className="bg-white shadow-2xl min-h-[1123px] w-[794px] mx-auto overflow-hidden bg-[#0f172a] text-slate-300 p-12 border-l-4 border-cyan-400">
    <div className="p-8">
      <h1 className="text-4xl font-bold uppercase mb-2">{data.personal.fullName}</h1>
      <p className="text-xl opacity-70 mb-4">{data.personal.jobTitle}</p>
      <div className="h-px bg-slate-200 mb-6" />
      <p className="mb-8 leading-relaxed">{data.summary}</p>
      <h2 className="font-black text-xs tracking-widest uppercase mb-4 border-b pb-2 opacity-50">Experience</h2>
      {data.experience.map(exp => (
        <div key={exp.id} className="mb-4">
          <div className="flex justify-between font-bold">
            <span>{exp.role}</span>
            <span className="text-xs text-slate-400 italic">{exp.duration}</span>
          </div>
          <p className="text-sm font-semibold opacity-60 mb-2">{exp.company}</p>
          <p className="text-xs">{exp.desc}</p>
        </div>
      ))}
    </div>
  </div>
);
