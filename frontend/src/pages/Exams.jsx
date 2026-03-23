function Exams() {
  const exams = [
    { id: 1, subject: 'Data Structures Final',       date: 'Apr 10, 2026', days: 19, progress: 60, color: '#f97316' },
    { id: 2, subject: 'BCS Preliminary',             date: 'Apr 25, 2026', days: 34, progress: 30, color: '#22c55e' },
    { id: 3, subject: 'Computer Networks Mid',       date: 'Mar 30, 2026', days: 8,  progress: 85, color: '#ef4444' },
    { id: 4, subject: 'Blockchain Research Defense', date: 'May 5, 2026',  days: 44, progress: 20, color: '#3b82f6' },
  ]

  function getUrgency(days) {
    if (days <= 10) return { label: 'Urgent',      bg: '#ef444422', color: '#ef4444' }
    if (days <= 21) return { label: 'Soon',        bg: '#f9731622', color: '#f97316' }
    return             { label: 'Comfortable',     bg: '#22c55e22', color: '#22c55e' }
  }

  return (
    <div>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 style={{ color: '#fff', fontWeight: 'bold' }}>📅 Upcoming Exams</h2>
          <p style={{ color: '#aaa' }}>Track your exams and syllabus progress.</p>
        </div>
        <button
          className="btn"
          style={{ backgroundColor: '#7c6af7', color: '#fff', borderRadius: '10px', padding: '10px 20px' }}
        >
          + Add Exam
        </button>
      </div>

      {/* Exam Cards Grid */}
      <div className="row g-4">
        {exams.map((exam) => {
          const urgency = getUrgency(exam.days)
          return (
            <div className="col-md-6" key={exam.id}>
              <div style={{
                backgroundColor: '#1a1d27',
                border: '1px solid #2a2d3e',
                borderRadius: '14px',
                padding: '24px',
              }}>
                {/* Subject + urgency badge */}
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h5 style={{ color: '#fff', fontWeight: 'bold', margin: 0 }}>{exam.subject}</h5>
                  <span style={{
                    backgroundColor: urgency.bg,
                    color: urgency.color,
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    whiteSpace: 'nowrap',
                    marginLeft: '10px',
                  }}>
                    {urgency.label}
                  </span>
                </div>

                {/* Date */}
                <p style={{ color: '#aaa', fontSize: '0.85rem', marginBottom: '16px' }}>
                  📆 {exam.date}
                </p>

                {/* Days left */}
                <div style={{ marginBottom: '16px' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: exam.color, lineHeight: 1 }}>
                    {exam.days}
                  </span>
                  <span style={{ color: '#aaa', marginLeft: '8px', fontSize: '0.9rem' }}>days left</span>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="d-flex justify-content-between mb-1">
                    <span style={{ color: '#aaa', fontSize: '0.8rem' }}>Syllabus covered</span>
                    <span style={{ color: '#fff', fontSize: '0.8rem' }}>{exam.progress}%</span>
                  </div>
                  <div style={{ height: '6px', backgroundColor: '#2a2d3e', borderRadius: '3px' }}>
                    <div style={{
                      height: '100%',
                      width: `${exam.progress}%`,
                      backgroundColor: exam.color,
                      borderRadius: '3px',
                    }} />
                  </div>
                </div>

              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Exams