function StatCard({ icon, label, value, color }) {
  return (
    <div className="col-md-3">
      <div style={{
        backgroundColor: '#1a1d27',
        border: '1px solid #2a2d3e',
        borderRadius: '12px',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
      }}>
        <div style={{
          fontSize: '2rem',
          backgroundColor: color + '22',
          padding: '10px',
          borderRadius: '10px',
        }}>
          {icon}
        </div>
        <div>
          <div style={{ color: '#aaa', fontSize: '0.85rem' }}>{label}</div>
          <div style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>{value}</div>
        </div>
      </div>
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <h2 style={{ color: '#fff', fontWeight: 'bold' }}>Good morning, Pranto! 👋</h2>
        <p style={{ color: '#aaa' }}>Here's what's going on today.</p>
      </div>

      {/* Stat Cards */}
      <div className="row g-3 mb-4">
        <StatCard icon="⏱️" label="Study Hours Today" value="3.5 hrs" color="#7c6af7" />
        <StatCard icon="🔥" label="Current Streak"    value="7 days"  color="#f97316" />
        <StatCard icon="🎯" label="BCS Progress"      value="42%"     color="#22c55e" />
        <StatCard icon="🧠" label="Quizzes Done"      value="24"      color="#3b82f6" />
      </div>
     
    </div>
  )
}

export default Dashboard