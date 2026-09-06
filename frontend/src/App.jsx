import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import { ThemeProvider } from './ThemeContext'
import Welcome from './pages/Welcome'
import Info from './pages/Info'
import Profile from './pages/Profile'
import InterviewPage from './pages/Interview'
import ReportPage from './pages/Report'
import './App.css'

function AppContent() {
  const [form, setForm] = useState(() => {
    const saved = localStorage.getItem('candidateForm');
    return saved? JSON.parse(saved) : {
      name: '', email: '', phone: '', age: '', dob: '',
      address: '', father: '', mother: '', school: '',
      course: '', year: '', skills: '', jobType: 'Full-time', experience: 'fresher'
    };
  });
  const [resumeFile, setResumeFile] = useState(null)

  const upd = (key, value) => {
    setForm(prev => {
      const updated = {...prev, [key]: value };
      localStorage.setItem('candidateForm', JSON.stringify(updated));
      return updated;
    });
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setResumeFile(file);
    const reader = new FileReader();
    reader.onload = (event) => {
      localStorage.setItem('candidateResumeText', event.target.result.slice(0, 5000));
      localStorage.setItem('candidateResumeName', file.name);
    };
    reader.readAsText(file);
  };

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/info" element={<Info form={form} upd={upd} resumeFile={resumeFile} handleResumeUpload={handleResumeUpload} />} />
      <Route path="/profile" element={<Profile form={form} upd={upd} />} />
      <Route path="/interview" element={<InterviewPage />} />
      <Route path="/report" element={<ReportPage />} />
    </Routes>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  )
}