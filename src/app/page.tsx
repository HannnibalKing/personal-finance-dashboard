export default function Home() {
  return (
    <main className="finance-shell">
      <aside className="sidebar">
        <p className="brand">LEDGER / 01</p>
        <nav aria-label="Primary navigation">
          <a className="active" href="#overview">Overview</a>
          <a href="#activity">Activity</a>
          <a href="#goals">Goals</a>
        </nav>
        <p className="sidebar-note">Personal finance workspace<br />Updated today at 09:42</p>
      </aside>
      <section className="content" id="overview">
        <header className="topbar">
          <div><p className="kicker">Tuesday, August 19</p><h1>Good morning, Taylor.</h1></div>
          <button className="icon-button" aria-label="Open notifications">◎</button>
        </header>
        <section className="hero-grid" aria-label="Financial summary">
          <article className="balance-panel"><p className="kicker">Available to spend</p><strong>$4,286.40</strong><p className="positive">↑ 8.4% from last month</p><div className="sparkline" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div></article>
          <article className="metric"><span>Monthly income</span><strong>$8,420</strong><small>2 deposits</small></article>
          <article className="metric"><span>Monthly spend</span><strong>$4,133</strong><small className="positive">$567 under plan</small></article>
        </section>
        <section className="lower-grid">
          <article className="panel" id="activity"><div className="panel-heading"><div><p className="kicker">Cash flow</p><h2>Where your money moved</h2></div><span className="period">Last 30 days</span></div><div className="bars" aria-label="Cash flow chart"><i style={{ height: "38%" }} /><i style={{ height: "52%" }} /><i style={{ height: "44%" }} /><i style={{ height: "68%" }} /><i style={{ height: "57%" }} /><i style={{ height: "82%" }} /><i style={{ height: "74%" }} /><i style={{ height: "92%" }} /></div><div className="chart-labels"><span>Jul 23</span><span>Aug 19</span></div></article>
          <article className="panel" id="goals"><div className="panel-heading"><div><p className="kicker">Goals</p><h2>Building momentum</h2></div><button className="text-button">Manage</button></div><div className="goal"><div><span>Emergency fund</span><strong>$6,800 <small>/ $10,000</small></strong></div><div className="progress"><i style={{ width: "68%" }} /></div><small>68% complete</small></div><div className="goal"><div><span>Japan trip</span><strong>$1,240 <small>/ $2,500</small></strong></div><div className="progress"><i style={{ width: "49%" }} /></div><small>49% complete</small></div></article>
        </section>
        <section className="panel transactions"><div className="panel-heading"><div><p className="kicker">Activity</p><h2>Recent transactions</h2></div><button className="text-button">View all</button></div><ul><li><span className="transaction-icon">M</span><span><strong>Metro Market</strong><small>Groceries · Today</small></span><b>-$82.14</b></li><li><span className="transaction-icon">S</span><span><strong>Sunset Software</strong><small>Salary · Yesterday</small></span><b className="positive">+$4,210.00</b></li><li><span className="transaction-icon">H</span><span><strong>Haven Utilities</strong><small>Home · Aug 16</small></span><b>-$126.80</b></li></ul></section>
      </section>
    </main>
  );
}
