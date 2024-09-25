### 1. Préparation des données

- **Importation des données:** Les données ont été importées depuis un fichier .arff et converties en un DataFrame pandas pour faciliter le traitement.
- **Nettoyage et transformation:** La colonne cible "class" a été convertie en valeurs numériques pour être compatible avec l'algorithme XGBoost.
- **Division des données:** Les données ont été divisées de manière stratifiée en trois ensembles : entraînement, validation et test, afin de garantir une représentation équilibrée des classes dans chaque ensemble.
- **Enregistrement des données:** Les trois ensembles de données ont été enregistrés au format CSV et téléchargés sur Amazon S3 pour être utilisés par SageMaker.

### 2. Entraînement du modèle XGBoost

- **Configuration de l'environnement:** Un environnement d'entraînement a été configuré sur Amazon SageMaker, en spécifiant le conteneur XGBoost et les ressources nécessaires (instance, type d'instance).
- **Définition des hyperparamètres:** Des hyperparamètres ont été définis pour configurer le modèle XGBoost, tels que le nombre d'arbres, la métrique d'évaluation et la fonction d'objectif.
- **Entraînement:** Le modèle a été entraîné en utilisant les données d'entraînement et de validation stockées sur S3. SageMaker a géré automatiquement le processus d'entraînement, en ajustant les hyperparamètres pour optimiser les performances du modèle.

### 3. Validation et évaluation (étapes futures)

- **Évaluation sur l'ensemble de test:** Dans les prochains TP, le modèle sera évalué sur l'ensemble de test afin de mesurer sa capacité à généraliser à de nouvelles données et de calculer des métriques de performance telles que la précision, le rappel et la F1-score.
- **Ajustement des hyperparamètres:** En fonction des résultats de l'évaluation, les hyperparamètres du modèle pourront être ajustés afin d'améliorer ses performances.

**En résumé,** ce TP a permis de :

- Préparer un ensemble de données pour l'apprentissage automatique
- Entraîner un modèle XGBoost sur Amazon SageMaker
- Poser les bases pour l'évaluation et l'optimisation du modèle