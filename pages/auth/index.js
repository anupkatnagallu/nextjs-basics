import User from '../../components/User';

function authIndexPage(props) {
    return (
        <div>
          <h1>The Auth Index page of {props.name}</h1>
          <User name='Anup' age={27} />
        </div>
    )
  }

authIndexPage.getInitialProps = context => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ name: 'Awesome App (Auth)' })
        }, 1000);
      })
      return promise;
}

export default authIndexPage;