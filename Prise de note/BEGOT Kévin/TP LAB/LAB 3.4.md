## Résumé du Lab 3.4 - Amazon SageMaker : Entraîner un modèle

Dans ce LAB, j'ai appris à utiliser **Amazon SageMaker** pour entraîner un modèle de machine learning. Ce lab couvre l'ensemble du processus d'entraînement, depuis la configuration de l'environnement SageMaker jusqu'à l'exécution du modèle, en passant par l'analyse des résultats.

### 1. Chargement des données d'entraînement
Comme dans les précédents LABs, la première étape consistait à charger les données depuis **Amazon S3**. J'ai utilisé **boto3** et **Pandas** pour récupérer et préparer les données dans le format requis pour l'entraînement. Il s'agissait de données prétraitées, avec des variables numériques et catégorielles déjà encodées (issues du Lab 3.3).

### 2. Sélection de l'algorithme de machine learning
Une partie clé de ce lab était la sélection de l'algorithme d'entraînement. **Amazon SageMaker** offre plusieurs algorithmes intégrés. Pour ce lab, j'ai utilisé un algorithme supervisé comme le **XGBoost**, qui est bien adapté aux tâches de classification et de régression. SageMaker permet également d'importer des algorithmes personnalisés ou de créer ses propres conteneurs Docker, mais ici je me suis concentré sur l'utilisation d'un algorithme préconfiguré.

### 3. Configuration du job d'entraînement
J'ai ensuite configuré un travail d'entraînement dans SageMaker. Cela comprenait la définition des **hyperparamètres** de l'algorithme (comme le taux d'apprentissage, la profondeur des arbres, etc.), ainsi que la spécification des **ressources de calcul** nécessaires, telles que les types et le nombre d'instances à utiliser. Cette étape est cruciale pour optimiser les performances du modèle et réduire les coûts.

### 4. Lancement du job d'entraînement
Une fois la configuration terminée, j'ai lancé le travail d'entraînement à l'aide de **SageMaker SDK**. SageMaker automatise plusieurs aspects du processus, notamment le déploiement des ressources, l'entraînement du modèle, et le stockage des artefacts (comme les paramètres du modèle et les métriques de performance). J'ai pu suivre le déroulement de l'entraînement en temps réel grâce aux logs générés par SageMaker.

### 5. Évaluation du modèle
Une fois le modèle entraîné, j'ai récupéré les métriques de performance pour évaluer la qualité du modèle. Ces métriques comprenaient l'**exactitude**, le **score F1**, la **précision**, et le **rappel**. J'ai également examiné les courbes ROC/AUC pour juger de la capacité du modèle à discriminer entre les différentes classes.

### 6. Sauvegarde et stockage du modèle
Enfin, j'ai sauvegardé le modèle entraîné dans **Amazon S3**, ce qui me permet de l'utiliser ultérieurement pour faire des prédictions ou de le déployer en production. SageMaker facilite cette étape en automatisant le stockage des artefacts de modèle à chaque fin d'entraînement.

### 7. Conclusion
Ce LAB m'a permis de comprendre le processus d'entraînement d'un modèle de machine learning en utilisant Amazon SageMaker. J'ai appris à sélectionner un algorithme, à configurer et lancer un job d'entraînement, et à évaluer les performances du modèle. Grâce à SageMaker, l'entraînement est à la fois flexible et scalable, ce qui le rend adapté à des projets de machine learning à grande échelle dans un environnement cloud.
