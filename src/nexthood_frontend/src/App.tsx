import "./css/landing-page.css"



function App() {

  return (
    <>
      <header>
        <div className="logo">
          Nexthood
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="/dashboard">Get Started</a>
        </nav>
        <div className="menu_button">
          <div className="menu_dash"></div>
          <div className="menu_dash"></div>
          <div className="menu_dash"></div>
        </div>
      </header>
      <main>
        <div className="hero">
          <div className="text_block">
            <p className="sub_head">TEAM<br/>404</p>
            <h1>Nexthood</h1>
            <p> <i>decentralized social media for local tech communities...</i></p>
            <a href="/auth/signup" className="call_to_action">Signup</a>
          </div>
        </div>
      </main>
      {/* <h1 className="text-red-600">Team 404</h1> */}
    </>
  )
}

export default App
