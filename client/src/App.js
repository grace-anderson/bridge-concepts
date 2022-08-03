import './App.css';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

// Import React pages and components
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
import Projects from './pages/Projects';
import Project from './pages/Project';

import Header from './components/Header';
import Footer from './components/Footer';

import { UserProvider } from "./utils/GlobalState";

// Setup apollo client
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        {/* Wrap page elements in Router component to keep track of location state */}
        <Router>
          <div className="flex-column justify-flex-start min-100-vh">
            <Header />
            <div className="container">
              <Routes>
                {/* Define routes to render different page components at different paths */}
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/signup"
                  element={<Signup />}
                />
                <Route
                  path="/login"
                  element={<Login />}
                />
                <Route
                  path="/about"
                  element={<About />}
                />
                <Route
                  path="/projects"
                  element={<Projects />}
                />
                <Route
                  path="/projects/:_id"
                  element={<Project />}
                />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </UserProvider>
    </ApolloProvider>
  );
}

export default App;
