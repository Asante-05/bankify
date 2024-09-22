// import React from 'react'

// function Home() {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home

import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/rightSidebar'
import TotalBalanceBox from '@/components/totalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

async function Home() {
  const loggedIn = await getLoggedInUser();
  console.log(loggedIn)
  
  // const user = { 
  //   firstName: 'Hajime',
  //   lastName: 'Gyuomei',
  //   email: 'stonebreathing@hahshira.com'
  // }

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-deader '>
          <HeaderBox type="greeting" title="Welcome" user={loggedIn?.name || 'Guest'}
            subtext='Access and manage your account and transaction efficiently'
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={3123.32}
          />
        </header>
      </div>
      {/* <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 112323.30}, {currentBalance: 123132.20}]}
      /> */}
    </section>
  )
}

export default Home