import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'

import React from 'react'


const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    
    <main className='root'>
        <Sidebar />
          
        <BackgroundGradientAnimation>
        <MobileNav /> 
        <div className='root-container'>
            
            <div className='wrapper'>
                {children}
            </div>
            
        </div>
        
        </BackgroundGradientAnimation>
        </main>
        
    
   
    
  )
}

export default Layout