import './Info.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopButtons from '../components/TopButtons'

export default function Info({ form, upd, resumeFile, handleResumeUpload }) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const err = {};
    if (!form.name.trim()) err.name = true;
    if (!form.email.trim()) err.email = true;
    if (!form.phone.trim()) err.phone = true;
    if (!form.age) err.age = true;
    if (!form.dob) err.dob = true;
    if (!form.address.trim()) err.address = true;
    if (!form.father.trim()) err.father = true;
    if (!form.mother.trim()) err.mother = true;
    if (!form.school.trim()) err.school = true;
    if (!form.course.trim()) err.course = true;
    if (!form.year) err.year = true;
    if (!form.skills.trim()) err.skills = true;
    setErrors(err);
    if (Object.keys(err).length > 0) return;
    localStorage.setItem('candidateForm', JSON.stringify(form));
    navigate('/interview');
  };

  return (
    <div className="profile-wrap">
      <TopButtons />
      <div className="profile-card">
        <h2>Candidate Information</h2>
        <p className="subtitle">Please fill your details carefully. This will make your interview experience more real.</p>

        <div className="section-title">PERSONAL INFORMATION</div>
        <div className="grid2">
          <div className="field"><label>Full Name *</label><input placeholder="John Doe" value={form.name} onChange={e => upd('name', e.target.value)} style={{ borderColor: errors.name ? '#ef4444' : '' }} />{errors.name && <p style={{ color: '#ef4444', fontSize: '11px', marginTop: '5px' }}>Please fill this field first</p>}</div>
          <div className="field"><label>Email Address *</label><input placeholder="john@example.com" value={form.email} onChange={e => upd('email', e.target.value)} style={{ borderColor: errors.email ? '#ef4444' : '' }} />{errors.email && <p style={{ color: '#ef4444', fontSize: '11px', marginTop: '5px' }}>Please fill this field first</p>}</div>
          <div className="field"><label>Contact Number *</label><input placeholder="+91 98765 43210" value={form.phone} onChange={e => upd('phone', e.target.value)} style={{ borderColor: errors.phone ? '#ef4444' : '' }} />{errors.phone && <p style={{ color: '#ef4444', fontSize: '11px', marginTop: '5px' }}>Please fill this field first</p>}</div>
          <div className="field"><label>Age *</label><input placeholder="22" type="number" value={form.age} onChange={e => upd('age', e.target.value)} style={{ borderColor: errors.age ? '#ef4444' : '' }} />{errors.age && <p style={{ color: '#ef4444', fontSize: '11px', marginTop: '5px' }}>Please fill this field first</p>}</div>
          <div className="field"><label>Date of Birth *</label><input type="date" value={form.dob} onChange={e => upd('dob', e.target.value)} style={{ borderColor: errors.dob ? '#ef4444' : '' }} />{errors.dob && <p style={{ color: '#ef4444', fontSize: '11px', marginTop: '5px' }}>Please fill this field first</p>}</div>
          <div className="field"><label>Full Address *</label><input placeholder="City, State" value={form.address} onChange={e => upd('address', e.target.value)} style={{ borderColor: errors.address ? '#ef4444' : '' }} />{errors.address && <p style={{ color: '#ef4444', fontSize: '11px', marginTop: '5px' }}>Please fill this field first</p>}</div>
          <div className="field"><label>Father's Name *</label><input placeholder="Father's name" value={form.father} onChange={e => upd('father', e.target.value)} style={{ borderColor: errors.father ? '#ef4444' : '' }} />{errors.father && <p style={{ color: '#ef4444', fontSize: '11px', marginTop: '5px' }}>Please fill this field first</p>}</div>
          <div className="field"><label>Mother's Name *</label><input placeholder="Mother's name" value={form.mother} onChange={e => upd('mother', e.target.value)} style={{ borderColor: errors.mother ? '#ef4444' : '' }} />{errors.mother && <p style={{ color: '#ef4444', fontSize: '11px', marginTop: '5px' }}>Please fill this field first</p>}</div>
        </div>

        <div className="section-title">ACADEMIC DETAILS</div>
        <div className="grid2">
          <div className="field full"><label>School / College Name *</label><input placeholder="e.g. IIT Jaipur" value={form.school} onChange={e => upd('school', e.target.value)} style={{ borderColor: errors.school ? '#ef4444' : '' }} />{errors.school && <p style={{ color: '#ef4444', fontSize: '11px', marginTop: '5px' }}>Please fill this field first</p>}</div>
          <div className="field"><label>Course / Branch *</label><input placeholder="B.Tech CSE" value={form.course} onChange={e => upd('course', e.target.value)} style={{ borderColor: errors.course ? '#ef4444' : '' }} />{errors.course && <p style={{ color: '#ef4444', fontSize: '11px', marginTop: '5px' }}>Please fill this field first</p>}</div>
          <div className="field"><label>Passing Year *</label><input placeholder="2025" value={form.year} onChange={e => upd('year', e.target.value)} style={{ borderColor: errors.year ? '#ef4444' : '' }} />{errors.year && <p style={{ color: '#ef4444', fontSize: '11px', marginTop: '5px' }}>Please fill this field first</p>}</div>
        </div>
        <div className="section-title">PROFESSIONAL DETAILS</div>
        <div className="grid2">
          <div className="field"><label>Job Role You Want</label>
            <select value={form.jobType} onChange={e => upd('jobType', e.target.value)}>
              <option value="SDE">SDE / Developer</option>
              <option value="WebDev">Web Developer</option>
              <option value="Frontend">Frontend Developer</option>
              <option value="Backend">Backend Developer</option>
              <option value="FullStack">Full Stack Developer</option>
              <option value="DataAnalyst">Data Analyst</option>
              <option value="DataScientist">Data Scientist</option>
              <option value="HR">HR / Human Resource</option>
              <option value="Banking">Banking / Finance</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
              <option value="Finance">Finance / Accounting</option>
              <option value="Consulting">Consulting</option>
              <option value="Operations">Operations</option>
              <option value="ProductManager">Product Manager</option>
              <option value="UIUX">UI/UX Designer</option>
              <option value="Teacher">Teacher / Educator</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="field"><label>Experience Level</label>
            <select value={form.experience} onChange={e => upd('experience', e.target.value)}>
              <option value="fresher">Fresher (0-1 Year)</option>
              <option value="experienced">Experienced (1+ Years)</option>
              <option value="intern">Internship / Student</option>
            </select>
          </div>
          <div className="field full"><label>Key Skills *</label><input placeholder="React, Python, Excel..." value={form.skills} onChange={e => upd('skills', e.target.value)} style={{ borderColor: errors.skills ? '#ef4444' : '' }} />{errors.skills && <p style={{ color: '#ef4444', fontSize: '11px', marginTop: '5px' }}>Please fill this field first</p>}</div>
        </div>
        <div className="section-title">RESUME UPLOAD</div>
        <label className="upload-box">
          <input type="file" hidden onChange={handleResumeUpload} />
          <div style={{ fontSize: '28px' }}>📄</div>
          <div style={{ marginTop: '8px', fontSize: '14px' }}>{resumeFile ? resumeFile.name : "Click to upload resume"}</div>
          <div style={{ fontSize: '12px', color: '#71717a', marginTop: '4px' }}>PDF or DOCX (Max 5MB)</div>
        </label>
        <div className="btn-right">
          <button className="btn-white" onClick={handleNext}>
            Save & Start Interview
          </button>
        </div>
      </div>
    </div>
  )
}