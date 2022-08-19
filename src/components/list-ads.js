import AdItem from './ad-item'

export default function ListAds({ data}) {

	return (
		<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
			{data.map((ad, index) => (
				<li key={index} className="col-span-1 bg-white rounded-lg shadow w-full">
					<AdItem ad={ad} />
				</li>
			))}
		</ul>
	)
}

// ()=>{
// 	{data.map((adItem) => (
// 		<li key={adItem._id} className="col-span-1 bg-white rounded-lg shadow w-full">
// 			<div className='flex flex-col items-center'>
// 				<div className="w-full flex items-center p-5">
// 					<img className="w-10 h-10 bg-gray-300 rounded-full border" src={`https://aas-bucket.s3.amazonaws.com/uploads/${adItem.resource.page_logo}`} alt="" />
// 					<div className="w-full flex items-start justify-between ml-4">
// 						<div>
// 							<h3 className="text-gray-900 text-m font-medium">{adItem.page_name}</h3>
// 							<div className='flex text-gray-500'>
// 								<p className="mt-1 text-gray-500 text-sm">20-09-2022</p>
// 								<span className='mx-3 font-thin'>|</span>
// 								<p className="mt-1 text-gray-500 text-sm">20-09-2022</p>
// 							</div>
// 						</div>
// 						<button>
// 							<ArrowsExpandIcon className='w-6 text-gray-500 hover:text-gray-700' />
// 						</button>
// 					</div>
// 				</div>
// 				<p className='w-full px-5 mb-5 text-m text-gray-500 line-clamp-1'>
// 					{adItem.Ad_Description ? adItem.Ad_Description : "No description"}
// 				</p>
// 				<div className='w-full -mx-5'>
// 					<video className='flex-shrink-0 object-contain h-60 mx-auto' alt="" controls>
// 						<source src={`https://aas-bucket.s3.amazonaws.com/uploads${adItem.resource.video}`} type="video/mp4" />
// 					</video>
// 					{/* <img className='flex-shrink-0 object-contain h-60 mx-auto' src={`https://aas-bucket.s3.amazonaws.com/uploads/${adItem.resource.image}`} alt="" /> */}
// 				</div>
// 				<div className='w-full py-3 px-5 flex items-center justify-between bg-gray-100'>
// 					<div>
// 						<p className="text-gray-900 text-m font-medium line-clamp-1">{adItem.title}</p>
// 						{/* <p className="mt-1 text-gray-500 text-sm">{ }</p> */}
// 					</div>
// 					<button type="button" class="inline-flex min-w-fit items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{adItem.button}</button>
// 				</div>
// 				<AdStats dataItem={adItem} />
// 			</div>
// 		</li>
// 	))}
// 	{data.map((adItem) => (
// 		<li key={adItem._id} className="col-span-1 bg-white rounded-lg shadow w-full">
// 			<div className='flex flex-col items-center'>
// 				<div className="w-full flex items-center p-5">
// 					<img className="w-10 h-10 bg-gray-300 rounded-full border" src={`https://aas-bucket.s3.amazonaws.com/uploads/${adItem.resource.page_logo}`} alt="" />
// 					<div className="w-full flex items-start justify-between ml-4">
// 						<div>
// 							<h3 className="text-gray-900 text-m font-medium">{adItem.page_name}</h3>
// 							<div className='flex text-gray-500'>
// 								<p className="mt-1 text-gray-500 text-sm">20-09-2022</p>
// 								<span className='mx-3 font-thin'>|</span>
// 								<p className="mt-1 text-gray-500 text-sm">20-09-2022</p>
// 							</div>
// 						</div>
// 						<button>
// 							<ArrowsExpandIcon className='w-6 text-gray-500 hover:text-gray-700' />
// 						</button>
// 					</div>
// 				</div>
// 				<p className='w-full px-5 mb-5 text-m text-gray-500 line-clamp-1'>
// 					{adItem.Ad_Description ? adItem.Ad_Description : "No description"}
// 				</p>
// 				<div className='w-full -mx-5'>
// 					<video className='flex-shrink-0 object-contain h-60 mx-auto' alt="" controls>
// 						<source src={`https://aas-bucket.s3.amazonaws.com/uploads${adItem.resource.video}`} type="video/mp4" />
// 					</video>
// 					{/* <img className='flex-shrink-0 object-contain h-60 mx-auto' src={`https://aas-bucket.s3.amazonaws.com/uploads/${adItem.resource.image}`} alt="" /> */}
// 				</div>
// 				<div className='flex justify-between py-4 w-full'>
// 					<div className='flex flex-col items-center w-full'>
// 						<span className='text-m font-medium mb-1'>{adItem.like}</span>
// 						<span className="text-sm font-regular text-red-500 flex items-center"><HeartIcon className='mr-2 w-4' />Likes</span>
// 					</div>
// 					<div className='flex flex-col items-center w-full border border-y-0 border-gray-200'>
// 						<span className='text-m font-medium mb-1'>{adItem.comment}</span>
// 						<span className="text-sm font-regular text-teal-500 flex items-center"><ChatIcon className='mr-2 w-4' />Comments</span>
// 					</div>
// 					<div className='flex flex-col items-center w-full'>
// 						<span className='text-m font-medium mb-1'>{adItem.share}</span>
// 						<span className="text-sm font-regular text-blue-600 flex items-center"><ShareIcon className='mr-2 w-4' />Shares</span>
// 					</div>
// 				</div>
// 				<div className='flex justify-between pb-5 w-full'>
// 					<div className='flex flex-col items-center w-full'>
// 						<span className='text-m font-medium mb-1'>{adItem.like}</span>
// 						<span className="text-sm font-regular text-gray-700 flex items-center"><EyeIcon className='mr-2 w-4' />First seen</span>
// 					</div>
// 					<div className='flex flex-col items-center w-full border border-y-0 border-gray-200'>
// 						<span className='text-m font-medium mb-1'>{adItem.comment}</span>
// 						<span className="text-sm font-regular text-gray-700 flex items-center"><CalendarIcon className='mr-2 w-4' />Days</span>
// 					</div>
// 					<div className='flex flex-col items-center w-full'>
// 						<span className='text-m font-medium mb-1'>{adItem.share}</span>
// 						<span className="text-sm font-regular text-gray-700 flex items-center"><EyeOffIcon className='mr-2 w-4' />Last seen</span>
// 					</div>
// 				</div>
// 			</div>
// 		</li>
// 	))}
// 	{data.map((adItem) => (
// 		<li key={adItem._id} className="col-span-1 bg-white rounded-lg shadow w-full">
// 			<div className='flex flex-col items-center'>
// 				<div className="w-full flex items-center p-5">
// 					<img className="w-10 h-10 bg-gray-300 rounded-full border" src={`https://aas-bucket.s3.amazonaws.com/uploads/${adItem.resource.page_logo}`} alt="" />
// 					<div className="w-full flex items-start justify-between ml-4">
// 						<div>
// 							<h3 className="text-gray-900 text-m font-medium">{adItem.page_name}</h3>
// 							<div className='flex text-gray-500'>
// 								<p className="mt-1 text-gray-500 text-sm">20-09-2022</p>
// 								<span className='mx-3 font-thin'>|</span>
// 								<p className="mt-1 text-gray-500 text-sm">20-09-2022</p>
// 							</div>
// 						</div>
// 						<button>
// 							<ArrowsExpandIcon className='w-6 text-gray-500 hover:text-gray-700' />
// 						</button>
// 					</div>
// 				</div>
// 				<p className='w-full px-5 mb-5 text-m text-gray-500 line-clamp-1'>
// 					{adItem.Ad_Description ? adItem.Ad_Description : "No description"}
// 				</p>
// 				<div className='w-full -mx-5'>
// 					<video className='flex-shrink-0 object-contain h-60 mx-auto' alt="" controls>
// 						<source src={`https://aas-bucket.s3.amazonaws.com/uploads${adItem.resource.video}`} type="video/mp4" />
// 					</video>
// 					{/* <img className='flex-shrink-0 object-contain h-60 mx-auto' src={`https://aas-bucket.s3.amazonaws.com/uploads/${adItem.resource.image}`} alt="" /> */}
// 				</div>
// 				<div className='flex justify-between py-4 w-full'>
// 					<div className='flex flex-col items-center w-full'>
// 						<span className='text-m font-medium mb-1'>{adItem.like}</span>
// 						<span className="text-sm font-regular text-red-500 flex items-center"><HeartIcon className='mr-2 w-4' />Likes</span>
// 					</div>
// 					<div className='flex flex-col items-center w-full border border-y-0 border-gray-200'>
// 						<span className='text-m font-medium mb-1'>{adItem.comment}</span>
// 						<span className="text-sm font-regular text-teal-500 flex items-center"><ChatIcon className='mr-2 w-4' />Comments</span>
// 					</div>
// 					<div className='flex flex-col items-center w-full'>
// 						<span className='text-m font-medium mb-1'>{adItem.share}</span>
// 						<span className="text-sm font-regular text-blue-600 flex items-center"><ShareIcon className='mr-2 w-4' />Shares</span>
// 					</div>
// 				</div>
// 				<div className='w-full py-3 px-5 flex items-center justify-between bg-gray-100'>
// 					<div>
// 						<p className="text-gray-900 text-m font-medium line-clamp-1">{adItem.title}</p>
// 						{/* <p className="mt-1 text-gray-500 text-sm">{ }</p> */}
// 					</div>
// 					<button type="button" class="inline-flex min-w-fit items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{adItem.button}</button>
// 				</div>
// 				<div className='flex justify-between pb-5 w-full'>
// 					<div className='flex flex-col items-center w-full'>
// 						<span className='text-m font-medium mb-1'>{adItem.like}</span>
// 						<span className="text-sm font-regular text-gray-700 flex items-center"><EyeIcon className='mr-2 w-4' />First seen</span>
// 					</div>
// 					<div className='flex flex-col items-center w-full border border-y-0 border-gray-200'>
// 						<span className='text-m font-medium mb-1'>{adItem.comment}</span>
// 						<span className="text-sm font-regular text-gray-700 flex items-center"><CalendarIcon className='mr-2 w-4' />Days</span>
// 					</div>
// 					<div className='flex flex-col items-center w-full'>
// 						<span className='text-m font-medium mb-1'>{adItem.share}</span>
// 						<span className="text-sm font-regular text-gray-700 flex items-center"><EyeOffIcon className='mr-2 w-4' />Last seen</span>
// 					</div>
// 				</div>
// 			</div>
// 		</li>
// 	))}
// }