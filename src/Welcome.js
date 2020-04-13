import React from 'react';
import './Welcome.css';
import bgimg from './bar.jpg';
import TavernForm from './TavernForm';

function Welcome() {
  return(

    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <main role="main" class="inner cover">
	<h1 class="cover-heading">Quarantavern</h1>
	<p class="lead">Quarantavern is a place to drink and socialize with friends on the interwebs. You can click the button below to join or create a random tavern. Once you are in you can share it with your friends.</p>
	<p>Enter the name of the tavern you would like to join or create and then hit the button. Leave text box blank for a randomly generated tavern.</p>
	<TavernForm />
      </main>
    </div>

  );
}

export default Welcome;
