import { PortfolioProvider } from './context/PortfolioContext'
import EditorLayout from './components/Layout/EditorLayout'

function App() {
  return (
    <PortfolioProvider>
      <EditorLayout />
    </PortfolioProvider>
  )
}

export default App