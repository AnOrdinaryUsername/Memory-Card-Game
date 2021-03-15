# Memory-Card-Game

Test your memory with this Persona 5 themed [memory game](https://anordinaryusername.github.io/Memory-Card-Game/).

<div align="center">
        <img alt="The game with cards laid out" src="https://i.imgur.com/05GQ8WK_d.webp?maxwidth=1520&fidelity=grand">
</div>

## Running it locally

Fork the repo and clone it with ssh

```bash
> git clone git@github.com:your-username/Memory-Card-Game.git
```

Or https

```bash
> git clone https://github.com/your-username/Memory-Card-Game.git
```

Change to the Memory-Card-Game directory

```bash
> cd Memory-Card-Game
```

### Using npm

In the repo folder run

```bash
> npm install
```

Then start up the dev server. It should automatically open [http://localhost:3000/Memory-Card-Game](http://localhost:3000/Memory-Card-Game) in your browser.

```bash
> npm start
```

## Exploring the File Structure

Currently, the project is organized like so:

```
 📁 src
 + 📁 components
 | + 📁 atoms
 | | + 💾 Anchor.jsx
 | | + 💾 Button.jsx
 | | + ...
 | + 📁 molecules
 | | + 💾 Card.jsx
 | | + 💾 Modal.jsx
 | | + ...
 | + 📁 organisms
 | | + 💾 CardDeck.jsx
 | | + 💾 Header.jsx
 | | + ...
 + 📁 data
 | | + 💾 arcana.js
 + 📁 images
 + 📁 root
 | | + 💾 App.jsx
 | | + 💾 GlobalStyles.jsx
```

At the root of the project, we have the src folder containing all our JS files and images. Each
folder inside src serves a specific purpose as indicated by their name. Let's go through them anyway
and reason about their existence.

#### Components

The components folder follows [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principles which allow for a clear division between React components. Each component takes a colocated
approach, combining CSS and JS in the same file using styled-components.

- **atoms**: The building blocks for larger groups of components. We keep these as generic as possible
  for extension.
- **molecules**: Groups of atoms combined for organization.
- **organisms**: Combinations of molecules to form a section of an interface.

#### Data

A storage area for all tarot cards. We map over `arcana.js` in `/src/components/organisms/CardDeck.jsx`.

#### Root

As the top most component in many React projects, `App.jsx` is the starting point for all our code.
Along with that, `GlobalStyles.jsx` contains a CSS Reset and other default styles.
