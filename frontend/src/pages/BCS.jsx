function BCS() {
  const topics = [
    { id: 1, name: 'Bangla Literature',        status: 'Done',        progress: 100, questions: 45, color: '#22c55e' },
    { id: 2, name: 'English Grammar',          status: 'In Progress', progress: 65,  questions: 38, color: '#f97316' },
    { id: 3, name: 'Bangladesh Affairs',       status: 'In Progress', progress: 50,  questions: 52, color: '#f97316' },
    { id: 4, name: 'International Affairs',    status: 'Not Started', progress: 0,   questions: 30, color: '#ef4444' },
    { id: 5, name: 'General Science',          status: 'Done',        progress: 100, questions: 40, color: '#22c55e' },
    { id: 6, name: 'Computer & IT',            status: 'In Progress', progress: 80,  questions: 35, color: '#f97316' },
    { id: 7, name: 'Math',                     status: 'Not Started', progress: 0,   questions: 28, color: '#ef4444' },
    { id: 8, name: 'Mental Ability',           status: 'Not Started', progress: 10,  questions: 25, color: '#ef4444' },
  ]

  function getStatusStyle(status) {
    if (status === 'Done')        return { bg: '#22c55e22', color: '#22c55e' }
    if (status === 'In Progress') return { bg: '#f9731622', color: '#f97316' }
    return                               { bg: '#ef444422', color: '#ef4444' }
  }

  const totalProgress = Math.round(
    topics.reduce((sum, t) => sum + t.progress, 0) / topics.length
  )
  const done       = topics.filter(t => t.status === 'Done').length
  const inProgress = topics.filter(t => t.status === 'In Progress').length
  const notStarted = topics.filter(t => t.status === 'Not Started').length

  return (
    <div>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 style={{ color: '#fff', fontWeight: 'bold' }}>🎯 BCS Prep</h2>
          <p style={{ color: '#aaa' }}>Track your BCS syllabus topic by topic.</p>
        </div>
        <button
          className="btn"
          style={{ backgroundColor: '#7c6af7', color: '#fff', borderRadius: '10px', padding: '10px 20px' }}
        >
          + Add Topic
        </button>
      </div>

      {/* Summary Cards */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div style={{ backgroundColor: '#1a1d27', border: '1px solid #2a2d3e', borderRadius: '12px', padding: '16px' }}>
            <div style={{ color: '#aaa', fontSize: '0.85rem' }}>Overall Progress</div>
            <div style={{ color: '#7c6af7', fontSize: '1.8rem', fontWeight: 'bold' }}>{totalProgress}%</div>
          </div>
        </div>
        <div className="col-md-3">
          <div style={{ backgroundColor: '#1a1d27', border: '1px solid #2a2d3e', borderRadius: '12px', padding: '16px' }}>
            <div style={{ color: '#aaa', fontSize: '0.85rem' }}>Completed</div>
            <div style={{ color: '#22c55e', fontSize: '1.8rem', fontWeight: 'bold' }}>{done} topics</div>
          </div>
        </div>
        <div className="col-md-3">
          <div style={{ backgroundColor: '#1a1d27', border: '1px solid #2a2d3e', borderRadius: '12px', padding: '16px' }}>
            <div style={{ color: '#aaa', fontSize: '0.85rem' }}>In Progress</div>
            <div style={{ color: '#f97316', fontSize: '1.8rem', fontWeight: 'bold' }}>{inProgress} topics</div>
          </div>
        </div>
        <div className="col-md-3">
          <div style={{ backgroundColor: '#1a1d27', border: '1px solid #2a2d3e', borderRadius: '12px', padding: '16px' }}>
            <div style={{ color: '#aaa', fontSize: '0.85rem' }}>Not Started</div>
            <div style={{ color: '#ef4444', fontSize: '1.8rem', fontWeight: 'bold' }}>{notStarted} topics</div>
          </div>
        </div>
      </div>

      {/* Topic Cards */}
      <div className="row g-3">
        {topics.map((topic) => {
          const status = getStatusStyle(topic.status)
          return (
            <div className="col-md-6" key={topic.id}>
              <div style={{
                backgroundColor: '#1a1d27',
                border: '1px solid #2a2d3e',
                borderRadius: '14px',
                padding: '20px',
              }}>
                {/* Topic name + status */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 style={{ color: '#fff', fontWeight: 'bold', margin: 0 }}>{topic.name}</h6>
                  <span style={{
                    backgroundColor: status.bg,
                    color: status.color,
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    padding: '4px 10px',
                    borderRadius: '20px',
                  }}>
                    {topic.status}
                  </span>
                </div>

                {/* Questions count */}
                <p style={{ color: '#aaa', fontSize: '0.82rem', marginBottom: '12px' }}>
                  📝 {topic.questions} previous questions
                </p>

                {/* Progress bar */}
                <div>
                  <div className="d-flex justify-content-between mb-1">
                    <span style={{ color: '#aaa', fontSize: '0.8rem' }}>Progress</span>
                    <span style={{ color: '#fff', fontSize: '0.8rem' }}>{topic.progress}%</span>
                  </div>
                  <div style={{ height: '6px', backgroundColor: '#2a2d3e', borderRadius: '3px' }}>
                    <div style={{
                      height: '100%',
                      width: `${topic.progress}%`,
                      backgroundColor: topic.color,
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

export default BCS