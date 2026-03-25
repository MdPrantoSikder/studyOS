import { useState } from 'react'

function AI() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'ai',
      text: 'Hi Pranto! 👋 I am your StudyOS AI Assistant. I can help you with DSA, BCS Prep, Computer Networks, and Blockchain. What do you want to study today?',
    }
  ])
  const [input, setInput] = useState('')

  const quickPrompts = [
    '📊 Explain Binary Search Trees',
    '🎯 Give me a BCS quiz',
    '🌐 Explain TCP/IP',
    '⛓️ What is Proof of Stake?',
  ]

  function sendMessage(text) {
    const userMsg = { id: Date.now(), role: 'user', text }
    const aiMsg = {
      id: Date.now() + 1,
      role: 'ai',
      text: `Great question about "${text}"! This is where the Groq AI (Llama 3.1 70B) will respond. We will connect the real AI in Phase 5 when we build the FastAPI backend. 🚀`,
    }
    setMessages(prev => [...prev, userMsg, aiMsg])
    setInput('')
  }

  function handleSend() {
    if (!input.trim()) return
    sendMessage(input)
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <h2 style={{ color: '#fff', fontWeight: 'bold' }}>🤖 AI Assistant</h2>
        <p style={{ color: '#aaa' }}>Powered by Groq — Llama 3.1 70B (coming in Phase 5)</p>
      </div>

      <div className="row g-4">

        {/* Chat Area */}
        <div className="col-md-8">
          <div style={{
            backgroundColor: '#1a1d27',
            border: '1px solid #2a2d3e',
            borderRadius: '14px',
            display: 'flex',
            flexDirection: 'column',
            height: '550px',
          }}>

            {/* Messages */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`d-flex ${msg.role === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
                >
                  <div style={{
                    maxWidth: '75%',
                    backgroundColor: msg.role === 'user' ? '#7c6af7' : '#2a2d3e',
                    color: '#fff',
                    borderRadius: msg.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                    padding: '12px 16px',
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                  }}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div style={{
              padding: '16px',
              borderTop: '1px solid #2a2d3e',
              display: 'flex',
              gap: '10px',
            }}>
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="Ask anything about your subjects..."
                style={{
                  flex: 1,
                  backgroundColor: '#0f1117',
                  border: '1px solid #2a2d3e',
                  borderRadius: '10px',
                  padding: '10px 16px',
                  color: '#fff',
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
              />
              <button
                onClick={handleSend}
                className="btn"
                style={{
                  backgroundColor: '#7c6af7',
                  color: '#fff',
                  borderRadius: '10px',
                  padding: '10px 20px',
                  fontWeight: '500',
                }}
              >
                Send ➤
              </button>
            </div>

          </div>
        </div>

        {/* Quick Prompts */}
        <div className="col-md-4">
          <div style={{
            backgroundColor: '#1a1d27',
            border: '1px solid #2a2d3e',
            borderRadius: '14px',
            padding: '20px',
          }}>
            <h6 style={{ color: '#fff', marginBottom: '16px' }}>⚡ Quick Prompts</h6>
            <div className="d-flex flex-column gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => sendMessage(prompt)}
                  className="btn"
                  style={{
                    backgroundColor: '#0f1117',
                    border: '1px solid #2a2d3e',
                    color: '#ccc',
                    borderRadius: '10px',
                    padding: '10px 14px',
                    textAlign: 'left',
                    fontSize: '0.85rem',
                    transition: 'all .2s',
                  }}
                >
                  {prompt}
                </button>
              ))}
            </div>

            <div style={{
              marginTop: '24px',
              backgroundColor: '#0f1117',
              borderRadius: '10px',
              padding: '14px',
            }}>
              <div style={{ color: '#aaa', fontSize: '0.8rem', marginBottom: '8px' }}>AI Model</div>
              <div style={{ color: '#7c6af7', fontWeight: '500', fontSize: '0.9rem' }}>Groq — Llama 3.1 70B</div>
              <div style={{ color: '#666', fontSize: '0.75rem', marginTop: '4px' }}>14,400 requests/day free</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AI