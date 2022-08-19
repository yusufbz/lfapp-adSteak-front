import { ChartBarIcon, HeartIcon, LibraryIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import AdStats from './adStats'
import HeartIconSolid from './heart-icon-solid'
import ToastSavedAd from './toast-saved-ad'
import { ViewAnalyticsModal } from './view-analytics-modal'


export default function AdItem({ ad }) {
  const [viewAnalytics, setViewAnalytics] = useState(false)
  const [isAdSaved, setIsAdSaved] = useState(false)

  const Header = () => {
    return (
      <div className="w-full flex items-center p-5">
        <img className="w-10 h-10 bg-gray-300 rounded-full border" src={`https://aas-bucket.s3.amazonaws.com/uploads/${ad.resource.page_logo}`} alt="" />
        <div className="w-full flex items-start justify-between ml-4">
          <div>
            <h3 className="text-gray-900 text-m font-medium">{ad.page_name}</h3>
            <div className='flex text-gray-500'>
              <p className="mt-1 text-gray-500 text-sm">Last seen: {ad.last_seen}</p>
              {/* <span className='mx-3 font-thin'>|</span>
                <p className="mt-1 text-gray-500 text-sm">20-09-2022</p> */}
            </div>
          </div>
          <button onClick={() => setIsAdSaved(prev => !prev)}>
            {isAdSaved ?
              <HeartIconSolid className='w-6 text-gray-400 hover:text-gray-700' />
              :
              <HeartIcon className='w-6 text-gray-400 hover:text-gray-700' />
            }
          </button>
        </div>
      </div>
    )
  }

  const Actions = () => {
    return (
      <div className='w-full flex flex-col items-center gap-3 p-5 border border-x-0 border-b-0'>
        <button
          type="button"
          className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setViewAnalytics(prev => !prev)}
        >
          <ChartBarIcon className='w-5 mr-2' />
          View Analytics
        </button>
        <button className='flex items-center text-gray-700 mt-2 text-sm font-medium'>
          <LibraryIcon className='w-5 mr-2' />
          View Ads Library
        </button>
      </div>
    )
  }

  return (
    <>
      <Header />
      <p className='w-full px-5 mb-5 text-m text-gray-500 line-clamp-1'>{ad.Ad_Description ? ad.Ad_Description : "No description"}</p>
      <div className='w-full'>
        {
          ad.resource.video ?
            <video className='flex-shrink-0 object-contain h-60 mx-auto' alt="" controls>
              <source src={`https://aas-bucket.s3.amazonaws.com/uploads${ad.resource.video}`} type="video/mp4" />
            </video> :
            <img className='flex-shrink-0 object-contain h-60 mx-auto bg-slate-200' src={`https://aas-bucket.s3.amazonaws.com/uploads/${ad.resource.image}`} alt="" />
        }
      </div>
      <div className='w-full py-3 px-5 flex items-center justify-between bg-gray-100'>
        <div>
          <p className="text-gray-900 text-m font-medium line-clamp-1">{ad.title}</p>
          {/* <p className="mt-1 text-gray-500 text-sm">{ }</p> */}
        </div>
        <button type="button" disabled className="inline-flex min-w-fit items-center px-4 py-2 border border-gray-300 Rshadow-sm text-sm font-medium rounded-md text-gray-700">{ad.button}</button>
      </div>
      <AdStats ad={ad} />
      <Actions />
      {isAdSaved && <ToastSavedAd show={isAdSaved} setShow={setIsAdSaved} />}
      {viewAnalytics && <ViewAnalyticsModal viewAnalytics={viewAnalytics} setViewAnalytics={setViewAnalytics} />}
    </>
  )
}


