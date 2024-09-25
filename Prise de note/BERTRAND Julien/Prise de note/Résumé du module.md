### 1. Formuler un problème à partir d'une demande métier

- **Traduction de la demande:** Transformer une demande métier souvent vague (par exemple, "améliorer la satisfaction client") en une question précise et quantifiable (par exemple, "prédire la probabilité qu'un client se désabonne").
- **Définition des objectifs:** Déterminer clairement ce que l'on veut obtenir avec le modèle (prédiction, classification, clustering...).
- **Identification des contraintes:** Définir les limites du projet (temps, budget, données disponibles).

### 2. Obtenir et sécuriser des données pour le machine learning

- **Sources de données:** Bases de données internes, API publiques, données open source, etc.
- **Collecte:** Récupérer les données dans un format exploitable (CSV, JSON, etc.).
- **Nettoyage:** Corriger les erreurs, les valeurs manquantes, les doublons, les incohérences.
- **Transformation:** Mettre les données dans un format adapté à l'algorithme (numérisation, encodage, normalisation).
- **Sécurisation:** Protéger les données sensibles en respectant la réglementation (RGPD, etc.) et en mettant en place des mesures techniques (chiffrement, contrôle d'accès).

### 3. Construire un notebook Jupyter avec Amazon SageMaker

- **Pourquoi Jupyter Notebook ?** Interface intuitive, prise en charge de nombreux langages (Python, R...), visualisation de données, partage de code.
- **SageMaker:** Plateforme cloud complète pour le machine learning, offrant des environnements de développement, des algorithmes pré-entraînés, et des outils de déploiement.

### 4. Définir le processus d'évaluation des données

- **Exploration visuelle:** Visualiser les données pour identifier les distributions, les corrélations, les valeurs aberrantes.
- **Statistiques descriptives:** Calculer les moyennes, les écarts-types, les quartiles, etc. pour caractériser les données.
- **Qualité des données:** Vérifier la cohérence, la complétude et la représentativité des données.

### 5. Expliquer pourquoi les données doivent être prétraitées

- **Normalisation:** Mettre les données à la même échelle pour éviter que certaines caractéristiques ne dominent les autres.
- **Encodage:** Transformer les données catégorielles en un format numérique compréhensible par les algorithmes.
- **Gestion des valeurs manquantes:** Imputer les valeurs manquantes ou supprimer les observations concernées.
- **Réduction de dimensionnalité:** Simplifier les données en réduisant le nombre de caractéristiques.

### 6. Utiliser des outils open source pour examiner et prétraiter les données

- **Pandas:** Manipulation de données tabulaires.
- **NumPy:** Calculs numériques.
- **Scikit-learn:** Prétraitement, algorithmes de machine learning, évaluation de modèles.
- **Matplotlib, Seaborn:** Visualisation de données.

### 7. Utiliser Amazon SageMaker pour entraîner et héberger un modèle de machine learning

- **Choix de l'algorithme:** Sélectionner l'algorithme adapté au problème (régression, classification, clustering, etc.).
- **Entraînement:** Apprendre les paramètres du modèle à partir des données d'entraînement.
- **Évaluation:** Évaluer les performances du modèle sur un jeu de données de test.
- **Déploiement:** Mettre le modèle en production pour faire des prédictions sur de nouvelles données.

### 8. Utiliser la validation croisée pour tester les performances d'un modèle

- **Principe:** Diviser les données en plusieurs parties pour évaluer les performances du modèle sur des données qu'il n'a pas vues pendant l'entraînement.
- **Types de validation croisée:** K-fold, validation croisée stratifiée.

### 9. Utiliser un modèle hébergé pour l'inférence

- **API:** Créer une interface pour interagir avec le modèle déployé.
- **Batch inference:** Faire des prédictions sur un grand nombre de données en une seule fois.
- **Real-time inference:** Faire des prédictions en temps réel.

### 10. Créer un job d'ajustement d'hyperparamètres Amazon SageMaker pour optimiser l'efficacité d'un modèle

- **Hyperparamètres:** Paramètres du modèle qui ne sont pas appris pendant l'entraînement (taux d'apprentissage, nombre d'arbres, etc.).
- **Recherche d'hyperparamètres:** Explorer différentes combinaisons d'hyperparamètres pour trouver la meilleure configuration.
- **Techniques de recherche:** Grid search, random search, optimisation bayésienne.