# Chatbox - Fitness Coach (avec API Gemini)

Ce projet est une application de chat simple qui utilise l'API Gemini de Google pour fournir des conseils sur le fitness. L'IA est configurée pour jouer le rôle d'un coach sportif et ne répond qu'aux questions liées au fitness. Si une question hors sujet est posée, la réponse du bot sera méchante et désagréable. Les réponses du bot sont formatées en Markdown pour une mise en forme agréable dans l'interface.

## Prérequis

Avant de démarrer, assurez-vous d'avoir installé les éléments suivants :

1. **Node.js** - Utilisez la version 14 ou supérieure.
2. **NPM** - Gestionnaire de paquets Node.js.
3. **Clé API Google Generative AI (Gemini)** - Vous aurez besoin d'une clé API pour interagir avec le modèle de génération de texte.

## Installation

1. Clonez ce dépôt :

   ```bash
   git clone https://github.com/ton-compte/chatbox-fitness-coach.git
   cd chatbox-fitness-coach
   ```

2. Installez les dépendances du projet :

```bash
yarn
```

## Configuration
Avant de lancer l'application, vous devez configurer votre clé API Google Gemini. Remplacez la chaîne de caractères CLE_API_GEMINI dans le fichier ChatBox.tsx par votre propre clé API.

```bash
const genAI = new GoogleGenerativeAI("CLE_API_GEMINI"); // Remplacez ici par votre clé API
```

## Structure du Code

Le code est basé sur **React** et utilise la bibliothèque **react-markdown** pour interpréter les réponses de l'IA en Markdown. Voici une brève explication des composants :

### `ChatBox.tsx`

- **State Management** : Utilisation de `useState` pour gérer les messages du chat et l'entrée utilisateur.
  
- **handleSend** : Fonction appelée lorsqu'un utilisateur envoie un message. Elle :
  - Ajoute le message de l'utilisateur à la liste des messages.
  - Envoie la requête à l'API Gemini avec un prompt spécifique pour fournir des conseils fitness ou une réponse méchante si la question n'est pas en rapport avec le fitness.
  - Ajoute la réponse de l'IA à la liste des messages.

- **fetchGeminiResponse** : Envoie la requête à l'API Gemini en incluant le contexte du coach sportif dans le prompt. Les réponses sont limitées à 500 tokens et sont générées avec une température de 0.5 pour ajuster la créativité.

### Affichage Markdown

Les réponses du bot sont interprétées et affichées en Markdown grâce à la bibliothèque **react-markdown** :

```javascript
<ReactMarkdown>{msg.text}</ReactMarkdown>
```

Cela permet au bot de renvoyer des réponses formatées (titres, listes, emphases, etc.) dans l'interface.

## Lancement de l'application
Une fois que tout est installé et configuré, vous pouvez lancer l'application en utilisant la commande suivante :

```bash
yarn dev
```


markdown
Copier le code
## Structure du Code

Le code est basé sur **React** et utilise la bibliothèque **react-markdown** pour interpréter les réponses de l'IA en Markdown. Voici une brève explication des composants :

### `ChatBox.tsx`

- **State Management** : Utilisation de `useState` pour gérer les messages du chat et l'entrée utilisateur.
  
- **handleSend** : Fonction appelée lorsqu'un utilisateur envoie un message. Elle :
  - Ajoute le message de l'utilisateur à la liste des messages.
  - Envoie la requête à l'API Gemini avec un prompt spécifique pour fournir des conseils fitness ou une réponse méchante si la question n'est pas en rapport avec le fitness.
  - Ajoute la réponse de l'IA à la liste des messages.

- **fetchGeminiResponse** : Envoie la requête à l'API Gemini en incluant le contexte du coach sportif dans le prompt. Les réponses sont limitées à 500 tokens et sont générées avec une température de 0.5 pour ajuster la créativité.

### Affichage Markdown

Les réponses du bot sont interprétées et affichées en Markdown grâce à la bibliothèque **react-markdown** :

```javascript
<ReactMarkdown>{msg.text}</ReactMarkdown>
```
Cela permet au bot de renvoyer des réponses formatées (titres, listes, emphases, etc.) dans l'interface.

Lancement de l'application
Une fois que tout est installé et configuré, vous pouvez lancer l'application en utilisant la commande suivante :

bash
Copier le code
npm start
Cela lancera le projet en mode développement. Ouvrez http://localhost:3000 pour voir l'application dans votre navigateur.

## Fonctionnalités
- Coach de Fitness : Le bot répond aux questions sur le fitness et donne des conseils pertinents.
- Réponses Méchantes : Si la question n'est pas liée au fitness, le bot répondra de manière désagréable et sarcastique.
- Affichage Markdown : Les réponses du bot sont formatées en Markdown pour une meilleure lisibilité.

### Exemple d'utilisation
- Question liée au fitness :
    - Utilisateur : "Quels exercices puis-je faire pour améliorer mes abdominaux ?"
    - Bot : "Pour des abdos en béton, fais des crunchs, des planches et des levées de jambes. Essaie d'en faire 3 séries de 15 répétitions chaque jour ! 💪"

- Question hors sujet :
  - Utilisateur : "Quel est le capital de la France ?"
  - Bot : "T’es sérieux là ? Je suis un coach sportif, pas un prof de géo. Demande-moi quelque chose d'utile !"

  ----

  Ce fichier README.md explique le processus du code, la configuration et les fonctionnalités de l'application de chat basée sur un coach de fitness avec l'API Gemini.