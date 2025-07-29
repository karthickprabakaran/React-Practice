import { useState } from 'react';
import { useRef } from 'react';

export default function Player() {

  const [name, setName] = useState('');

  const playerName = useRef();

  return (
    <section id="player">
      <h2>Welcome {name ?? 'the username is not given'}</h2>
      <p>
        <input type="text"
          ref={playerName}
        />
        <button onClick={() => { setName(playerName.current.value) }}>Set Name</button>
      </p>
    </section>
  );
}
