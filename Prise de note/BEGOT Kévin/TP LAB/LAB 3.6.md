## Résumé du Lab 3.6 - Amazon SageMaker : Génération des métriques de performance du modèle

Dans ce LAB, j'ai appris à générer et analyser les **métriques de performance d'un modèle** de machine learning déployé à l'aide d'**Amazon SageMaker**. Cette étape est essentielle pour évaluer l'efficacité et la précision du modèle, et ainsi valider s'il répond bien aux objectifs du projet.

### 1. Chargement et préparation des données de test
La première étape consistait à utiliser un ensemble de **données de test** pour évaluer les performances du modèle. J'ai chargé ces données depuis **Amazon S3** à l'aide de **boto3** et les ai préparées pour effectuer des prédictions. Ces données n'ont pas été utilisées lors de l'entraînement du modèle, elles permettent donc une évaluation objective des performances.

### 2. Génération des prédictions
J'ai ensuite utilisé le modèle déployé (depuis le Lab 3.5) pour générer des prédictions sur les données de test. En envoyant des requêtes d'inférence au **endpoint SageMaker**, j'ai obtenu les résultats du modèle pour chaque observation. Ces prédictions ont été comparées aux vraies valeurs de la variable cible afin d'évaluer la précision du modèle.

### 3. Calcul des métriques de performance
J'ai appris à calculer plusieurs **métriques de performance** pour évaluer la qualité du modèle. Les principales métriques que j'ai générées sont :

- **Exactitude (Accuracy)** : Proportion des prédictions correctes sur l'ensemble des données.
- **Précision (Precision)** : Le rapport des vraies prédictions positives sur toutes les prédictions positives faites par le modèle.
- **Rappel (Recall)** : Le rapport des vraies prédictions positives sur l'ensemble des instances positives réelles.
- **Score F1** : La moyenne harmonique entre la précision et le rappel, utile lorsque les classes sont déséquilibrées.
- **Matrice de confusion** : Un tableau qui permet de visualiser les vrais positifs, faux positifs, vrais négatifs, et faux négatifs.

Ces métriques m'ont donné une vision claire de la performance du modèle, et m'ont permis d'identifier ses forces et ses limites.

### 4. Analyse des courbes ROC et AUC
J'ai également tracé la **courbe ROC (Receiver Operating Characteristic)**, qui illustre la capacité du modèle à discriminer entre les classes positives et négatives. La **valeur AUC (Area Under the Curve)**, quant à elle, m'a permis de quantifier cette capacité. Plus l'AUC est proche de 1, meilleur est le modèle. Cela m'a aidé à juger de la performance globale du modèle en termes de classification.

### 5. Évaluation continue avec SageMaker Model Monitor
J'ai exploré l'outil **SageMaker Model Monitor** pour suivre en continu les performances du modèle après son déploiement en production. Cet outil permet de détecter les dérives de données (data drift) ou les modifications de la distribution des données, ce qui peut affecter les performances du modèle au fil du temps.

### 6. Optimisation des performances
En fonction des résultats obtenus, j'ai envisagé des approches pour améliorer les performances du modèle, comme le **réentraînement** avec plus de données, la modification des hyperparamètres, ou l'utilisation de techniques de régularisation. Ces ajustements permettent d'affiner le modèle pour obtenir de meilleures métriques.

### 7. Conclusion
Ce LAB m'a permis de comprendre l'importance de l'évaluation des performances d'un modèle après son déploiement. Les différentes métriques et outils d'Amazon SageMaker, comme les courbes ROC/AUC et Model Monitor, offrent des moyens puissants pour suivre et améliorer la qualité des prédictions d'un modèle en production. Cela m'assure que le modèle est non seulement performant, mais aussi fiable sur le long terme.
