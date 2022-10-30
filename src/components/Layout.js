import React from "react"

export default function Layout({ children }) {
  return (
    <div className="d-flex min-vh-100 h-100 text-center text-bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        {children}
      </div>
    </div>
  )
}