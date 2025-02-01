import {FaSearch} from 'react-icons/fa'
import { Link, Navigate } from 'react-router-dom'
import About from '../pages/About'
const Header = () => {
return (
     <header className='bg-slate-200 shadow-black'>
            <div className='flex justify-between items-center p-4 max-w-6xl mx-auto'>
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                            <span className='text-slate-500'>Prime</span>
                            <span className='text-slate-700'>State</span>
                    </h1>
                    <form className='bg-slate-100 px-2 rounded-lg w-fit-content flex flex-wrap items-center'>
                            <input 
                             type="text"
                             placeholder='search..'
                             className='bg-transparent border-none focus:outline-none w-24 sm:w-64'
                             />
                            <button type="submit" className='bg-transparent p-2 rounded-lg'>
                            <FaSearch/>
                            </button>
                    </form>
                    <ul className='flex flex-wrap gap-4'>
                                <Link to='/'><li className='hidden sm:inline text-slate-700 hover:underline'>Home</li></Link>   
                                <Link to='/signin'> <li className='text-slate-700 hover:underline'>Sign in</li></Link>
                                <Link to='/about'> <li className='hidden sm:inline text-slate-700 hover:underline'>About</li> </Link>
                                
                    </ul>
            </div>
     </header>    
)
}

export default Header