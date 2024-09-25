## Étape 1 : Importation et exploration des données

J'ai commencé par importer la bibliothèque `pandas` et définir quelques options d'affichage pour faciliter la visualisation des données. Ensuite, j'ai chargé le jeu de données à partir d'un fichier CSV en définissant les noms des colonnes, car le fichier ne contenait pas d'en-têtes. Après cela, j'ai utilisé la méthode `shape` pour vérifier le nombre de lignes et de colonnes dans le DataFrame. Cela m'a permis de confirmer que j'avais 25 colonnes.

J'ai ensuite examiné les premières lignes du jeu de données avec la méthode `head` et j'ai utilisé `info` pour obtenir des informations sur les types de colonnes. Pour simplifier les prochaines étapes d'encodage, j'ai décidé de ne conserver que quatre colonnes pertinentes : `aspiration`, `num-of-doors`, `drive-wheels` et `num-of-cylinders`.

## Étape 2 : Encodage des caractéristiques ordinales

J'ai commencé par encoder les colonnes avec des valeurs ordinales, à savoir `num-of-doors` et `num-of-cylinders`. Pour `num-of-doors`, j'ai utilisé la méthode `value_counts` pour identifier les valeurs possibles, qui étaient "four" et "two". J'ai ensuite créé un dictionnaire pour mapper ces valeurs à des nombres, puis j'ai utilisé la méthode `replace` de pandas pour créer une nouvelle colonne `doors` contenant ces valeurs numériques.

J'ai répété le même processus pour la colonne `num-of-cylinders`. Après avoir vérifié les valeurs uniques avec `value_counts`, j'ai créé un dictionnaire de correspondance pour mapper chaque type de cylindre à un nombre et j'ai appliqué cette transformation en créant une nouvelle colonne `cylinders`.

## Étape 3 : Encodage des données catégorielles non ordinales

Pour les colonnes non ordinales, j'ai utilisé la méthode `get_dummies` pour créer des variables binaires. J'ai commencé par la colonne `drive-wheels`, qui avait trois valeurs possibles. En appliquant `get_dummies`, j'ai créé trois nouvelles colonnes : `drive-wheels_4wd`, `drive-wheels_fwd`, et `drive-wheels_rwd`. Chaque colonne contient des valeurs de 1 ou 0, selon la valeur d'origine dans `drive-wheels`.

Ensuite, j'ai traité la colonne `aspiration`, qui avait deux valeurs : "std" et "turbo". Pour éviter d'introduire un ordre dans les valeurs, j'ai décidé de garder une seule colonne et de supprimer la valeur "std" en utilisant `drop_first=True`. Cela a généré une nouvelle colonne `aspiration_turbo`.

## Conclusion

À la fin de ce TP, j'ai réussi à encoder les données ordinales et non ordinales du jeu de données automobile, ce qui me permettra de les utiliser efficacement dans des modèles d'apprentissage automatique. Ce processus a renforcé ma compréhension des différentes techniques d'encodage et de leur importance dans la préparation des données pour l'analyse.