import './Interview.css'
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { getQuestionsByRole } from '../data/questions.js'

export default function InterviewPage() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [currentAns, setCurrentAns] = useState("");

  const savedForm = JSON.parse(localStorage.getItem('candidateForm') || '{}');
  const jobType = savedForm.jobType || 'SDE';

  const allQuestions = getQuestionsByRole(jobType);

  useEffect(() => {
    let mounted = true;
    async function startCam() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (!mounted) { stream.getTracks().forEach(t => t.stop()); return; }
        streamRef.current = stream;
        if (videoRef.current) videoRef.current.srcObject = stream;
      } catch (err) {
        console.log("Camera error:", err)
      }
    }
    startCam();
    return () => {
      mounted = false;
      if (videoRef.current) { videoRef.current.pause(); videoRef.current.srcObject = null; }
      if (streamRef.current) { streamRef.current.getTracks().forEach(track => { track.enabled = false; track.stop(); }); streamRef.current = null; }
    }
  }, []);

  const handleNext = () => {
    const updatedAnswers = [...answers];
    updatedAnswers[qIndex] = currentAns;
    setAnswers(updatedAnswers);
    localStorage.setItem('interviewAnswers', JSON.stringify(updatedAnswers));

    setCurrentAns("");
    if (qIndex < allQuestions.length - 1) setQIndex(qIndex + 1);
    else {
      if (videoRef.current) { videoRef.current.pause(); videoRef.current.srcObject = null; }
      if (streamRef.current) { streamRef.current.getTracks().forEach(t => { t.enabled = false; t.stop(); }); streamRef.current = null; }
      navigate('/report');
    }
  }

  return (
    <div className="profile-wrap">
      <div className="profile-card" style={{ maxWidth: '900px' }}>
        <span className="ai-pill">AI INTERVIEW - {jobType}</span>
        <h2 style={{ marginTop: '16px' }}>Interview Session</h2>
        <p className="subtitle">Question {qIndex + 1} of {allQuestions.length}</p>
        <div style={{ marginTop: '30px', background: 'var(--input-bg)', border: '1px solid var(--border)', borderRadius: '16px', padding: '20px' }}>
          <p style={{ fontSize: '10px', letterSpacing: '1.4px', color: '#a78bfa', fontWeight: 700 }}>QUESTION {qIndex + 1} / {allQuestions.length}</p>
          <h3 style={{ color: 'var(--text-main)', marginTop: '10px' }}>{allQuestions[qIndex]}</h3>
        </div>
        <div className="grid2" style={{ marginTop: '20px' }}>
          <div style={{ background: 'var(--input-bg)', border: '1px solid var(--border)', borderRadius: '16px', height: '220px', overflow: 'hidden', position: 'relative' }}>
            <video ref={videoRef} autoPlay playsInline muted style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)' }} />
            <div style={{ position: 'absolute', bottom: '8px', left: '10px', fontSize: '10px', background: 'red', color: 'white', padding: '2px 6px', borderRadius: '4px' }}>● REC</div>
          </div>
          <div style={{ background: 'var(--input-bg)', border: '1px solid var(--border)', borderRadius: '16px', padding: '16px' }}>
            <label style={{ fontSize: '11px', color: 'var(--text-muted)' }}>YOUR ANSWER</label>
            <textarea value={currentAns} onChange={e => setCurrentAns(e.target.value)} style={{ width: '100%', height: '140px', background: 'transparent', border: 'none', color: 'var(--text-main)', outline: 'none', resize: 'none', marginTop: '10px' }} placeholder="Type your answer here..."></textarea>
          </div>
        </div>
        <div className="btn-right">
          <button className="btn-white" onClick={handleNext}>{qIndex === allQuestions.length - 1 ? 'Finish →' : 'Next Question →'}</button>
        </div>
      </div>
    </div>
  )
}