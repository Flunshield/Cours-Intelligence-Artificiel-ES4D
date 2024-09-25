### Configuration initiale

Comme cette solution est répartie sur plusieurs TPs du module, j'ai exécuté les premières cellules pour charger les données et entraîner le modèle à déployer.

- J'ai importé les librairies nécessaires (`pandas`, `scipy.io`, `os`, `boto3`, `sagemaker` etc.).
- J'ai téléchargé et décompressé l'ensemble de données "vertebral_column_data.zip".
- J'ai chargé les données dans un DataFrame pandas et effectué un prétraitement basique (remplacement des libellés de classe, réorganisation des colonnes).
- J'ai divisé les données en ensembles d'entraînement, de test et de validation en préservant la distribution des classes.
- J'ai téléchargé les ensembles de données préparées vers Amazon S3.
- J'ai défini l'image Docker à utiliser pour entraîner le modèle XGBoost.
- J'ai spécifié les hyperparamètres du modèle XGBoost (nombre d'itérations, métrique d'évaluation, objectif).
- J'ai créé une instance `Estimator` SageMaker pour entraîner le modèle XGBoost.
- J'ai défini les canaux d'entrée d'entraînement et de validation pointant vers les données sur S3.
- J'ai lancé l'entraînement du modèle XGBoost.

### Hébergement du modèle

Une fois le modèle entraîné, je l'ai hébergé sur SageMaker pour effectuer des prédictions.

- J'ai utilisé la méthode `deploy` de l'objet `xgb_model` pour déployer le modèle.
- J'ai spécifié une instance ml.m4.xlarge pour l'hébergement initial.

### Réalisation de prédictions

Avec le modèle déployé, j'ai réalisé des prédictions sur des exemples du jeu de test.

- J'ai examiné le jeu de données de test pour me familiariser avec ses caractéristiques.
- J'ai extrait la première ligne du jeu de test (à l'exception de la colonne cible) pour la soumettre au modèle.
- J'ai converti cette ligne en un tampon CSV pour la prédiction.
- J'ai utilisé la méthode `predict` du prédicteur `xgb_predictor` pour obtenir la prédiction.
- J'ai comparé la prédiction avec la valeur cible réelle du jeu de test.

**Challenge accompli** : J'ai mis à jour le code pour envoyer la deuxième ligne du jeu de données et testé la prédiction sur plusieurs autres lignes.

### Arrêt du modèle déployé

Pour libérer les ressources, j'ai supprimé le point de terminaison du modèle déployé.

- J'ai utilisé la fonction `delete_endpoint` du prédicteur `xgb_predictor`.

### Réalisation d'une transformation par lots

Pour évaluer le modèle sur l'ensemble du jeu de test, j'ai utilisé la transformation par lots de SageMaker. Cette approche est plus efficace que d'envoyer des requêtes de prédiction une par une.

- J'ai extrait toutes les lignes du jeu de test, à l'exception de la colonne cible, et les ai converties en un fichier CSV.
- J'ai téléchargé le fichier CSV vers Amazon S3.
- J'ai configuré un objet de transformation en spécifiant le fichier d'entrée S3, l'emplacement de sortie S3 et le type d'instance.
- J'ai lancé la transformation par lots en indiquant le préfixe S3 du fichier d'entrée, le type de données et le format de contenu.
- J'ai attendu la fin de la transformation.
- J'ai téléchargé les résultats de la transformation par lots depuis S3 et les ai chargés dans un DataFrame pandas.
- J'ai défini une fonction pour convertir les probabilités de prédiction en valeurs binaires (0 ou 1) en utilisant un seuil de 0,65.
- J'ai comparé les prédictions binaires avec les valeurs cibles réelles du jeu de test.

**Challenge accompli** : J'ai expérimenté avec la modification du seuil de conversion de probabilité et observé l'impact sur les résultats.

### Conclusion

J'ai terminé le TP 3.5 en effectuant les actions décrites. Le prochain laboratoire consistera à générer des métriques d'évaluation du modèle avant de l'affiner dans le dernier laboratoire.