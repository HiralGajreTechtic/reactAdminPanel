import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children }) {
  if (!localStorage.getItem('userDetails') ) {
    return <Navigate to="/" replace />
  }
  return children ;
}
export default ProtectedRoute