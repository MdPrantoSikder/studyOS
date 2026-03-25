import { useState, useEffect } from 'react'

function Planner() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const times = ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '2 PM', '3 PM', '4 PM']

  const schedule = {
    'Mon-8 AM':  { subject: 'Data Structures', color: '#7c6af7' },
    'Mon-10 AM': { subject: 'Networks',         color: '#3b82f6' },
    'Mon-2 PM':  { subject: 'Blockchain',       color: '#f97316' },
    'Tue-9 AM':  { subject: 'BCS Prep',         color: '#22c55e' },
    'Tue-11 AM': { subject: 'Data Structures',  color: '#7c6af7' },
    'Tue-3 PM':  { subject: 'Blockchain',       color: '#f97316' },
    'Wed-8 AM':  { subject: 'Networks',         color: '#3b82f6' },
    'Wed-2 PM':  { subject: 'BCS Prep',         color: '#22c55e' },
    'Thu-9 AM':  { subject: 'Data Structures',  color: '#7c6af7' },
    'Thu-11 AM': { subject: 'BCS Prep',         color: '#22c55e' },
    'Thu-4 PM':  { subject: 'Blockchain',       color: '#f97316' },
    'Fri-8 AM':  { subject: 'Networks',         color: '#3b82f6' },
    'Fri-10 AM': { subject: 'Data Structures',  color: '#7c6af7' },
    'Sat-9 AM':  { subject: 'BCS Prep',         color: '#22c55e' },
    'Sat-11 AM': { subject: 'Blockchain',       color: '#f97316' },
    'Sat-2 PM':  { subject: 'Networks',         color: '#3b82f6' },
  }

  const [seconds, setSeconds] = useState(25 * 60)
  const [running, setRunning] = useState(false)
  const [sessions, setSessions] = useState(0)

  useEffect(() => {
    if (!running) return
    const interval = setInterval(() => {
      setSeconds(s => {
        if (s <= 1) {
          setRunning(false)
          setSessions(prev => prev + 1)
          return 25 * 60
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [running])

  const mins = String(Math.floor(seconds / 60)).padStart(2, '0')
  const secs = String(seconds % 60).padStart(2, '0')

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <h2 style={{ color: '#fff', fontWeight: 'bold' }}>🗓️ Planner</h2>
        <p style={{ color: '#aaa' }}>Your weekly study schedule.</p>
      </div>

      <div className="row g-4">

        {/* Weekly Timetable */}
        <div className="col-md-8">
          <div style={{
            backgroundColor: '#1a1d27',
            border: '1px solid #2a2d3e',
            borderRadius: '14px',
            padding: '20px',
            overflowX: 'auto',
          }}>
            <h6 style={{ color: '#fff', marginBottom: '16px' }}>Weekly Schedule</h6>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ color: '#aaa', fontSize: '0.8rem', padding: '8px', width: '60px' }}></th>
                  {days.map(day => (
                    <th key={day} style={{
                      color: '#fff',
                      fontSize: '0.82rem',
                      padding: '8px',
                      textAlign: 'center',
                      fontWeight: '500',
                    }}>
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {times.map(time => (
                  <tr key={time}>
                    <td style={{ color: '#666', fontSize: '0.75rem', padding: '6px 8px', whiteSpace: 'nowrap' }}>
                      {time}
                    </td>
                    {days.map(day => {
                      const key = `${day}-${time}`
                      const block = schedule[key]
                      return (
                        <td key={day} style={{ padding: '3px' }}>
                          {block ? (
                            <div style={{
                              backgroundColor: block.color + '33',
                              border: `1px solid ${block.color}`,
                              borderRadius: '6px',
                              padding: '4px 6px',
                              fontSize: '0.7rem',
                              color: block.color,
                              fontWeight: '500',
                              textAlign: 'center',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}>
                              {block.subject.split(' ')[0]}
                            </div>
                          ) : (
                            <div style={{ height: '28px' }} />
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pomodoro Timer */}
        <div className="col-md-4">
          <div style={{
            backgroundColor: '#1a1d27',
            border: '1px solid #2a2d3e',
            borderRadius: '14px',
            padding: '28px',
            textAlign: 'center',
          }}>
            <h6 style={{ color: '#fff', marginBottom: '20px' }}>🍅 Pomodoro Timer</h6>

            {/* Timer display */}
            <div style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              color: running ? '#7c6af7' : '#fff',
              letterSpacing: '4px',
              marginBottom: '24px',
              transition: 'color .3s',
            }}>
              {mins}:{secs}
            </div>

            {/* Controls */}
            <div className="d-flex justify-content-center gap-2 mb-4">
              <button
                onClick={() => setRunning(r => !r)}
                className="btn"
                style={{
                  backgroundColor: running ? '#ef4444' : '#7c6af7',
                  color: '#fff',
                  borderRadius: '10px',
                  padding: '8px 24px',
                  fontWeight: '500',
                }}
              >
                {running ? '⏸ Pause' : '▶ Start'}
              </button>
              <button
                onClick={() => { setRunning(false); setSeconds(25 * 60) }}
                className="btn"
                style={{
                  backgroundColor: '#2a2d3e',
                  color: '#aaa',
                  borderRadius: '10px',
                  padding: '8px 16px',
                }}
              >
                ↺ Reset
              </button>
            </div>

            {/* Sessions */}
            <div style={{
              backgroundColor: '#0f1117',
              borderRadius: '10px',
              padding: '12px',
            }}>
              <div style={{ color: '#aaa', fontSize: '0.8rem' }}>Sessions completed today</div>
              <div style={{ color: '#22c55e', fontSize: '1.8rem', fontWeight: 'bold' }}>{sessions}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Planner