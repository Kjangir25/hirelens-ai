import './Report.css'
import { useNavigate } from 'react-router-dom'

export default function ReportPage() {
  const navigate = useNavigate();
  const savedForm = JSON.parse(localStorage.getItem('candidateForm') || '{}');
  const answers = JSON.parse(localStorage.getItem('interviewAnswers') || '[]');
  const resumeText = localStorage.getItem('candidateResumeText');
  const resumeName = localStorage.getItem('candidateResumeName');

  const unanswered = answers.filter(a =>!a || a.trim().length < 2).length;
  const answered = answers.length > 0? answers.length - unanswered : 0;
  const total = answers.length || 8;

  const getResumeReport = () => {
    if (!resumeText) return null;
    const mistakes = [];
    if (resumeText.length < 50) mistakes.push("Resume content is too short. Add more details.");
    if (!resumeText.toLowerCase().includes("project")) mistakes.push("Projects section missing. Add at least 2 projects.");
    if (resumeText.includes("teh") || resumeText.includes("acheive")) mistakes.push("Spelling mistake found. Use Grammarly to fix.");
    if (mistakes.length === 0) mistakes.push("Resume looks good! Just add LinkedIn/GitHub links for better impact.");
    return mistakes;
  };

  const resumeReport = getResumeReport();

  return (
    <div className="profile-wrap">
      <div className="profile-card">
        <span className="ai-pill">INTERVIEW COMPLETED</span>
        <h2 style={{ marginTop: '16px', color:'var(--text-main)' }}>Your Report - {savedForm.name}</h2>

        {/* INTERVIEW REPORT */}
        <h3 style={{marginTop:'20px', color:'var(--text-main)'}}>🎤 Interview Analysis</h3>
        <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px', marginTop:'10px' }}>
          <p style={{color:'var(--text-main)'}}><b>Total Questions:</b> {total}</p>
          <p style={{color:'var(--text-main)', marginTop:'6px'}}><b>Answered:</b> {answered}</p>
          <p style={{color:'var(--text-main)', marginTop:'6px'}}><b>Skipped / Empty:</b> {unanswered}</p>
          
          {unanswered > 0 && (
            <div style={{background:'#fee2e2', border:'1px solid #fecaca', color:'#991b1b', padding:'12px', borderRadius:'8px', marginTop:'12px', fontSize:'13px'}}>
              ❌ Aapne {unanswered} questions ka answer nahi diya. Isse aapka confidence score low hoga.<br/>
              <b>Solution:</b> Har sawal ka kuch na kuch jawab do, chup mat raho. "I will learn this" bhi bol sakte ho.
            </div>
          )}
          <div style={{marginTop:'14px', display:'flex', flexDirection:'column', gap:'6px'}}>
            <p style={{color:'var(--text-main)'}}><b>Confidence:</b> {answered === 0? '0% (No answer given)' : `${Math.max(20, (answered*12))}%`}</p>
            <p style={{color:'var(--text-main)'}}><b>Communication:</b> {answered === 0? 'Poor - No response detected' : answered < 4? 'Average - Try to speak more' : 'Good'}</p>
            <p style={{color:'var(--text-main)'}}><b>Expression:</b> {answered === 0? 'Not detected - Camera pe koi response nahi mila' : 'Average - Eye contact improve karo'}</p>
          </div>
        </div>

        {/* RESUME REPORT */}
        <h3 style={{marginTop:'25px', color:'var(--text-main)'}}>📄 Resume Analysis</h3>
        <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px', marginTop:'10px' }}>
          {!resumeText? (
            <p style={{color:'#ef4444', fontWeight:'600', fontSize:'14px'}}>⚠️ Resume not uploaded, so its report is not available. Please upload resume in profile section to get full analysis.</p>
          ) : (
            <>
              <p style={{color:'var(--text-main)'}}><b>File:</b> {resumeName}</p>
              {resumeReport.map((m,i) => (
                <p key={i} style={{fontSize:'13px', marginTop:'8px', color:'var(--text-main)'}}>• {m}</p>
              ))}
              <p style={{fontSize:'12px', color:'var(--text-muted)', marginTop:'10px'}}>Solution: Resume ko PDF me export karo, proper headings use karo, spelling Grammarly se check karo.</p>
            </>
          )}
        </div>

        <div className="btn-right" style={{ marginTop: '30px', display:'flex', gap:'10px', justifyContent:'flex-end' }}>
          <button className="btn-white" style={{background:'transparent', border:'1px solid var(--border)', color:'var(--text-main)'}} onClick={() => navigate('/info')}>Re-Interview</button>
          <button className="btn-white" onClick={() => navigate('/')}>Go to Home →</button>
        </div>
      </div>
    </div>
  )
}


