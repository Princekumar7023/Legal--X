import React, { useState } from "react";
import "./CasePrediction.css"; // Assuming the CSS is moved to a separate file.

const CasePrediction: React.FC = () => {
  const [caseType, setCaseType] = useState("1");
  const [lawyerName, setLawyerName] = useState("");
  const [judgeName, setJudgeName] = useState("");
  const [lawyerSuccessRate, setLawyerSuccessRate] = useState("");
  const [clientHistory, setClientHistory] = useState("1");
  const [evidenceStrength, setEvidenceStrength] = useState(50); // Default slider value
  const [winProbability, setWinProbability] = useState<number | null>(null);

  const handlePrediction = () => {
    if (!lawyerName || !judgeName || !lawyerSuccessRate) {
      alert("Please fill in all required fields.");
      return;
    }

    const prediction = (parseFloat(lawyerSuccessRate) / 100) * (evidenceStrength / 100) * 100;
    setWinProbability(prediction);
  };

  return (
    <div className="container">
      <h1>Legal Case Outcome Predictor</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlePrediction();
        }}
      >
        <label htmlFor="case_type">Case Type</label>
        <select id="case_type" value={caseType} onChange={(e) => setCaseType(e.target.value)}>
          <option value="1">Criminal</option>
          <option value="2">Civil</option>
          <option value="3">Family</option>
        </select>

        <label htmlFor="lawyer_name">Lawyer Name</label>
        <input
          type="text"
          id="lawyer_name"
          value={lawyerName}
          onChange={(e) => setLawyerName(e.target.value)}
          placeholder="Enter lawyer's name"
          required
        />

        <label htmlFor="judge_name">Judge Name</label>
        <input
          type="text"
          id="judge_name"
          value={judgeName}
          onChange={(e) => setJudgeName(e.target.value)}
          placeholder="Enter judge's name"
          required
        />

        <label htmlFor="lawyer_success_rate">Lawyer Success Rate (%)</label>
        <input
          type="number"
          id="lawyer_success_rate"
          value={lawyerSuccessRate}
          onChange={(e) => setLawyerSuccessRate(e.target.value)}
          placeholder="e.g., 85"
          required
        />

        <label htmlFor="client_history">Client History</label>
        <select id="client_history" value={clientHistory} onChange={(e) => setClientHistory(e.target.value)}>
          <option value="1">Favorable</option>
          <option value="0">Unfavorable</option>
        </select>

        <label htmlFor="evidence_strength">Evidence Strength</label>
        <input
          type="range"
          id="evidence_strength"
          value={evidenceStrength}
          onChange={(e) => setEvidenceStrength(parseInt(e.target.value))}
          min="0"
          max="100"
          className="slider"
        />

        <label htmlFor="case_documents">Upload Case Documents</label>
        <input type="file" id="case_documents" multiple />

        <button type="submit">Predict</button>
      </form>

      {winProbability !== null && (
        <div className="result">
          Win Probability: <span>{winProbability.toFixed(2)}%</span>
        </div>
      )}
    </div>
  );
};

export default CasePrediction;
