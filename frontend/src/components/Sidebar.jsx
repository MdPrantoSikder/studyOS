import { NavLink } from 'react-router-dom'

const navItems = [
  { path: '/',            label: '📊 Dashboard'    },
  { path: '/exams',       label: '📅 Exams'        },
  { path: '/assignments', label: '✅ Assignments'  },
  { path: '/bcs',         label: '🎯 BCS Prep'     },
  { path: '/notes',       label: '📝 Notes'        },
  { path: '/planner',     label: '🗓️ Planner'      },
  { path: '/ai',          label: '🤖 AI Assistant' },
  { path: '/analytics',   label: '📈 Analytics'    },
  { path: '/files',       label: '🗂️ Files'        },
  { path: '/resources',   label: '🔗 Resources'    },
]

function Sidebar() {
  return (
    <div style={{
      width: '240px',
      minHeight: '100vh',
      backgroundColor: '#1a1d27',
      borderRight: '1px solid #2a2d3e',
      padding: '20px 0',
      position: 'fixed',
      top: 0,
      left: 0,
    }}>
      <div className="px-4 mb-4">
        <h4 style={{ color: '#7c6af7', fontWeight: 'bold' }}>⚡ StudyOS</h4>
        <small style={{ color: '#666' }}>Your Academic Brain</small>
      </div>

      <nav>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            style={({ isActive }) => ({
              display: 'block',
              padding: '10px 20px',
              color: isActive ? '#fff' : '#aaa',
              backgroundColor: isActive ? '#7c6af7' : 'transparent',
              textDecoration: 'none',
              borderRadius: '8px',
              margin: '2px 10px',
              transition: 'all 0.2s',
            })}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar