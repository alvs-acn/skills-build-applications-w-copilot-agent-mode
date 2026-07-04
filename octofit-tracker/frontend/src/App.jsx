import './App.css'

function App() {
  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-5">
              <h1 className="display-5 fw-bold mb-3">OctoFit Tracker</h1>
              <p className="lead text-muted mb-4">
                A modern multi-tier fitness platform for logging workouts, creating teams,
                and tracking progress across the leaderboard.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a className="btn btn-primary" href="https://vite.dev/guide/" target="_blank" rel="noreferrer">
                  Explore Vite
                </a>
                <a className="btn btn-outline-secondary" href="https://react.dev/" target="_blank" rel="noreferrer">
                  Learn React 19
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
