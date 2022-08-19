import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'

export default function ToastSavedAd({ setShow }) {
	setTimeout(() => {
		setShow(false)
	}, 3000)

	return createPortal(
		<React.Fragment>
			<div
				aria-live="assertive"
				className="fixed inset-0 flex items-center justify-end flex-col px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
			>
				<div className="w-full flex flex-col items-center justify-center space-y-4">
					<div className="max-w-sm w-full bg-black bg-opacity-95 shadow-xl rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
						<div className="p-4">
							<div className="flex items-start">
								<div className="flex-shrink-0">
									<CheckCircleIcon className="h-6 w-6 text-white" aria-hidden="true" />
								</div>
								<div className="ml-3 w-0 flex-1 pt-0.5">
									<p className="text-sm font-medium text-white">Successfully saved!</p>
									<p className="mt-1 text-sm text-white opacity-80">Item is saved to your Favorites. <Link to="/favorites" className='underline'>View item</Link></p>
								</div>
								<div className="ml-4 flex-shrink-0 flex">
									<button
										type="button"
										className="rounded-md inline-flex text-white opacity-60 hover:opacity-90  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										onClick={() => {
											setShow(false)
										}}
									>
										<span className="sr-only">Close</span>
										<XIcon className="h-5 w-5" aria-hidden="true" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>,
		window.alerts
	)
}
