export const COMPULSORY_QUESTIONS = [
  "Tell me about yourself?",
  "What are your strengths and weaknesses?",
  "Why should we hire you?"
];

export const ROLE_QUESTIONS = {
  SDE: ["Explain your best project?", "What is closure in JS?", "What is diff SQL & NoSQL?", "How do you debug production?", "Explain OOPs?"],
  WebDev: ["What is DOM?", "Explain box model?", "What is REST API?", "How to optimize performance?", "Flex vs Grid?"],
  Frontend: ["What is Virtual DOM?", "Explain useEffect?", "What is Redux?", "Responsive design?", "What is SSR?"],
  Backend: ["What is middleware?", "Explain JWT?", "What is indexing?", "How to handle scaling?", "Microservices?"],
  FullStack: ["What is MERN?", "State management?", "Explain auth?", "How to deploy?", "CI/CD?"],
  HR: ["Where do you see yourself in 5 years?", "How handle conflict?", "Recruitment process?", "Motivate team?", "Difficult situation?"],
  DataAnalyst: ["What is SQL JOIN?", "Explain pivot?", "Data cleaning?", "A/B testing?", "Visualize data?"],
  DataScientist: ["What is overfitting?", "ML lifecycle?", "Precision vs recall?", "Decision tree?", "Clean data?"],
  Other: ["Key skills?", "Challenge faced?", "Stay updated?", "Why this career?", "Biggest achievement?"]
};

export const getQuestionsByRole = (role) => {
  return [...COMPULSORY_QUESTIONS, ...(ROLE_QUESTIONS[role] || ROLE_QUESTIONS.Other).slice(0, 5)];
};

