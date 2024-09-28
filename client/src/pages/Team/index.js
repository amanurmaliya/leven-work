import React from 'react'
import Layout from '../../components/Layout'
import Footer from '../../components/Footer';
import Teamlayout from '../../components/Teamlayout';
function Team() {
  return (
    <div className='bg-gradient-to-r from-[#d1f3f4] via-[#a4ecf1] to-[#66d5f7]'>
    <Layout></Layout>
      {/* Changing the color here changes the overall bg color  */}
      <div className='flex p-5 bg-gradient-to-r from-[#d1f3f4] via-[#a4ecf1] to-[#66d5f7]'> 
        <div className='left mt-10 ml-10 '>
          <p className='text-3xl font-semibold'>MEET<span className='text-5xl -z-20'>😎</span> <span className='text-[#0b7676] font-semibold text-5xl'>Specialised  <br/> Team   </span>
           With The <br/> Best Track <span className='text-[#0b7676] font-semibold text-5xl'> Records</span></p>
        </div>
        <div className='right mt-10 ml-28 p-5 pt-10 text-xl'>
        <p>
            Meet The  <strong>Mavericks</strong>  - The <strong>Crazy Ones</strong>, The <strong>Misfits</strong>, the <strong>Rebels</strong>,
            <br/> The <strong>Square Pegs</strong> in <strong>Round Holes</strong>, 
            <br/>the ones who have set out on the <strong>Journey</strong> to <strong>Change</strong> The <strong>World...</strong>
            </p>
        </div>
      </div>
      <Teamlayout></Teamlayout>
      <div className='justify-center text-center'> Developers <a href="mailto:bhoomiagrawal665@gmail.com">
                    Bhoomi Agrawal |
                  </a>
                  <a href="mailto:at9399131958@gmail.com">
                  | Abhay Tiwari | 
                  </a>
                  <a href="mailto:manishashukla0012@gmail.com">
                    | Manisha Shukla |
                  </a>
                  <a href="mailto:amanurmaliya609@gmail.com">
                   | Aman Tripathi
                  </a></div>
      <Footer></Footer>
      </div>
  )
}

export default Team