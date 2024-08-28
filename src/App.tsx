import { useEffect } from 'react';
import './App.css';
import getAuthorsRequest from './api/authors/getAuthorsRequest';
import getCommentsRequest from './api/comments/getCommentsRequest';
import useMockAdapter from './api/useMockAdapter';

function App() {
  useMockAdapter();
  useEffect(() => {
    getAuthorsRequest().then((data) => {
      console.log('getAuthorsRequest data', data);
    });
    getCommentsRequest(1).then((data) => {
      console.log('getCommentsRequest data', data);
    });
  }, []);

  return <></>;
}

export default App;
