import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<App />)
