import { useState } from 'react'

function Resources() {
  const [filter, setFilter] = useState('All')

  const resources = [
    { id: 1,  type: 'YouTube',  title: 'DSA Full Course',              desc: 'Complete Data Structures & Algorithms in Python',     link: '#', color: '#ef4444' },
    { id: 2,  type: 'YouTube',  title: 'BCS Preparation Guide',        desc: 'Full BCS preliminary preparation video series',       link: '#', color: '#ef4444' },
    { id: 3,  type: 'YouTube',  title: 'Computer Networks — Kurose',   desc: 'Top-down approach to Computer Networks lectures',     link: '#', color: '#ef4444' },
    { id: 4,  type: 'Article',  title: 'Blockchain Consensus Survey',  desc: 'Survey paper on consensus mechanisms in blockchain',  link: '#', color: '#3b82f6' },
    { id: 5,  type: 'Article',  title: 'K-means Clustering Explained', desc: 'Visual guide to k-means clustering algorithm',        link: '#', color: '#3b82f6' },
    { id: 6,  type: 'Drive',    title: 'BCS Previous Questions',       desc: 'Collection of BCS preliminary previous year papers',  link: '#', color: '#22c55e' },
    { id: 7,  type: 'Drive',    title: 'Networks Lab Reports',         desc: 'All completed lab reports for Computer Networks',     link: '#', color: '#22c55e' },
    { id: 8,  type: 'Tool',     title: 'VisuAlgo',                     desc: 'Visualize data structures and algorithms online',     link: '#', color: '#f97316' },
    { id: 9,  type: 'Tool',     title: 'Excalidraw',                   desc: 'Draw system diagrams and architecture sketches',      link: '#', color: '#f97316' },
    { id: 10, type: 'Tool',     title: 'Anki Flashcards',              desc: 'Spaced repetition flashcards for BCS prep',          link: '#', color: '#f97316' },
  ]

  const filters = ['All', 'YouTube', 'Article', 'Drive', 'Tool']

  const typeIcons = {
    YouTube: '▶️',
    Article: '📄',
    Drive:   '☁️',
    Tool:    '🔧',
  }

  const filtered = filter === 'All' ? resources : resources.filter(r => r.type === filter)

  return (
    <div>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 style={{ color: '#fff', fontWeight: 'bold' }}>🔗 Resources</h2>
          <p style={{ color: '#aaa' }}>Your saved study materials in one place.</p>
        </div>
        <button
          className="btn"
          style={{ backgroundColor: '#7c6af7', color: '#fff', borderRadius: '10px', padding: '10px 20px' }}
        >
          + Add Resource
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="d-flex gap-2 mb-4 flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="btn"
            style={{
              backgroundColor: filter === f ? '#7c6af7' : '#1a1d27',
              color: filter === f ? '#fff' : '#aaa',
              border: '1px solid #2a2d3e',
              borderRadius: '20px',
              padding: '6px 16px',
              fontSize: '0.85rem',
            }}
          >
            {f} {f !== 'All' && `(${resources.filter(r => r.type === f).length})`}
          </button>
        ))}
      </div>

      {/* Resource Cards */}
      <div className="row g-3">
        {filtered.map((res) => (
          <div className="col-md-4" key={res.id}>
            <div style={{
              backgroundColor: '#1a1d27',
              border: '1px solid #2a2d3e',
              borderRadius: '14px',
              padding: '20px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              {/* Top */}
              <div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span style={{
                    backgroundColor: res.color + '22',
                    color: res.color,
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    padding: '4px 10px',
                    borderRadius: '20px',
                  }}>
                    {typeIcons[res.type]} {res.type}
                  </span>
                </div>
                <h6 style={{ color: '#fff', fontWeight: 'bold', margin: '10px 0 6px' }}>{res.title}</h6>
                <p style={{ color: '#aaa', fontSize: '0.82rem', lineHeight: '1.5' }}>{res.desc}</p>
              </div>

              {/* Bottom */}
              <button
                className="btn w-100 mt-3"
                style={{
                  backgroundColor: '#2a2d3e',
                  color: '#ccc',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  border: 'none',
                }}
              >
                Open →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Resources