import React from "react";

export default function App() {

  const [page, setPage] = React.useState(0)

  function handlePageChange(event) {
    setPage(event.target.value)
  }

  return (
    <div className="app-container">
      <header>Corb's Art Blog</header>
      <nav>
        <button onClick={handlePageChange} value="0">most recent post</button>
        <button onClick={handlePageChange} value="1">landscapes</button>
        <button onClick={handlePageChange} value="2">sprites</button>
      </nav>
      {page == 0 && 
        <div className="recent-post">
          recent post page
        </div>
      }

      {page == 1 && 
        <div className="landscapes">
          landscapes page
        </div>
      }

      {page == 2 && 
        <div className="sprites">
          sprites page
        </div>
      }
    </div>
  );
}