import { Dropdown } from './Dropdown'
export function MenuItem({ handleEnter, activeMenu, menuTitle, list }) {
	return (
		<li
			className='relative p-2 cursor-pointer'
			onMouseEnter={() => handleEnter(menuTitle)}
			onMouseLeave={() => handleEnter('')}
		>
			<h6>{menuTitle}</h6>
			<Dropdown isOpen={activeMenu === menuTitle ? true : false} list={list} />
		</li>
	)
}
