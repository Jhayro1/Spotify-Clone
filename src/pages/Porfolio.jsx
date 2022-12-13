import {BsGithub,BsPerson} from 'react-icons/bs';
const Porfolio = () => {
  return (
    <div className='flex flex-row justify-around mt-20'>
        <div className='flex flex-col w-[200px] p-4 bg-white/5 bg-opacity-80 
            backdrop-blur-sm animate-slideup rounded-lg cursor-pointer items-center py-7'>
            <BsGithub className='text-white text-[50px]'/>
            <a className="text-white cursor-pointer pt-5" href="https://github.com/Jhayro1/Spotify-Clone" >See Code</a>

        </div>
        <div className='flex flex-col w-[200px] p-4 bg-white/5 bg-opacity-80 
            backdrop-blur-sm animate-slideup rounded-lg cursor-pointer items-center py-7'>
              <BsPerson className='text-white text-[50px]'/>
            <a className="text-white cursor-pointer pt-5" href="">See Porfolio</a>
            
        </div>
    </div>
  )
}

export default Porfolio
