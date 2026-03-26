import { useState } from 'react'

function Files() {
  const [activeTab, setActiveTab] = useState('code')

  const tabs = [
    { id: 'code',        label: '💻 Code Editor'    },
    { id: 'spreadsheet', label: '📊 Spreadsheet'    },
    { id: 'document',    label: '📄 Document'       },
    { id: 'pdf',         label: '📋 PDF Viewer'     },
  ]

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <h2 style={{ color: '#fff', fontWeight: 'bold' }}>🗂️ File Workspace</h2>
        <p style={{ color: '#aaa' }}>Code, write, and view files in one place.</p>
      </div>

      {/* Tabs */}
      <div className="d-flex gap-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="btn"
            style={{
              backgroundColor: activeTab === tab.id ? '#7c6af7' : '#1a1d27',
              color: activeTab === tab.id ? '#fff' : '#aaa',
              border: '1px solid #2a2d3e',
              borderRadius: '10px',
              padding: '8px 16px',
              fontSize: '0.85rem',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div style={{
        backgroundColor: '#1a1d27',
        border: '1px solid #2a2d3e',
        borderRadius: '14px',
        minHeight: '480px',
        overflow: 'hidden',
      }}>

        {/* Code Editor */}
        {activeTab === 'code' && (
          <div style={{ height: '480px', display: 'flex', flexDirection: 'column' }}>
            <div style={{
              backgroundColor: '#0f1117',
              padding: '10px 16px',
              borderBottom: '1px solid #2a2d3e',
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
            }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f97316' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
              <span style={{ color: '#666', fontSize: '0.8rem', marginLeft: '8px' }}>main.py</span>
            </div>
            <textarea
              defaultValue={`# StudyOS Code Editor\n# Monaco Editor (VS Code engine) will be plugged in here in Week 3\n\ndef binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    \n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    \n    return -1\n\n# Test\narr = [1, 3, 5, 7, 9, 11, 13]\nprint(binary_search(arr, 7))  # Output: 3`}
              style={{
                flex: 1,
                backgroundColor: '#0f1117',
                color: '#e0e0e0',
                border: 'none',
                padding: '16px',
                fontFamily: 'monospace',
                fontSize: '0.88rem',
                lineHeight: '1.6',
                resize: 'none',
                outline: 'none',
              }}
            />
          </div>
        )}

        {/* Spreadsheet */}
        {activeTab === 'spreadsheet' && (
          <div style={{ padding: '20px', overflowX: 'auto' }}>
            <p style={{ color: '#aaa', fontSize: '0.85rem', marginBottom: '16px' }}>📊 Study Hours Tracker</p>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr>
                  {['Subject', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Total'].map(h => (
                    <th key={h} style={{
                      backgroundColor: '#2a2d3e',
                      color: '#fff',
                      padding: '10px 12px',
                      textAlign: 'center',
                      border: '1px solid #3a3d4e',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { subject: 'Data Structures', hours: [2, 1.5, 2, 1, 2, 3, 0]   },
                  { subject: 'BCS Prep',        hours: [1, 2, 0, 2, 1, 2, 1]     },
                  { subject: 'Networks',        hours: [1, 0, 1, 1.5, 1, 1, 0]   },
                  { subject: 'Blockchain',      hours: [0, 2, 0, 2, 1, 2, 1]     },
                ].map((row) => {
                  const total = row.hours.reduce((a, b) => a + b, 0)
                  return (
                    <tr key={row.subject}>
                      <td style={{ color: '#ccc', padding: '10px 12px', border: '1px solid #2a2d3e', fontWeight: '500' }}>
                        {row.subject}
                      </td>
                      {row.hours.map((h, i) => (
                        <td key={i} style={{
                          color: h > 0 ? '#7c6af7' : '#444',
                          padding: '10px 12px',
                          textAlign: 'center',
                          border: '1px solid #2a2d3e',
                        }}>{h > 0 ? `${h}h` : '-'}</td>
                      ))}
                      <td style={{
                        color: '#22c55e',
                        padding: '10px 12px',
                        textAlign: 'center',
                        border: '1px solid #2a2d3e',
                        fontWeight: 'bold',
                      }}>{total}h</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Document */}
        {activeTab === 'document' && (
          <div style={{ padding: '28px', maxWidth: '700px', margin: '0 auto' }}>
            <textarea
              defaultValue={`Research Paper Draft — Blockchain Consensus Optimization\n\nAbstract:\nThis paper proposes an attribute-based node clustering algorithm using k-means for optimizing consensus in permissioned blockchains. By grouping nodes based on computational attributes and selecting leaders dynamically, we aim to reduce communication overhead by approximately 40%.\n\n1. Introduction\nBlockchain consensus mechanisms face scalability challenges as network size grows...\n\n2. Methodology\nWe apply k-means clustering to partition validator nodes into clusters based on:\n- Computational power\n- Network latency\n- Historical reliability score\n\n3. Results\nPreliminary simulations show a 38% reduction in message complexity...`}
              style={{
                width: '100%',
                minHeight: '400px',
                backgroundColor: 'transparent',
                border: 'none',
                color: '#e0e0e0',
                fontSize: '0.92rem',
                lineHeight: '1.8',
                resize: 'none',
                outline: 'none',
                fontFamily: 'Georgia, serif',
              }}
            />
          </div>
        )}

      
      </div>
    </div>
  )
}

export default Files