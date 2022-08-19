import React from 'react';
import { CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar } from 'recharts';

const data = [
	{ name: 'Page A', likes: 600, comments: 400, shares: 135, amt: 2400 },
	{ name: 'Page A', likes: 700, comments: 500, shares: 120, amt: 2400 },
	{ name: 'Page A', likes: 200, comments: 90, shares: 45, amt: 2400 },
	{ name: 'Page A', likes: 700, comments: 500, shares: 120, amt: 2400 },
	{ name: 'Page A', likes: 200, comments: 90, shares: 45, amt: 2400 },
	{ name: 'Page A', likes: 600, comments: 400, shares: 135, amt: 2400 },
	{ name: 'Page A', likes: 700, comments: 500, shares: 120, amt: 2400 },
	{ name: 'Page A', likes: 600, comments: 400, shares: 135, amt: 2400 },
	{ name: 'Page A', likes: 700, comments: 500, shares: 120, amt: 2400 },
	{ name: 'Page A', likes: 200, comments: 90, shares: 45, amt: 2400 },
]

// const addData = {
// 	"analytic": [
// 		{
// 			"_id": "61d96e6789ca8e7193389ca6",
// 			"post_id": "61d96e6789ca8e7193389ca4",
// 			"share": 2348,
// 			"like": 1212719,
// 			"comment": 6215,
// 			"last_seen": "2022-01-08",
// 			"updated_at": "2022-01-08T10:58:47.539Z",
// 			"created_at": "2022-01-08T10:58:47.539Z"
// 		},
// 		{
// 			"_id": "6256680968b3ea68ff15d1dc",
// 			"post_id": "61d96e6789ca8e7193389ca4",
// 			"share": 2482,
// 			"comment": 7364,
// 			"like": 1345091,
// 			"last_seen": "2022-04-12",
// 			"updated_at": "2022-04-13T06:04:57.816Z",
// 			"created_at": "2022-04-13T06:04:57.816Z"
// 		},
// 		{
// 			"_id": "62764efa512788697f47dabd",
// 			"post_id": "61d96e6789ca8e7193389ca4",
// 			"share": 2495,
// 			"comment": 7599,
// 			"like": 1378461,
// 			"last_seen": "2022-05-06",
// 			"updated_at": "2022-05-07T10:50:34.345Z",
// 			"created_at": "2022-05-07T10:50:34.345Z"
// 		}
// 	]
// }

export default function AanalyticsChart() {
	return (
		<BarChart
			width={712}
			height={400}
			data={data}
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5
			}}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey="likes" fill="#ff6666" />
			<Bar dataKey="comments" fill="#14B8A6" />
			<Bar dataKey="shares" fill="#3b82f6" />
		</BarChart>
	)
}
