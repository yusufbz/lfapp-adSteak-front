import { CursorClickIcon, FlagIcon, PaperClipIcon, RefreshIcon, SortDescendingIcon, TranslateIcon, ViewGridAddIcon } from '@heroicons/react/outline'
import SelectMenu from './selectMenu'

export default function FilterOptions() {
	return (
		<div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6 ">
			<div className='flex justify-between items-center mb-4'>
				<h4 className="text-xl font-medium text-zinc-900">Filter options:</h4>
				<button
					className='flex items-center text-gray-600'
					onClick={() => console.log("click")}
				>
					<RefreshIcon className='w-5 mr-2'></RefreshIcon>
					Reset Filter
				</button>
			</div>
			<div className='grid grid-cols-3 gap-4 gap-x-6'>
				<SelectMenu
					label={<><FlagIcon className='w-4 mr-2'></FlagIcon>country</>}
					options={<>
						<option>United kingdom</option>
						<option>China</option>
						<option>Spain</option>
					</>}
				/>
				<SelectMenu
					label={<><CursorClickIcon className='w-4 mr-2'></CursorClickIcon>Button type</>}
					options={<>
						<option>Shop now</option>
						<option>Learn more</option>
						<option>Play now</option>
					</>}
				/>
				<SelectMenu
					label={<><PaperClipIcon className='w-4 mr-2'></PaperClipIcon>Media</>}
					options={<>
						<option>Video</option>
						<option>Image</option>
					</>}
				/>
				<SelectMenu
					label={<><TranslateIcon className='w-4 mr-2'></TranslateIcon>Language</>}
					options={<>
						<option>English</option>
						<option>Arabic</option>
						<option>French</option>
					</>}
				/>
				<SelectMenu
					label={<><ViewGridAddIcon className='w-4 mr-2'></ViewGridAddIcon>Category</>}
					options={<>
						<option>Fashion</option>
						<option>Beauty</option>
						<option>Events</option>
					</>}
				/>
				<SelectMenu
					label={<><SortDescendingIcon className='w-4 mr-2'></SortDescendingIcon>Sort</>}
					options={<>
						<option>Last seen</option>
						<option>Comments</option>
						<option>Likes</option>
						<option>Shares</option>
					</>}
				/>
			</div>
		</div>
	)
}
