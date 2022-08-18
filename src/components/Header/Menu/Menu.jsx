import { useState } from 'react'
import { Dropdown } from './Dropdown'
import { MenuItem } from './MenuItem'

export const Menu = () => {
	const [activeMenu, setActiveMenu] = useState('')

	return (
		<nav className='ml-10'>
			<ul className='flex items-center justify-between text-slate-200 space-x-4 font-medium'>
				<MenuItem
					handleEnter={setActiveMenu}
					activeMenu={activeMenu}
					menuTitle='Movies'
					list={['Popular', 'Top Rated', 'Upcoming', 'Now Playing']}
				/>
				<MenuItem
					handleEnter={setActiveMenu}
					activeMenu={activeMenu}
					menuTitle='TV'
					list={['Popular', 'Top Rated', 'TV Airing Today', 'TV On The Air']}
				/>
			</ul>
		</nav>
	)
}
