import React, { useRef } from 'react';
import { useResumeStore } from './store/useResumeStore';
import { downloadPDF } from './utils/pdfGenerator';
import { TEMPLATE_LIST } from './templates';
import { Download, Layout } from 'lucide-react';

function App() {
  const { resumeData, setTemplate, updatePersonal, updateSummary } = useResumeStore();
  const resumeRef = useRef();

  const SelectedTemplate = TEMPLATE_LIST.find(t => t.id === resumeData.templateId)?.component || TEMPLATE_LIST[0].component;

  return (
    <div className="flex flex-col h-screen bg-slate-100 overflow-hidden font-sans">
      <nav className="h-14 bg-white border-b px-6 flex items-center justify-between z-10 shadow-sm">
        <div className="font-black text-xl text-blue-600 tracking-tighter italic">RESUME.PRO</div>
        <button 
          onClick={() => downloadPDF(resumeRef)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-bold hover:bg-blue-700 transition-all shadow-md"
        >
          <Download size={18} /> Download PDF
        </button>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Editor */}
        <aside className="w-80 bg-white border-r overflow-y-auto p-6 space-y-6">
          <section>
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-4">Personal Info</h3>
            <input 
              className="w-full border p-2 rounded mb-2 text-sm" 
              placeholder="Full Name" 
              value={resumeData.personal.fullName}
              onChange={(e) => updatePersonal('fullName', e.target.value)}
            />
            <input 
              className="w-full border p-2 rounded mb-2 text-sm" 
              placeholder="Job Title" 
              value={resumeData.personal.jobTitle}
              onChange={(e) => updatePersonal('jobTitle', e.target.value)}
            />
          </section>
          
          <section>
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-4">Summary</h3>
            <textarea 
              className="w-full border p-2 rounded text-sm h-32" 
              value={resumeData.summary}
              onChange={(e) => updateSummary(e.target.value)}
            />
          </section>

          <section>
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-4">Templates</h3>
            <div className="grid grid-cols-1 gap-2">
              {TEMPLATE_LIST.map(t => (
                <button 
                  key={t.id}
                  onClick={() => setTemplate(t.id)}
                  className={`text-left p-3 rounded-lg text-xs font-bold border transition-all ${resumeData.templateId === t.id ? 'bg-blue-50 border-blue-600 text-blue-600' : 'bg-slate-50 border-transparent hover:border-slate-300'}`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </section>
        </aside>

        {/* Live Preview */}
        <main className="flex-1 bg-slate-200 overflow-y-auto p-12 flex justify-center">
          <div className="transform origin-top transition-transform duration-500">
             <SelectedTemplate data={resumeData} reference={resumeRef} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;