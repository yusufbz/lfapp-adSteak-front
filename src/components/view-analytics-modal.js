import React from 'react';
import { Fragment, useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon, FlagIcon } from '@heroicons/react/outline'
import { createPortal } from 'react-dom';
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import AdStats from './adStats';
import AanalyticsChart from './analytics-chart';

const adItem = {
	"_id": {
		"$oid": "615f2d282947ed49f67241c2"
	},
	"page_id": "\n153736595578370",
	"post_id": {
		"$numberLong": "1058518581193989"
	},
	"ad_format": "video",
	"landanig_page": "https://www.ollyandowl.com/collections/diaper-bags/products/modern-mummy-nappy-backpack?fbclid=IwAR2Y9LrQnLvoIGoO0JsheqHITRzndB-xOSHeLTGGLFKlpZJgyKu1L9wVlUk&h=AT0aIC7bpuy4QHaDQDlaf_E6T-gLmgwu26kdsw3VZwzchuPNijqNsdtq305rPfxKWvyiGG_uoXRCxAvlTfWLxS72MTM3WdeFFkfG_E-9meqYqLQq-Xt_rE6t5_uTWaq4a6tLD1FFZRjSuUwas3Kx0HFHFmX_kK0VFRWCyzvmdtdH67W1NVuGf2TeV5PN-2-tkGSYJj5VWZ3ecBjkSRn0-KnJFw1jx38pD2mg2zg_64A8QzV2KDnp7QWvMVuNzQOoUeT3h34COXWzCToUe7kEk54MkWgr&__tn__=%2C%3C%2CmH-R&c[0]=AT2ajgPP2oG9vyVmYA9YkJTAA5owR3v4DcL8UaZSwa5-RyVXSESQBHKLmRtpr-K3ZueF7GUNfYh01Zqf-qWHkTw6mG6QTxNZ-g4efVfgX_LRiTJ1T2nF_pDTVeKplKsd0W7-UB9PH3nDqJ-9ZQgULWtnwzqsWJU1OS4gdMU19SYh26EyPZ1Csv5IcRtNzTBwLKk8X_2UQvyvM2mJdxzYQcqBgiEYQaDcuQ-KFUbStN8wwZLdr8rHvHSUN8HoN_vpH0teK6NHDkkC7Y93yoJ3zeXmpx65FuPJZVo6pCecrWzMuRiyfoT3cXZzHw6vFn3VLR4OBoQWxgP2y1cd2Uwg1RHQ_5_E5axW-dXW4OmC",
	"post_link": "https://www.facebook.com/OllyAndOwl1/videos/1058518581193989/",
	"post_create": "2020-02-20",
	"last_seen": "2022-01-10",
	"interested": "[\"web design\",\"gaming\",\"tech\"]",
	"gender": "Females",
	"age": " 22 to 44.",
	"country": "[\"China\",\"United states\",\"India\"]",
	"lang": "English (US).",
	"country_see_in": "Worldwide",
	"t_lang": "en",
	"page_link": "https://www.facebook.com/OllyAndOwl1/?__cft__[0]=AZXh1O1Gd7lpix1B2c1lwJItN4apMkHMrH8tK6C_kJ6nqc_3QMhvI1GCizOSazrU9QDH3uww8G0-yK6hBOrOUJ1mPOIwAjcKkx8RUwBgCjQqgQlRfQzPyq_7Avw3Cc8gaproq9CMIzeCDml7nF55LvKFiqXnxUS6Zbe5jFG-lVoVsSBJNd5nX-Y8b-SlokDT4rPQXeuC8dvw_I1HewBdRK2PdU3j9nS4bOdhR95GIOMEOkQ_2eWuQJpsBZdfnyv66c-OdKTlf-AqoofxcgmKhiGW5KbSB4CC5AIfjtbgHwspB110Md_nB9fH7TLnZ_XCdBwzuK7kms7t031Y1XwClPCD&__tn__=-UC%2CP-R",
	"button": "Sign up",
	"share": 845,
	"comment": 2252,
	"like": 10600,
	"page_name": "Olly&Owl",
	"Ad_Description": "👍❗\"I was amazed at how good this diaper backpack is. I love all the pockets and especially the bottle warming feature! Super comfortable and the pockets...",
	"title": "Perfect Diaper Bag!",
	"category": "[\"events\",\"bags&shoes\",\"fashion\"]",
	"keywords": ",feature,table,mummy,backpack,diaper,ove",
	"updated_at": {
		"$date": {
			"$numberLong": "1651332871735"
		}
	},
	"created_at": {
		"$date": {
			"$numberLong": "1633627432755"
		}
	},
	"special": "0",
	"last_seen_old": {
		"$numberLong": "1641772800000"
	},
	"country_see_in_array": 1,
	"interested_array": 1,
	"country_see_in_arrray": 1,
	"interested_arrray": 1,
	"is_fetured": 1,
	"new_interested_1": [
		null
	],
	"country_see_in_array_new": [
		"Worldwide"
	],
	"inter_array_new": [
		null
	],
	"country_see_inin": [
		"Worldwide"
	],
	"country_new_array": [
		"Egypt"
	],
	"country_new": [
		"Worldwide"
	],
	"country_seen_new": [
		"Egypt"
	],
	"resource": {
		"video": "/234066808.mp4",
		// "image": "/uploads/901289982.jpg",
		"page_logo": "257267758.jpg"
	}
}

const Item = ({ icon, label, value, isListTags }) => {
	return (
		<div className="sm:col-span-1">

			<dt className="text-sm font-regular text-gray-700 flex items-center">{icon}{label}</dt>
			{isListTags ? (
				<div className='flex flex-wrap gap-2 mt-2'>
					{
						JSON.parse(value).map((item, index) =>
							<span key={index} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium text-gray-800 border border-gray-300 capitalize">
								{item}
							</span>
						)}
				</div>
			) :
				(
					<dd className="mt-2 text-sm text-gray-900 leading-6">{value}</dd>
				)
			}
		</div>
	)
}


export function ViewAnalyticsModal({ viewAnalytics, setViewAnalytics }) {
	const cancelButtonRef = useRef(null)

	return createPortal(
		<React.Fragment>
			<Transition.Root show={viewAnalytics} as={Fragment}>
				<Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setViewAnalytics}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
					</Transition.Child>

					<div className="fixed z-10 inset-0 overflow-y-auto">
						<button
							type="button"
							className="absolute text-white top-1/2 left-4 p-3 rounded-full bg-black bg-opacity-50 z-50 hover:bg-opacity-80"
							style={{ transform: "translateY(-50%)" }}
						>
							<ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
						</button>
						<button
							type="button"
							className="absolute text-white top-1/2 right-4 p-3 rounded-full bg-black bg-opacity-50 z-50 hover:bg-opacity-80"
							style={{ transform: "translateY(-50%)" }}
						>
							<ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
						</button>

						<div className="flex items-end p-6 sm:items-center justify-center min-h-full text-center h-full">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<Dialog.Panel className="w-full h-full relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:mx-14 sm:max-w-7xl sm:w-full" style={{ maxHeight: "900px" }}>
									<button
										type="button"
										// className="absolute text-gray-400 hover:text-gray-500 "
										className="absolute text-white top-5 right-5 p-1 rounded-full bg-black bg-opacity-50 z-50 hover:bg-opacity-80"

										onClick={() => setViewAnalytics(false)}
									>
										<XIcon className="h-5 w-5" aria-hidden="true" />
									</button>
									<div className="w-full h-full grid grid-cols-1 gap-y-8 gap-x-6 items-start overflow-y-scroll sm:grid-cols-12 lg:gap-x-8 lg:overflow-hidden">
										<div className="col-span-12 border border-y-0 border-l-0 border-gray-200 lg:col-span-5 md:col-span-12 ">
											<div className='w-full'>
												{
													adItem.resource.image ?
														<img className='flex-shrink-0 object-cover h-96 mx-auto bg-slate-200' src={`https://aas-bucket.s3.amazonaws.com/uploads/${adItem.resource.image}`} alt="" /> :
														<video className='flex-shrink-0 object-cover h-96 mx-auto' alt="" controls>
															<source src={`https://aas-bucket.s3.amazonaws.com/uploads${adItem.resource.video}`} type="video/mp4" />
														</video>
												}
											</div>
											<div className='w-full py-3 px-5 flex items-center justify-between bg-gray-100'>
												<div>
													<p className="text-gray-900 text-m font-medium line-clamp-1">{adItem.title}</p>
													{/* <p className="mt-1 text-gray-500 text-sm">{ }</p> */}
												</div>
												<button type="button" disabled className="inline-flex min-w-fit items-center px-4 py-2 border border-gray-300 Rshadow-sm text-sm font-medium rounded-md text-gray-700">{adItem.button}</button>
											</div>
											<AdStats ad={adItem} fullStats={true} />
											<div className='w-full flex items-stretch gap-3 p-5 border border-x-0 border-b-0'>
												<button
													type="button"
													className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
												>
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ width: "20px", marginRight: "8px" }}>
														<path d="M10.128 13.081V22.375H13.869V13.082H16.989L17.456 9.46H13.869V7.147C13.869 6.099 14.16 5.384 15.664 5.384L17.582 5.383V2.143C17.25 2.099 16.112 2 14.787 2C12.021 2 10.128 3.688 10.128 6.788V9.459H7V13.081H10.128Z" fill="#3C5A9A" />
													</svg>
													Visit page
												</button>
												<button
													type="button"
													className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
													onClick={() => setViewAnalytics(prev => !prev)}
												>
													<ExternalLinkIcon className='w-5 mr-2' />
													Visit post
												</button>
											</div>
										</div>
										<div className="w-full col-span-12 p-5 pr-5 h-full overflow-scroll lg:col-span-7 lg:pl-0 md:px-5 md:col-span-12 md:overflow-visible">
											<div className="w-full flex items-center pb-5">
												<img className="w-10 h-10 bg-gray-300 rounded-full border" src={`https://aas-bucket.s3.amazonaws.com/uploads/${adItem.resource.page_logo}`} alt="" />
												<div className="w-full flex items-start justify-between ml-4">
													<div>
														<h3 className="text-gray-900 text-m font-medium">{adItem.page_name}</h3>
														<div className='flex text-gray-500'>
															<p className="mt-1 text-gray-500 text-sm">20-09-2022</p>
															<span className='mx-3 font-thin'>|</span>
															<p className="mt-1 text-gray-500 text-sm">20-09-2022</p>
														</div>
													</div>
												</div>
											</div>
											<p className='w-full mb-5 text-m text-gray-500 line-clamp-3'>
												{adItem.Ad_Description ? adItem.Ad_Description : "No description"}
											</p>
											<AdItemInfo />
											<div className="border-t border-gray-200 py-6 flex flex-col items-center">
												<AdStats ad={adItem} />
												<AanalyticsChart />
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</React.Fragment>,
		window.modals
	)
}

const AdItemInfo = () => {
	return (
		<div className="border-t border-gray-200 py-6">
			<dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
				{adItem.category && <Item icon={<FlagIcon className='w-4 mr-2' />} label="Category:" value={adItem.category} isListTags={true} />}
				{adItem.interested && <Item icon={<FlagIcon className='w-4 mr-2' />} label="Targeting Interest:" value={adItem.interested} isListTags={true} />}
				{adItem.category && <Item icon={<FlagIcon className='w-4 mr-2' />} label="Target Countries:" value={adItem.country} isListTags={true} />}
				{adItem.country && <Item icon={<FlagIcon className='w-4 mr-2' />} label="Country Seen in:" value={adItem.country_see_in} />}
				{adItem.gender && <Item icon={<FlagIcon className='w-4 mr-2' />} label="Target Gender:" value={adItem.gender} />}
				{adItem.age && <Item icon={<FlagIcon className='w-4 mr-2' />} label="Target Age:" value={adItem.age} />}
				{adItem.lang && <Item icon={<FlagIcon className='w-4 mr-2' />} label="Target Language:" value={adItem.lang} />}
			</dl>
		</div>
	)
}