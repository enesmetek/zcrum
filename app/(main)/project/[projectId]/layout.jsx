import React, { Suspense } from 'react'

const ProjectLayout = async ({ children }) => {
  return (
    <div className="container mx-auto px-4 sm:px-4">
        <Suspense>
            {children}
        </Suspense>
    </div>
  )
}

export default ProjectLayout