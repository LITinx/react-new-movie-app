import { HeaderNav } from './HeaderNav'
import { Search } from './Search'

export const Header = () => {
	return (
		<div className='bg-slate-800 py-4'>
			<div className='flex items-center justify-between px-14'>
				<HeaderNav />
				<Search />
			</div>
		</div>
	)
}
