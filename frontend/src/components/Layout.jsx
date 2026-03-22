import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{
        marginLeft: '240px',
        padding: '30px',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#0f1117',
      }}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout