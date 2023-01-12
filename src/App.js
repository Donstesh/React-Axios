import React, { useEffect, useState } from 'react';
import './App.css';
import list from './components/list';
import withlistloading from './components/withlistloading';
import axios from 'axios';

function App() {
  const ListLoading = withlistloading(list);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'https://api.github.com/users/Donstesh/repos';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);

  return (
    <div className='App'>
      <div className='container'>
        <h1>My Github Repositories</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          with by Stephen Sienko
        </div>
      </footer>
    </div>
  );
}
export default App;
