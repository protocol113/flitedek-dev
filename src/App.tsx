import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';

export function App() {
  return (
    <div className="min-h-screen bg-dark">
      <div className="corner-decoration corner-top-left" />
      <div className="corner-decoration corner-top-right" />
      <div className="corner-decoration corner-bottom-left" />
      <div className="corner-decoration corner-bottom-right" />
      <Header />
      <main>
        <Hero />
        <Stats />
      </main>
    </div>
  );
}