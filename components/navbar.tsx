import Logo from './logo'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center fixed w-full p-[26.5px] px-[28px]'>
        <Logo />
        <Button className='py-2 px-3.5 rounded-full text-[18px] font-medium'>Get Early Access</Button>
    </nav>
  )
}

export default Navbar