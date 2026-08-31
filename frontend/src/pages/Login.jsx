import './Login.css'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../ThemeContext'
export default function Login() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [loginErrors, setLoginErrors] = useState({})
  return (
    <div className="welcome-wrap">
      <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 100 }}>
        <button onClick={toggleTheme} className="theme-btn-glass">{theme === 'dark' ? '☀️ Light' : '🌙 Dark'}</button>
      </div>
      <div className="welcome-card" style={{ maxWidth: '420px', textAlign: 'left', padding: '36px' }}>
        <h2 style={{ textAlign: 'center', color: 'var(--text-main)', margin: '0 0 8px 0' }}>Welcome Back</h2>
        <p className="subtitle" style={{ marginBottom: '28px' }}>Login to continue your interview journey</p>
        <div className="field">
          <label>Email Address</label>
          <input placeholder="you@example.com" type="email" value={loginForm.email} onChange={e => setLoginForm({ ...loginForm, email: e.target.value })} style={{ borderColor: loginErrors.email ? '#ef4444' : '' }} />
          {loginErrors.email && <p style={{ color: '#ef4444', fontSize: '11px', marginTop: '5px' }}>Please fill this field first</p>}
        </div>
        <div className="field" style={{ marginTop: '16px' }}>
          <label>Password</label>
          <input placeholder="••••••••" type="password" value={loginForm.password} onChange={e => setLoginForm({ ...loginForm, password: e.target.value })} style={{ borderColor: loginErrors.password ? '#ef4444' : '' }} />
          {loginErrors.password && <p style={{ color: '#ef4444', fontSize: '11px', marginTop: '5px' }}>Please fill this field first</p>}
        </div>
        <div className="btn-right" style={{ marginTop: '24px' }}>
          <button className="btn-white" style={{ width: '100%', justifyContent: 'center' }} onClick={() => {
            const err = {};
            if (!loginForm.email.trim()) err.email = true;
            if (!loginForm.password.trim()) err.password = true;
            setLoginErrors(err);
            if (Object.keys(err).length > 0) {
              alert("Please fill in all required fields before proceeding. This form is mandatory to continue.");
              return;
            }
            navigate('/info');
          }}>Login →</button>
        </div>
      </div>
    </div>
  )
}