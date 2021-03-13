# Memory-Card-Game

### Exploring the File Structure

Currently, the project is organized like so:

```
 📁 src
 + 📁 components
 | + 📁 atoms
 | | + 💾 Button.jsx
 | | + 💾 Anchor.jsx
 | | + ...
 | + 📁 molecules
 | | + 💾 Card.jsx
 | | + 💾 Modal.jsx
 | | + ...
 | + 📁 organisms
 | | + 💾 CardDeck.jsx
 | | + 💾 Header.jsx
 | | + ...
 | + 📁 templates
 | | + 💾 Layout.jsx
 | | + ...
 + 📁 data
 | | + 💾 arcana.jsx
 + 📁 images
 + 📁 root
 | | + 💾 App.jsx
 + 📁 utils
 | | + 💾 utility.js
```

At the root of the project, we have the src folder containing all our JS files and images. Each
folder inside src serves a specific purpose as indicated by their name. Let's go through them anyway
and reason about their existence.

#### Components

The components folder follows [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principles which allow for a clear division between React components. Each component takes a colocated
approach, combining CSS and JS in the same file.

- **atoms**: The building blocks for larger groups of components. We keep these as generic as possible
  for extension.
- **molecules**: Groups of atoms combined for organization.
- **organisms**: Combination of molecules.
- **templates**: Structures of a page.

#### Data

A storage area for all the tarot cards. We map over `arcana.js` in `/src/components/organisms/CardDeck.jsx`.
