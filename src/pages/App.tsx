import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './Home'
import useMu from '../components/Hooks/useMu'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  )
}

function Example() {
  const { status, data, error, isFetching } = useMu()
  console.log(data)

  if (error) return <div>{'An error has occurred: ' + error} </div>
  if (status === 'loading') return <div> loading...</div>

  return (
    <div>
      <div>{data.response.form}</div>
    </div>
  )
}
