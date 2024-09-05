import './App.css';
import { Suspense } from 'react';
import Theme from './components/theme';
import Users from './components/users';
import Optimistic from './components/optimistic';
import FormStatus from './components/form-status';
import FormState from './components/form-state';
import Action from './actions/form-action';

function App() {
  return (
    <>
      <div>
        <Suspense
          fallback={
            <h1 className="text-2xl text-center font-bold mt-5">Loading...</h1>
          }
        >
          <Action />
          <FormState />
          <FormStatus />
          <Optimistic />
          <Users />
          <Theme />
        </Suspense>
      </div>
    </>
  );
}

export default App;
