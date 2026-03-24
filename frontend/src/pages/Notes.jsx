import { useState } from 'react'

function Notes() {
  const notes = [
    {
      id: 1,
      title: 'Binary Search Trees',
      subject: 'Data Structures',
      date: 'Mar 20, 2026',
      color: '#7c6af7',
      content: `A Binary Search Tree (BST) is a node-based binary tree data structure.

Key Properties:
- Left subtree contains only nodes with keys LESS than the parent
- Right subtree contains only nodes with keys GREATER than the parent
- Both left and right subtrees are also BSTs

Time Complexity:
- Search: O(log n) average, O(n) worst case
- Insert: O(log n) average
- Delete: O(log n) average

Common Operations:
1. Insert — compare with root, go left or right recursively
2. Search — same comparison logic
3. Inorder traversal — gives sorted output!

Remember: A balanced BST gives best performance. AVL trees and Red-Black trees are self-balancing variants.`
    },
    {
      id: 2,
      title: 'OSI Model Layers',
      subject: 'Computer Networks',
      date: 'Mar 21, 2026',
      color: '#3b82f6',
      content: `The OSI Model has 7 layers — remember with: "Please Do Not Throw Sausage Pizza Away"

7. Application  — HTTP, FTP, DNS (what users interact with)
6. Presentation — encryption, compression, formatting
5. Session      — manages sessions between applications
4. Transport    — TCP/UDP, port numbers, reliability
3. Network      — IP addressing, routing (routers live here)
2. Data Link    — MAC addresses, switches, frames
1. Physical     — cables, signals, bits

Key exam points:
- TCP is connection-oriented (3-way handshake: SYN, SYN-ACK, ACK)
- UDP is connectionless — faster but unreliable
- IP addresses work at Layer 3
- MAC addresses work at Layer 2`
    },
    {
      id: 3,
      title: 'BCS Bangladesh Affairs',
      subject: 'BCS Prep',
      date: 'Mar 22, 2026',
      color: '#22c55e',
      content: `Important dates for Bangladesh Affairs:

Independence:
- Declaration: March 26, 1971
- Victory Day: December 16, 1971
- Constitution adopted: November 4, 1972

Geography:
- Area: 147,570 sq km
- Borders: India (3 sides), Myanmar (southeast), Bay of Bengal (south)
- Longest river: Meghna (by volume), Surma-Meghna system
- Highest peak: Saka Haphong (1,052m) in Bandarban

Economy:
- GDP growth: ~6-7% annually
- Main export: Ready Made Garments (RMG) — 84% of exports
- Main remittance sources: Saudi Arabia, UAE, USA`
    },
    {
      id: 4,
      title: 'Blockchain Consensus',
      subject: 'Blockchain Research',
      date: 'Mar 23, 2026',
      color: '#f97316',
      content: `Consensus Mechanisms in Blockchain:

Proof of Work (PoW):
- Miners solve complex puzzles to add blocks
- Energy intensive — Bitcoin uses this
- 51% attack is the main vulnerability

Proof of Stake (PoS):
- Validators stake coins as collateral
- Much more energy efficient
- Ethereum moved to PoS in 2022 (The Merge)

My Research — Attribute-based Node Clustering:
- Using k-means clustering for node grouping
- Leader selection based on node attributes
- Goal: optimize consensus in permissioned blockchains
- Key metric: reduce communication overhead by ~40%`
    },
  ]

  const [selectedNote, setSelectedNote] = useState(notes[0])

  return (
    <div>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 style={{ color: '#fff', fontWeight: 'bold' }}>📝 Notes</h2>
          <p style={{ color: '#aaa' }}>Your personal knowledge base.</p>
        </div>
        <button
          className="btn"
          style={{ backgroundColor: '#7c6af7', color: '#fff', borderRadius: '10px', padding: '10px 20px' }}
        >
          + New Note
        </button>
      </div>

      <div className="row g-4">

        {/* Left — Note List */}
        <div className="col-md-4">
          <div style={{
            backgroundColor: '#1a1d27',
            border: '1px solid #2a2d3e',
            borderRadius: '14px',
            overflow: 'hidden',
          }}>
            {notes.map((note) => (
              <div
                key={note.id}
                onClick={() => setSelectedNote(note)}
                style={{
                  padding: '16px 20px',
                  borderBottom: '1px solid #2a2d3e',
                  cursor: 'pointer',
                  backgroundColor: selectedNote.id === note.id ? '#2a2d3e' : 'transparent',
                  transition: 'background .2s',
                  borderLeft: selectedNote.id === note.id ? `3px solid ${note.color}` : '3px solid transparent',
                }}
              >
                <div style={{ color: '#fff', fontWeight: '500', fontSize: '0.9rem', marginBottom: '4px' }}>
                  {note.title}
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{
                    backgroundColor: note.color + '22',
                    color: note.color,
                    fontSize: '0.7rem',
                    padding: '2px 8px',
                    borderRadius: '10px',
                  }}>
                    {note.subject}
                  </span>
                  <span style={{ color: '#666', fontSize: '0.75rem' }}>{note.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Note Content */}
        <div className="col-md-8">
          <div style={{
            backgroundColor: '#1a1d27',
            border: '1px solid #2a2d3e',
            borderRadius: '14px',
            padding: '28px',
            minHeight: '500px',
          }}>
            {/* Note header */}
            <div className="d-flex justify-content-between align-items-start mb-4">
              <h4 style={{ color: '#fff', fontWeight: 'bold', margin: 0 }}>{selectedNote.title}</h4>
              <span style={{
                backgroundColor: selectedNote.color + '22',
                color: selectedNote.color,
                fontSize: '0.8rem',
                padding: '4px 12px',
                borderRadius: '20px',
              }}>
                {selectedNote.subject}
              </span>
            </div>

            <p style={{ color: '#666', fontSize: '0.8rem', marginBottom: '20px' }}>
              📅 {selectedNote.date}
            </p>

            {/* Note content */}
            <div style={{
              color: '#ccc',
              fontSize: '0.9rem',
              lineHeight: '1.8',
              whiteSpace: 'pre-line',
            }}>
              {selectedNote.content}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Notes