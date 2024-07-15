// import React from 'react'

// function Home() {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home

import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/totalBalanceBox'
import React from 'react'

function Home() {
    const loggedIn = {firstname: 'Adrian'}

  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-deader '>
                <HeaderBox type="greeting" title="Welcom" user={loggedIn?.firstname || 'Guest'}
                subtext='Access and manage your account and transaction efficiently'
                />
                <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={3123.32}
                />
            </header>
        </div>
    </section>
  )
}

export default Home