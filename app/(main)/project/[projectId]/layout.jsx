import React, { Suspense } from 'react'
import { BarLoader } from 'react-spinners'

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