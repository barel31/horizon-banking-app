import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

export default function Home() {
  const loggedIn: any = {
    firstName: 'Barel',
    lastName: 'Shraga',
    email: 'barel123133@gmail.com',
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTION
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={
          [
            {
              currentBalance: 123.5,
            },
            {
              currentBalance: 500.5,
            },
          ] as any
        }
      />
    </section>
  );
}
