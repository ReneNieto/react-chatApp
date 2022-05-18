import {useNavigate} from 'react-router-dom'



export default function Header({user, focusedUser}) {
    const navigate = useNavigate()
    function logout(){
        localStorage.removeItem('access_token')
        navigate('/login')
    }
    return (
    <>
    
    <div className="flex item-center justify-center  h-32 rounded-xl border-b ">
            <div className="flex items-center justify-between w-2/5 bg-white border-r">
                <div className="flex ml-7 items-center">
                    <div className="relative w-12 h-12 mr-2 ">
                        <img src="https://www.kaindl.com/fileadmin/_processed_/d/8/csm_2162_PE_Dekorbild_0ec3e17e00.jpg" alt="" className="w-12 h-12 rounded-full m-0 absolute z-10 " />
                        <div className="w-4 h-4 rounded-full bg-green-500 absolute bottom-0 right-0 z-20  "></div>
                    </div>
                    <div>
                        <h2 className='font-medium text-rose-700 p-1 rounded-lg cursor-pointer bg-[#f1f1f1] text-center' onClick={logout}> log out</h2>
                        <h3 className="font-medium text-black text-base">Good Morning</h3>
                        <h2 className="font-poppins text-slate-500 font-normal text-sm">{user.name}</h2>
                    </div>
                </div>
                <div className="flex item-center justify-evenly mr-12 ">
                    <button className="p-4 bg-slate-100 rounded-full mx-2 w-12 h-12"> 
                        <svg width="19" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.688 7.988H7.84V12.956H5.296V7.988H0.448V5.684H5.296V0.715999H7.84V5.684H12.688V7.988Z" fill="#ADADAD"/>
                        </svg>
                    </button>
                    <button className="p-4 bg-slate-100 rounded-full mx-2 w-12 h-12">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.99999 16.5C9.82499 16.5 10.5 15.825 10.5 15H7.49999C7.49999 15.825 8.16749 16.5 8.99999 16.5ZM13.5 12V8.25C13.5 5.9475 12.27 4.02 10.125 3.51V3C10.125 2.3775 9.62249 1.875 8.99999 1.875C8.37749 1.875 7.87499 2.3775 7.87499 3V3.51C5.72249 4.02 4.49999 5.94 4.49999 8.25V12L3.53249 12.9675C3.05999 13.44 3.38999 14.25 4.05749 14.25H13.935C14.6025 14.25 14.94 13.44 14.4675 12.9675L13.5 12Z" fill="#ADADAD"/>
                        </svg>  
                    </button>
                    <button className="p-4 bg-slate-100 rounded-full mx-2 w-12 h-12">
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.55059 14.6012C11.1684 14.6012 14.1012 11.6684 14.1012 8.05059C14.1012 4.4328 11.1684 1.5 7.55059 1.5C3.9328 1.5 1 4.4328 1 8.05059C1 11.6684 3.9328 14.6012 7.55059 14.6012Z" stroke="#ADADAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.6254 13.1247L16.7427 17.242" stroke="#ADADAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between w-3/5 ">
                {focusedUser &&
                    <>
                    
                        <div className="flex ml-7 items-center">
                            <div className="relative w-12 h-12 mr-2 ">
                                <img src="https://www.kaindl.com/fileadmin/_processed_/d/8/csm_2162_PE_Dekorbild_0ec3e17e00.jpg" alt="" className="w-12 h-12 rounded-full m-0 absolute z-10  "/>
                            </div>
                            <div>
                                <h3 className="font-medium text-black text-base">{focusedUser.name}</h3>
                                <h2 className="font-poppins text-slate-500 font-normal text-sm">Last seen Yesterday 02:30PM</h2>
                            </div>
                        </div>
                        <div className="flex item-center justify-evenly mr-12 ">
                            <button className="p-4 bg-slate-100 rounded-full mx-2 w-12 h-12 flex items-center justify-center">
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.55059 14.6012C11.1684 14.6012 14.1012 11.6684 14.1012 8.05059C14.1012 4.4328 11.1684 1.5 7.55059 1.5C3.9328 1.5 1 4.4328 1 8.05059C1 11.6684 3.9328 14.6012 7.55059 14.6012Z" stroke="#ADADAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.6254 13.1247L16.7427 17.242" stroke="#ADADAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <button className="p-4 bg-slate-100 rounded-full mx-2 w-12 h-12 flex items-center justify-center"> 
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 6H12V7.5C12 7.9125 12.3375 8.25 12.75 8.25C13.1625 8.25 13.5 7.9125 13.5 7.5V6H15C15.4125 6 15.75 5.6625 15.75 5.25C15.75 4.8375 15.4125 4.5 15 4.5H13.5V3C13.5 2.5875 13.1625 2.25 12.75 2.25C12.3375 2.25 12 2.5875 12 3V4.5H10.5C10.0875 4.5 9.75002 4.8375 9.75002 5.25C9.75002 5.6625 10.0875 6 10.5 6ZM14.4075 11.4525L12.5025 11.235C12.045 11.1825 11.595 11.34 11.2725 11.6625L9.89252 13.0425C7.77002 11.9625 6.03002 10.23 4.95002 8.1L6.33752 6.7125C6.66002 6.39 6.81752 5.9325 6.76502 5.4825L6.54752 3.5925C6.46502 2.835 5.82002 2.2575 5.06252 2.2575H3.76502C2.91752 2.2575 2.21252 2.9625 2.26502 3.81C2.66252 10.215 7.78502 15.33 14.1825 15.7275C15.03 15.78 15.735 15.075 15.735 14.2275V12.93C15.7425 12.18 15.165 11.535 14.4075 11.4525V11.4525Z" fill="#ADADAD"/>
                            </svg>
                            </button>
                            <button className="p-4 bg-slate-100 rounded-full mx-2 w-12 h-12 flex items-center justify-center">
                                <svg width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.5">
                                        <path d="M0 9C0 9.39556 0.117298 9.78224 0.337061 10.1111C0.556824 10.44 0.869181 10.6964 1.23463 10.8478C1.60009 10.9991 2.00222 11.0387 2.39018 10.9616C2.77814 10.8844 3.13451 10.6939 3.41421 10.4142C3.69392 10.1345 3.8844 9.77814 3.96157 9.39018C4.03874 9.00222 3.99913 8.60008 3.84776 8.23463C3.69638 7.86918 3.44004 7.55682 3.11114 7.33706C2.78224 7.1173 2.39556 7 2 7C1.46957 7 0.96086 7.21071 0.585787 7.58579C0.210714 7.96086 0 8.46957 0 9ZM0 16C0 16.3956 0.117298 16.7822 0.337061 17.1111C0.556824 17.44 0.869181 17.6964 1.23463 17.8478C1.60009 17.9991 2.00222 18.0387 2.39018 17.9616C2.77814 17.8844 3.13451 17.6939 3.41421 17.4142C3.69392 17.1345 3.8844 16.7781 3.96157 16.3902C4.03874 16.0022 3.99913 15.6001 3.84776 15.2346C3.69638 14.8692 3.44004 14.5568 3.11114 14.3371C2.78224 14.1173 2.39556 14 2 14C1.46957 14 0.96086 14.2107 0.585787 14.5858C0.210714 14.9609 0 15.4696 0 16ZM0 2C0 2.39556 0.117298 2.78224 0.337061 3.11114C0.556824 3.44004 0.869181 3.69638 1.23463 3.84776C1.60009 3.99913 2.00222 4.03874 2.39018 3.96157C2.77814 3.8844 3.13451 3.69392 3.41421 3.41421C3.69392 3.13451 3.8844 2.77814 3.96157 2.39018C4.03874 2.00222 3.99913 1.60008 3.84776 1.23463C3.69638 0.869181 3.44004 0.556824 3.11114 0.337061C2.78224 0.117298 2.39556 0 2 0C1.46957 0 0.96086 0.210714 0.585787 0.585787C0.210714 0.960859 0 1.46957 0 2Z" fill="#121212"/>
                                    </g>    
                                </svg>
                            </button>
                            
                        </div>

                
                    </>
            
            
            
            
                }
            </div>
        </div>
    
    </>
        
        
    )
}