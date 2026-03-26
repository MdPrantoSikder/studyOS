function Analytics() {
  const weeklyHours = [
    { day: 'Mon', hours: 4 },
    { day: 'Tue', hours: 6 },
    { day: 'Wed', hours: 3 },
    { day: 'Thu', hours: 7 },
    { day: 'Fri', hours: 5 },
    { day: 'Sat', hours: 8 },
    { day: 'Sun', hours: 2 },
  ]

  const subjects = [
    { name: 'Data Structures', hours: 24, color: '#7c6af7', percent: 85 },
    { name: 'BCS Prep',        hours: 18, color: '#22c55e', percent: 65 },
    { name: 'Networks',        hours: 12, color: '#3b82f6', percent: 45 },
    { name: 'Blockchain',      hours: 10, color: '#f97316', percent: 38 },
  ]

  const maxHours = Math.max(...weeklyHours.map(d => d.hours))
  const totalHours = weeklyHours.reduce((sum, d) => sum + d.hours, 0)

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <h2 style={{ color: '#fff', fontWeight: 'bold' }}>📈 Analytics</h2>
        <p style={{ color: '#aaa' }}>Your study performance at a glance.</p>
      </div>

      {/* Stat Cards */}
      <div className="row g-3 mb-4">
        {[
          { label: 'Total Hours This Week', value: `${totalHours} hrs`, color: '#7c6af7' },
          { label: 'Daily Average',         value: `${(totalHours / 7).toFixed(1)} hrs`, color: '#22c55e' },
          { label: 'Best Day',              value: 'Saturday',          color: '#f97316' },
          { label: 'Quizzes Completed',     value: '24',                color: '#3b82f6' },
        ].map((stat) => (
          <div className="col-md-3" key={stat.label}>
            <div style={{
              backgroundColor: '#1a1d27',
              border: '1px solid #2a2d3e',
              borderRadius: '12px',
              padding: '16px 20px',
            }}>
              <div style={{ color: '#aaa', fontSize: '0.82rem' }}>{stat.label}</div>
              <div style={{ color: stat.color, fontSize: '1.6rem', fontWeight: 'bold', marginTop: '4px' }}>{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4">

        {/* Bar Chart — Study Hours */}
        <div className="col-md-7">
          <div style={{
            backgroundColor: '#1a1d27',
            border: '1px solid #2a2d3e',
            borderRadius: '14px',
            padding: '24px',
          }}>
            <h6 style={{ color: '#fff', marginBottom: '20px' }}>📊 Study Hours This Week</h6>
            <div className="d-flex align-items-flex-end justify-content-between" style={{ height: '180px', gap: '8px' }}>
              {weeklyHours.map((d) => (
                <div key={d.day} className="d-flex flex-column align-items-center justify-content-end" style={{ flex: 1, height: '100%' }}>
                  <div style={{ color: '#aaa', fontSize: '0.75rem', marginBottom: '6px' }}>{d.hours}h</div>
                  <div style={{
                    width: '100%',
                    height: `${(d.hours / maxHours) * 100}%`,
                    backgroundColor: '#7c6af7',
                    borderRadius: '6px 6px 0 0',
                    opacity: d.day === 'Sat' ? 1 : 0.6,
                    transition: 'opacity .2s',
                  }} />
                  <div style={{ color: '#aaa', fontSize: '0.75rem', marginTop: '6px' }}>{d.day}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subject Breakdown */}
        <div className="col-md-5">
          <div style={{
            backgroundColor: '#1a1d27',
            border: '1px solid #2a2d3e',
            borderRadius: '14px',
            padding: '24px',
          }}>
            <h6 style={{ color: '#fff', marginBottom: '20px' }}>📚 Subject Breakdown</h6>
            <div className="d-flex flex-column gap-3">
              {subjects.map((s) => (
                <div key={s.name}>
                  <div className="d-flex justify-content-between mb-1">
                    <span style={{ color: '#ccc', fontSize: '0.85rem' }}>{s.name}</span>
                    <span style={{ color: '#aaa', fontSize: '0.82rem' }}>{s.hours} hrs</span>
                  </div>
                  <div style={{ height: '6px', backgroundColor: '#2a2d3e', borderRadius: '3px' }}>
                    <div style={{
                      height: '100%',
                      width: `${s.percent}%`,
                      backgroundColor: s.color,
                      borderRadius: '3px',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Analytics