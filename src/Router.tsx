import { Routes, Route } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { DefaultLayout } from './layouts/Default'
import { CardDetails } from './pages/CardDetails/intex'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:id" element={<CardDetails />} />
      </Route>
    </Routes>
  )
}
