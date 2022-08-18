import { AiOutlineSearch } from 'react-icons/ai'

export const Search = () => {
	return (
		<label
			htmlFor='searchInp'
			className='flex items-center bg-slate-600 rounded-md cursor-pointer shadow-sm shadow-black'
		>
			<input
				type='text'
				className='bg-transparent outline-none px-2 py-1 text-cyan-100'
				id='searchInp'
			/>
			<AiOutlineSearch className='py-1 text-cyan-200' size='27px' />
		</label>
	)
}
