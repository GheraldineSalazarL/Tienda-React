import React from 'react'

export const Loader = () => {
  return (
    <div class="text-center">
        <div class="spinner-border text-warning" style={{width:'4rem', height: '4rem'}} s role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}