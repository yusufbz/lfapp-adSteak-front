import { Disclosure } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, useLocation } from 'react-router-dom'


const user = {
	name: 'Tom Cook',
	email: 'tom@example.com',
	imageUrl:
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

export default function Navigation() {
	let location = useLocation();

	return (
		<Disclosure as="header" className="bg-gray-800">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
						<div className="relative h-16 flex items-center justify-between">
							<div className="flex items-center relative z-10 px-2 lg:px-0">
								<div className="flex-shrink-0 flex items-center">
									<img
										className="block h-8 w-auto"
										src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
										alt="Workflow"
									/>
								</div>
								<div className="hidden md:block">
									<div className="ml-10 flex items-baseline space-x-4">
										<Link to="/" className={`${location.pathname === "/" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} px-3 py-2 rounded-md text-sm font-medium`}>Dashboard</Link>
										<Link to="/favorites" className={`${location.pathname === "/favorites" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}  px-3 py-2 rounded-md text-sm font-medium`}>Favorites</Link>
									</div>
								</div>
							</div>
							<div className="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
								<div className="max-w-lg w-full lg:max-w-xs">
									<label htmlFor="search" className="sr-only">
										Search by keywords
									</label>
									<div className="relative">
										<div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
											<SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
										</div>
										<input
											id="search"
											name="search"
											className="block w-full bg-gray-700 border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm"
											placeholder="Search by keywords"
											type="search"
										/>
									</div>
								</div>
							</div>
							<div className="relative z-10 flex items-center lg:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
								<div className="flex items-center">
									<div>
										<img
											className="inline-block h-9 w-9 rounded-full"
											src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt=""
										/>
									</div>
									<div className="ml-3">
										<p className="text-sm font-medium text-white opacity-90 group-hover:opacity-100">{user.name}</p>
										<p className="text-xs font-medium text-white opacity-70 group-hover:opacity-90">{user.email}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</Disclosure>
	)
}
