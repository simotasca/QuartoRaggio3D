export default function BayeSaRew() {
  return (
    <div className="d-flex h-100 text-center text-white bg-dark">
      <div
        className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"
        style={{ backgroundImage: 'url("/resources/bannerBRS.jpg")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0">Baye Sa Rew</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Il Villaggio
              </a>
              <a className="nav-link" href="#">
                Contatti
              </a>
            </nav>
          </div>
        </header>

        <main className="px-3"></main>

        <footer className="mt-auto text-white mb-5 pb-5">
          <h1 className="display-1 fw-bold">Baye Sa Rew.</h1>
          <h1>Il villaggio di Gossas tutto da scoprire.</h1>
          <a className="btn btn-lg btn-light fw-bold mt-2">Learn more..</a>
        </footer>
      </div>

      {/*<div classNameName="container-fluid bg-success p-0" style={{ height: '1000px' }}>
      <img classNameName="img-fluid w-100" src="/resources/bannerBRS.jpg" />
      <div classNameName="container-lg mt-4">
        <h1 classNameName="text-center"> BAYE SA REW</h1>
      </div>
  </div>*/}
    </div>
  );
}
