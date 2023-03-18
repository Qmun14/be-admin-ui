import React from 'react'

const Loading = () => {
    return (
        <div className="fixed inset-0 bg-CDS_1 bg-opacity-30 flex items-center justify-center z-50">
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-gray-900"></div>
        </div>
    )
}

export default Loading;