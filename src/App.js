import { ArrowSmUpIcon } from '@heroicons/react/outline'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/dashboard'
import Favorites from './components/favorites'
import Navigation from './components/navigation'



export default function App() {

  return (
    <div className="h-full">
      <div className="min-h-full bg-slate-100">
        <div className="bg-gray-800 pb-28">
          <Navigation />
        </div>
        <Routes>
          <Route path="/" exact={true} element={<Dashboard />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
      <button
        type="button"
        className="fixed right-4 bottom-4 inline-flex items-center p-3 border border-gray-300 shadow-sm text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <ArrowSmUpIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}
