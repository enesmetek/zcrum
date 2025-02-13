import React, { Suspense } from 'react'

const ProjectLayout = async ({ children }) => {
  return (
    <div className="mx-auto">
        <Suspense>
            {children}
        </Suspense>
    </div>
  )
}

export default ProjectLayout