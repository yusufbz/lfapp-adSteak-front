import React from 'react'
import { CalendarIcon, ChatIcon, EyeIcon, EyeOffIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'

const StatItem = ({ value, label, icon, iconColor, classN }) => {
	return (
		<div className={`flex flex-col items-center w-full ${classN ? classN : ""}`}>
			<span className="text-m font-medium mb-1">{value}</span>
			<span className={`text-sm font-regular ${iconColor} flex items-center`}>{icon}{label}</span>
		</div>
	)
}

export default function AdStats({ ad, fullStats }) {
	return (
		<div className='py-4 w-full'>
			<div className='flex justify-between w-full'>
				<StatItem value={ad.like} label="Likes" icon={<ThumbUpIcon className='mr-2 w-4' />} iconColor="text-red-500" />
				<StatItem value={ad.comment} label="Comments" icon={<ChatIcon className='mr-2 w-4' />} iconColor="text-teal-500" classN="border border-y-0 border-gray-200" />
				<StatItem value={ad.share} label="Shares" icon={<ShareIcon className='mr-2 w-4' />} iconColor="text-blue-500" />
			</div>
			{
				fullStats &&
				<div className='flex justify-between mt-5 w-full'>
					<StatItem value={ad.last_seen} label="First seen" icon={<EyeIcon className='mr-2 w-4' />} iconColor="text-gray-600" />
					<StatItem value={45} label="days" icon={<CalendarIcon className='mr-2 w-4' />} iconColor="text-gray-600" classN="border border-y-0 border-gray-200" />
					<StatItem value={ad.last_seen} label="Last seen" icon={<EyeOffIcon className='mr-2 w-4' />} iconColor="text-gray-600" />
				</div>
			}
		</div>
	)
}
