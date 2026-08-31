import './Profile.css'
import { useNavigate } from 'react-router-dom'
import TopButtons from '../components/TopButtons'

export default function Profile({ form, upd }) {
  const navigate = useNavigate();
  return (
    <div className="profile-wrap">
      <TopButtons />
      <div className="profile-card">
        <h2>My Profile</h2>
        <p className="subtitle">View and edit your information here.</p>
        <div className="grid2">
          <div className="field"><label>Full Name *</label><input value={form.name} onChange={e => upd('name', e.target.value)} /></div>
          <div className="field"><label>Email Address *</label><input value={form.email} onChange={e => upd('email', e.target.value)} /></div>
          <div className="field"><label>Contact Number *</label><input value={form.phone} onChange={e => upd('phone', e.target.value)} /></div>
          <div className="field"><label>Age *</label><input type="number" value={form.age} onChange={e => upd('age', e.target.value)} /></div>
          <div className="field"><label>Date of Birth *</label><input type="date" value={form.dob} onChange={e => upd('dob', e.target.value)} /></div>
          <div className="field"><label>Full Address *</label><input value={form.address} onChange={e => upd('address', e.target.value)} /></div>
          <div className="field"><label>Father's Name *</label><input value={form.father} onChange={e => upd('father', e.target.value)} /></div>
          <div className="field"><label>Mother's Name *</label><input value={form.mother} onChange={e => upd('mother', e.target.value)} /></div>
          <div className="field full"><label>School / College Name *</label><input value={form.school} onChange={e => upd('school', e.target.value)} /></div>
          <div className="field"><label>Course / Branch *</label><input value={form.course} onChange={e => upd('course', e.target.value)} /></div>
          <div className="field"><label>Passing Year *</label><input value={form.year} onChange={e => upd('year', e.target.value)} /></div>
          <div className="field full"><label>Key Skills *</label><input value={form.skills} onChange={e => upd('skills', e.target.value)} /></div>
        </div>
        <div className="btn-right" style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
          <button className="btn-white" style={{ background: 'transparent', border: '1px solid var(--border)', color: 'var(--text-main)' }} onClick={() => navigate(-1)}>Back</button>
          <button style={{ padding: '10px 18px', borderRadius: '8px', border: '1px solid #ff4d4d', background: 'transparent', color: '#ff4d4d', cursor: 'pointer', fontWeight: '600' }}
            onClick={() => {
              if (window.confirm('Are you sure you want to logout?')) {
                localStorage.removeItem('candidateForm');
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('candidateResumeText');
                navigate('/');
              }
            }}>
            Logout
          </button>
          <button className="btn-white" onClick={() => { localStorage.setItem('candidateForm', JSON.stringify(form)); alert('Profile Updated!'); }}>Save Changes</button>
        </div>
      </div>
    </div>
  )
}