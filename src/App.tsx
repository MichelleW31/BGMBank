import styles from './App.module.scss';
import {HashRouter as Router, Route} from 'react-router-dom';
// import Home from './components/Home/Home';
// import Login from './components/Login/Login';
// import Signup from './components/Signup/Signup';

const App = () => {
  // state = {
  //   username: '',
  // };

  // updateUsername = (name: string) => {
  //   this.setState({
  //     username: name,
  //   });
  // };

  return (
    <Router>
      <section className={styles.Header}>
        <h1 className={styles.Title}>BGM Bank</h1>
      </section>
    </Router>
    // <Router>
    //   <section class="heading">
    //     <h1 class="bgm_title">BGM Bank</h1>
    //   </section>
    //   <Route
    //     path="/"
    //     exact
    //     render={() => <Login updateUsername={this.updateUsername} />}
    //   />
    //   <Route
    //     path="/signup"
    //     exact
    //     render={() => <Signup updateUsername={this.updateUsername} />}
    //   />
    //   <Route
    //     path="/home"
    //     exact
    //     render={() => <Home username={this.state.username} />}
    //   />
    // </Router>
  );
};

export default App;
