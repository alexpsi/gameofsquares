import * as React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader';
import { PoseGroup } from 'react-pose';
import StarfieldAnimation from 'react-starfield-animation'
import { Home } from 'app/containers/Home';
import { Game } from 'app/containers/Game';
import { Settings } from 'app/containers/Settings';
import { HighScores } from 'app/containers/HighScores';
import { Background } from 'app/components/Background'
import * as chroma from 'chroma-js'
import './app.css';

export const App = hot(module)(connect(state => ({color: state.game.background}))(({color}) => (
  <div>
    <header></header>
    <main>
      <StarfieldAnimation style={{ position: 'fixed', width: '100vw', height: '100vh', zIndex: '-1'}} />
      <PoseGroup>
        <Background color={chroma(color).darken(1).hex()} key="background">
        </Background>
      </PoseGroup>
      <Route exact path="/" component={Home} />
      <Route path="/settings" component={Settings} />
      <Route path="/high-scores" component={HighScores} />
      <Route path="/game" component={Game} />
    </main>
  </div>
)));
