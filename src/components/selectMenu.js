export default function SelectMenu({label, options}) {
	return (
	  <div>
		<label htmlFor="location" className="text-sm font-regular text-gray-700 flex items-center">
		  {label}
		</label>
		<select
		  id="location"
		  name="location"
		  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
		  defaultValue="Canada"
		>
			{options}
		</select>
	  </div>
	)
  }