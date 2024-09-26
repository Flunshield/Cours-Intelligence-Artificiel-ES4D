## Résumé du Lab 3.5 - Amazon SageMaker : Déploiement d'un modèle

Dans ce LAB, j'ai appris à déployer un modèle de machine learning en utilisant **Amazon SageMaker**. Après avoir entraîné un modèle dans le LAB précédent, l'étape suivante consiste à le rendre disponible pour effectuer des prédictions en temps réel ou par lot. Ce lab couvre les principales étapes pour configurer et déployer un modèle dans un environnement SageMaker.

### 1. Chargement du modèle depuis S3
La première étape consistait à récupérer le modèle précédemment entraîné et stocké dans **Amazon S3**. En utilisant le **SageMaker SDK**, j'ai chargé le modèle afin de l'utiliser pour le déploiement. Cela inclut les artefacts du modèle et les hyperparamètres optimisés qui ont été sauvegardés à la fin de l'entraînement.

### 2. Création d'un endpoint SageMaker
J'ai ensuite configuré un **endpoint SageMaker**, qui permet de rendre le modèle disponible pour effectuer des prédictions en temps réel. J'ai spécifié le type d'instance et la configuration du déploiement, en choisissant le bon compromis entre performance et coût. SageMaker propose des instances adaptées aux tâches d'inférence en temps réel, et l'autoscaling peut être activé pour ajuster automatiquement le nombre d'instances en fonction de la demande.

### 3. Déploiement du modèle
Avec la configuration prête, j'ai lancé le déploiement du modèle. SageMaker gère cette opération en créant une infrastructure sous-jacente pour héberger le modèle et répondre aux requêtes d'inférence. Une fois déployé, le modèle était accessible via une API REST. Cela permet à n'importe quel service ou application externe d'envoyer des données au modèle et de recevoir des prédictions.

### 4. Test des prédictions en temps réel
Après avoir déployé le modèle, j'ai testé l'endpoint en envoyant des requêtes d'inférence pour obtenir des prédictions en temps réel. J'ai utilisé le **SageMaker SDK** ainsi que des outils comme **boto3** pour envoyer des données au modèle et récupérer les résultats. Cela m'a permis de vérifier que le modèle fonctionnait comme prévu et renvoyait des prédictions précises.

### 5. Monitoring et gestion du modèle
Une fois le modèle déployé, SageMaker offre des outils pour surveiller les performances du modèle en production. J'ai appris à suivre les métriques comme le temps de latence, les erreurs, et l'utilisation des ressources via **Amazon CloudWatch**. Ce monitoring est essentiel pour s'assurer que le modèle fonctionne de manière optimale et pour diagnostiquer les éventuels problèmes.

### 6. Déploiement par lot (Batch Transform)
En plus des prédictions en temps réel, j'ai exploré la méthode de **déploiement par lot** via SageMaker. Cette option est utile pour les scénarios où de grandes quantités de données doivent être traitées sans nécessiter une réponse instantanée. Avec **Batch Transform**, j'ai pu traiter des ensembles de données volumineux en une seule tâche, et les résultats ont été sauvegardés dans un bucket S3.

### 7. Conclusion
Ce LAB m'a permis de comprendre comment déployer un modèle de machine learning à l'aide d'Amazon SageMaker. J'ai appris à configurer un endpoint pour les prédictions en temps réel, à tester le modèle en production, et à surveiller les performances via des outils intégrés comme CloudWatch. Le déploiement par lot avec Batch Transform offre également une option efficace pour traiter de grandes quantités de données. SageMaker simplifie le processus de déploiement en automatisant de nombreuses étapes, ce qui permet de passer rapidement du prototype à la production.
