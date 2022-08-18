import { Menu } from './Menu/Menu'
import { TextLogo } from './TextLogo'

export const HeaderNav = () => {
	return (
		<div className='flex items-center '>
			<TextLogo>Movies</TextLogo>
			<Menu />
		</div>
	)
}
