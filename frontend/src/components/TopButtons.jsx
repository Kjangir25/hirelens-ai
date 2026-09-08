import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../ThemeContext'
import './TopButtons.css'

export default function TopButtons() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const navigate = useNavigate();
  const savedData = JSON.parse(localStorage.getItem('candidateForm') || 'null');
  return (
    <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 100, display: 'flex', gap: '12px', alignItems: 'center' }}>
      <button onClick={toggleTheme} className="theme-btn-glass">
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>
      {savedData?.name && (
        <button onClick={() => navigate('/profile')} title="My Profile"
          style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--card-bg)', color: 'var(--text-main)', border: '1px solid var(--border)', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', fontWeight: '800', cursor: 'pointer', fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {savedData.name[0].toUpperCase()}
        </button>
      )}
    </div>
  )
}