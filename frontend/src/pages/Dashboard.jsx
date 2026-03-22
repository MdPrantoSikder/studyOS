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
      {/* Exam Countdowns */}
      <div className="mb-4">
        <h5 style={{ color: '#fff', marginBottom: '15px' }}>⏳ Upcoming Exams</h5>
        <div className="row g-3">
          {[
            { name: 'Data Structures Final',  date: 'Apr 10', days: 19, color: '#f97316' },
            { name: 'BCS Preliminary',        date: 'Apr 25', days: 34, color: '#22c55e' },
            { name: 'Computer Networks Mid',  date: 'Mar 30', days: 8,  color: '#ef4444' },
          ].map((exam) => (
            <div className="col-md-4" key={exam.name}>
              <div style={{
                backgroundColor: '#1a1d27',
                border: '1px solid #2a2d3e',
                borderRadius: '12px',
                padding: '20px',
              }}>
                <div style={{ color: '#aaa', fontSize: '0.85rem' }}>{exam.date}</div>
                <div style={{ color: '#fff', fontWeight: 'bold', margin: '5px 0' }}>{exam.name}</div>
                <div style={{
                  color: exam.color,
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                }}>
                  {exam.days} days
                </div>
                <div style={{
                  height: '4px',
                  backgroundColor: '#2a2d3e',
                  borderRadius: '2px',
                  marginTop: '10px',
                }}>
                  <div style={{
                    height: '100%',
                    width: `${Math.min((30 - exam.days) / 30 * 100, 100)}%`,
                    backgroundColor: exam.color,
                    borderRadius: '2px',
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Row — Schedule + Assignments */}
      <div className="row g-3">

        {/* Today's Schedule */}
        <div className="col-md-6">
          <div style={{
            backgroundColor: '#1a1d27',
            border: '1px solid #2a2d3e',
            borderRadius: '12px',
            padding: '20px',
          }}>
            <h5 style={{ color: '#fff', marginBottom: '15px' }}>🗓️ Today's Schedule</h5>
            {[
              { time: '9:00 AM',  subject: 'Data Structures',  duration: '1.5 hrs', color: '#7c6af7' },
              { time: '11:00 AM', subject: 'BCS Prep',         duration: '1 hr',    color: '#22c55e' },
              { time: '2:00 PM',  subject: 'Computer Networks', duration: '1 hr',   color: '#3b82f6' },
              { time: '4:00 PM',  subject: 'Blockchain Research', duration: '2 hrs', color: '#f97316' },
            ].map((block) => (
              <div key={block.time} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 0',
                borderBottom: '1px solid #2a2d3e',
              }}>
                <div style={{
                  width: '4px',
                  height: '40px',
                  backgroundColor: block.color,
                  borderRadius: '2px',
                }} />
                <div>
                  <div style={{ color: '#aaa', fontSize: '0.8rem' }}>{block.time} · {block.duration}</div>
                  <div style={{ color: '#fff', fontWeight: '500' }}>{block.subject}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Assignments */}
        <div className="col-md-6">
          <div style={{
            backgroundColor: '#1a1d27',
            border: '1px solid #2a2d3e',
            borderRadius: '12px',
            padding: '20px',
          }}>
            <h5 style={{ color: '#fff', marginBottom: '15px' }}>✅ Pending Assignments</h5>
            {[
              { title: 'DSA Assignment 3',       due: 'Due tomorrow',  urgency: '#ef4444' },
              { title: 'Networks Lab Report',    due: 'Due in 3 days', urgency: '#f97316' },
              { title: 'Blockchain Literature Review', due: 'Due in 7 days', urgency: '#22c55e' },
              { title: 'BCS Mock Test',          due: 'Due in 10 days', urgency: '#3b82f6' },
            ].map((task) => (
              <div key={task.title} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 0',
                borderBottom: '1px solid #2a2d3e',
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: task.urgency,
                  flexShrink: 0,
                }} />
                <div>
                  <div style={{ color: '#fff', fontWeight: '500' }}>{task.title}</div>
                  <div style={{ color: task.urgency, fontSize: '0.8rem' }}>{task.due}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard