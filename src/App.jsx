import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './pages/Home'
import ContactsPage from './pages/Contacts'
import SalesPage from './pages/Sales'
import { CONTACTS_URL, INDEX_URL, SALES_URL } from './utils/urls'

function App () {

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path={INDEX_URL} element={<HomePage />} />
          <Route path={CONTACTS_URL} element={<ContactsPage />} />
          <Route path={SALES_URL} element={<SalesPage />} />
        </Routes>
      </main>
    </ >
  )
}

export default App
