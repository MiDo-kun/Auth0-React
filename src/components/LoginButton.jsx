import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <>
        <h1>Auth0 Login</h1>
        <p style={{textAlign: 'center'}}>An implementation of authentication using Auth0.</p>
        <p>You can view the code <a href="https://github.com/MiDo-kun/Auth0-React" target="_blank" rel="noreferrer">here</a>.</p>

        <button onClick={() => loginWithRedirect()}>
          Sign In
        </button>

        <p id="workflow">Workflow Diagram</p>
        <img id="workflow-img" src="https://mermaid.ink/img/pako:eNptkstuwjAQRX9l5DX8QJAqhYRHgKoIUDdOF1Y8gEViU8cuqgj_Xj8Qigq7ke8Z37n2XEmlOJKEHDQ7H2GXj0oJkNK5ahDW7IBfMBy-dZ8CL7DWai9q7GBM72UkYkvgVuoAhewgo64SsqdnXoecTqRBDZlGjtIIVrdRzoM8oak1Ry9UzCBchDlCui4iMomTsFrwfn8HUzpDidp3pFWFbQs7dUIZu6bh4hndGqVf6bNw6wa50FgZMKoXs2dbyJ9n4ywA40fyD2s6mPvoyhoYW2PU3WUepijoFiX3iWCD3xbb4Jcj64WOfBH4Bb3bvo62CNCS5ljjPwD2WjXgMz8-YPkU1P9xB-mIDEiDumGCuz24erYkbqAGS5K4kjN9Kkkpb45zk6rtr6xIYrTFAbFnP1sumFufhiR79yzu1Hk45_e4WGG_bn9KK8nF?type=png" alt="Workflow Diagram"/>

      </>
    )
  )
}

export default LoginButton
