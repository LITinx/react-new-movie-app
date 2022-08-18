import classNames from 'classnames'

export const Dropdown = ({ list, isOpen }) => {
	return (
		<ul
			className={classNames(
				'border border-slate-500 -left-3 top-10 absolute bg-slate-600 shadow-sm w-max rounded-md shadow-black py-2 font-normal transition-opacity opacity-1 duration-300 cursor-pointer',
				{ 'opacity-0': !isOpen, hidden: !isOpen },
			)}
		>
			{list?.map((item) => {
				return (
					<li
						key={item}
						className='hover:bg-slate-500 bg-transparent transition-colors pr-7 pl-6 py-1'
					>
						{item}
					</li>
				)
			})}
		</ul>
	)
}
