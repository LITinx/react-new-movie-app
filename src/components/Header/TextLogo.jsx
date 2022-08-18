export function TextLogo({ children }) {
	return (
		<div className='bg-gradient-to-r from-blue-700 to-cyan-400 rounded-lg'>
			<h3 className='text-slate-100 m-2 font-sans font-bold text-xl uppercase'>
				{children}
			</h3>
		</div>
	)
}
