import './Welcome.css'
import { useNavigate } from 'react-router-dom'
import TopButtons from '../components/TopButtons'
export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="welcome-wrap">
      <TopButtons />
      <div className="welcome-card">
        <p className="ai-pill">AI POWERED INTERVIEW SIMULATOR</p>
        <h1>Welcome to <br /><span className="purple">HireLens AI</span></h1>
        <p className="small-text">Practice real interviews. Get your resume analyzed and receive instant feedback on confidence, eye contact and posture.</p>
        <div className="btn-right">
          <button className="btn-white" onClick={() => navigate('/login')}>Let's Start →</button>
        </div>
      </div>
    </div>
  )
}