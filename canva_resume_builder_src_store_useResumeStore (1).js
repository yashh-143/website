import { create } from 'zustand';

export const useResumeStore = create((set) => ({
  resumeData: {
    templateId: 't1',
    personal: { fullName: 'Yashwant', email: 'yash@example.com', phone: '+91 93530 62247', location: 'India', jobTitle: 'Senior Frontend Engineer' },
    summary: 'Expert in React, Tailwind, and Cloud Architecture with a focus on SaaS development.',
    experience: [
      { id: '1', company: 'GM HOMEZ', role: 'Lead Developer', duration: '2024 - Present', desc: 'Leading UI/UX architecture and brand development.' }
    ],
    education: [{ id: '1', school: 'University of Technology', degree: 'Computer Science', year: '2022' }],
    skills: ['React', 'Node.js', 'Tailwind CSS', 'Supabase', 'Cloud Hosting'],
    projects: [{ id: '1', name: 'Open Momo Foods', desc: 'Complete brand and digital presence management.' }],
    theme: { color: '#2563eb', font: 'font-sans' },
  },
  updatePersonal: (field, value) => set((state) => ({
    resumeData: { ...state.resumeData, personal: { ...state.resumeData.personal, [field]: value } }
  })),
  setTemplate: (id) => set((state) => ({
    resumeData: { ...state.resumeData, templateId: id }
  })),
  updateSummary: (val) => set((state) => ({
    resumeData: { ...state.resumeData, summary: val }
  })),
}));