function Assignments() {
  const columns = [
    {
      id: 'todo',
      title: 'To Do',
      color: '#ef4444',
      tasks: [
        { id: 1, title: 'Networks Lab Report',        subject: 'Computer Networks', due: 'Mar 30', priority: 'High'   },
        { id: 2, title: 'BCS Mock Test',              subject: 'BCS Prep',          due: 'Apr 5',  priority: 'Medium' },
        { id: 3, title: 'Blockchain Literature Review', subject: 'Blockchain',      due: 'Apr 10', priority: 'Low'    },
      ]
    },
    {
      id: 'inprogress',
      title: 'In Progress',
      color: '#f97316',
      tasks: [
        { id: 4, title: 'DSA Assignment 3',           subject: 'Data Structures',   due: 'Mar 28', priority: 'High'   },
        { id: 5, title: 'Research Paper Draft',       subject: 'Blockchain',        due: 'Apr 2',  priority: 'Medium' },
      ]
    },
    {
      id: 'done',
      title: 'Done',
      color: '#22c55e',
      tasks: [
        { id: 6, title: 'DSA Assignment 2',           subject: 'Data Structures',   due: 'Mar 20', priority: 'High'   },
        { id: 7, title: 'Networks Quiz 1',            subject: 'Computer Networks', due: 'Mar 15', priority: 'Low'    },
      ]
    },
  ]

  function getPriorityStyle(priority) {
    if (priority === 'High')   return { bg: '#ef444422', color: '#ef4444' }
    if (priority === 'Medium') return { bg: '#f9731622', color: '#f97316' }
    return                            { bg: '#22c55e22', color: '#22c55e' }
  }

  return (
    <div>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 style={{ color: '#fff', fontWeight: 'bold' }}>✅ Assignments</h2>
          <p style={{ color: '#aaa' }}>Track your tasks across all subjects.</p>
        </div>
        <button
          className="btn"
          style={{ backgroundColor: '#7c6af7', color: '#fff', borderRadius: '10px', padding: '10px 20px' }}
        >
          + Add Task
        </button>
      </div>

      {/* Kanban Board */}
      <div className="row g-4">
        {columns.map((col) => (
          <div className="col-md-4" key={col.id}>

            {/* Column Header */}
            <div className="d-flex align-items-center gap-2 mb-3">
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: col.color }} />
              <span style={{ color: '#fff', fontWeight: 'bold' }}>{col.title}</span>
              <span style={{
                backgroundColor: '#2a2d3e',
                color: '#aaa',
                fontSize: '0.75rem',
                padding: '2px 8px',
                borderRadius: '10px',
                marginLeft: '4px',
              }}>
                {col.tasks.length}
              </span>
            </div>

            {/* Column Body */}
            <div style={{
              backgroundColor: '#1a1d27',
              border: '1px solid #2a2d3e',
              borderRadius: '14px',
              padding: '12px',
              minHeight: '300px',
            }}>
              {col.tasks.map((task) => {
                const priority = getPriorityStyle(task.priority)
                return (
                  <div key={task.id} style={{
                    backgroundColor: '#0f1117',
                    border: '1px solid #2a2d3e',
                    borderRadius: '10px',
                    padding: '14px',
                    marginBottom: '10px',
                    cursor: 'pointer',
                  }}>
                    {/* Priority badge */}
                    <span style={{
                      backgroundColor: priority.bg,
                      color: priority.color,
                      fontSize: '0.7rem',
                      fontWeight: 'bold',
                      padding: '3px 8px',
                      borderRadius: '10px',
                    }}>
                      {task.priority}
                    </span>

                    {/* Title */}
                    <p style={{ color: '#fff', fontWeight: '500', margin: '8px 0 4px', fontSize: '0.9rem' }}>
                      {task.title}
                    </p>

                    {/* Subject + Due date */}
                    <div className="d-flex justify-content-between">
                      <span style={{ color: '#aaa', fontSize: '0.78rem' }}>{task.subject}</span>
                      <span style={{ color: '#aaa', fontSize: '0.78rem' }}>📅 {task.due}</span>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Assignments