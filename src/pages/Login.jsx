import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function LoginPage() {
  return (
    <>
      <main>
        <Authenticator />
      </main>
    </>
  );
}

export default LoginPage;