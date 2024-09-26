## Résumé du Lab 3.3 - Amazon SageMaker : Encodage des données catégorielles

Dans ce LAB, j'ai appris à encoder des données catégorielles en utilisant **Amazon SageMaker**. L'encodage est une étape clé dans le prétraitement des données, en particulier pour les algorithmes de machine learning qui ne peuvent pas directement traiter des variables non numériques. Ce lab m'a permis de comprendre les différentes techniques d'encodage disponibles et leur mise en œuvre dans un pipeline SageMaker.

### 1. Chargement des données
Comme pour les LABs précédents, j'ai commencé par charger les données stockées dans un bucket **Amazon S3** en utilisant **boto3** et **Pandas**. Les données contenaient plusieurs colonnes catégorielles que j'ai identifiées pour appliquer l'encodage.

### 2. Compréhension des données catégorielles
Avant de procéder à l'encodage, j'ai d'abord exploré les colonnes catégorielles pour en comprendre la structure et la distribution des catégories. J'ai utilisé des fonctions comme `.value_counts()` de **Pandas** pour analyser la fréquence des différentes catégories dans chaque colonne. Cela m'a permis de savoir quelles colonnes nécessitaient un encodage et quel type d'encodage serait le plus approprié.

### 3. Techniques d'encodage utilisées
Dans ce lab, j'ai appliqué plusieurs méthodes d'encodage des données catégorielles :

- **Encodage ordinal** : Cette méthode assigne un entier unique à chaque catégorie, selon un ordre naturel ou arbitraire. J'ai utilisé cette méthode pour les colonnes où l'ordre des catégories avait un sens, par exemple pour des niveaux d'éducation ou des classements.

- **Encodage one-hot** : Pour les colonnes sans ordre entre les catégories, j'ai utilisé l'encodage one-hot. Cette méthode transforme chaque catégorie en une colonne binaire (0 ou 1). J'ai utilisé la fonction `pd.get_dummies()` de **Pandas** pour cette transformation. Cette méthode est particulièrement utile pour éviter de donner un ordre arbitraire aux catégories et fonctionne bien avec des algorithmes linéaires.

### 4. Impact de l'encodage sur les données
Après avoir encodé les données, j'ai observé comment les nouvelles colonnes (issues de l'encodage one-hot) augmentaient le nombre total de caractéristiques dans le dataset. J'ai également noté que l'encodage ordinal pouvait introduire des biais si un ordre est donné à des catégories qui n'en ont pas naturellement.

### 5. Préparation des données pour le modèle
L'étape finale consistait à préparer les données encodées pour les étapes suivantes du pipeline de machine learning. En effectuant ces encodages, j'ai veillé à ce que les données soient dans un format entièrement numérique et prêtes à être utilisées pour l'entraînement du modèle avec SageMaker.

En conclusion, ce LAB m'a permis de comprendre l'importance d'encodage des données catégorielles dans le cadre d'un pipeline de machine learning, ainsi que les avantages et les limites des différentes techniques. Grâce à **Amazon SageMaker** et **Pandas**, j'ai pu transformer mes données catégorielles efficacement et les rendre prêtes pour le modèle machine learning.
