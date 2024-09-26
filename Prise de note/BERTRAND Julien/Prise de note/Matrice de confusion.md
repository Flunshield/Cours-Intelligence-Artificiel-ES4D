### Qu'est-ce qu'une matrice de confusion ?

![alt text](<../Images/Pasted image 20240925093840.png>)

C'est un tableau qui compare les valeurs réelles (ou _actual_ en anglais) d'une variable catégorielle avec les valeurs prédites par un modèle. Elle est particulièrement utile pour les problèmes de classification binaire (deux classes, comme "chat" ou "pas chat" dans ton exemple), mais peut être étendue à des problèmes multi-classes.

### Les éléments de la matrice de confusion :

- **TP (True Positive) :** Le modèle a correctement prédit une classe positive (par exemple, il a prédit "chat" et c'était effectivement un chat).
- **FP (False Positive) :** Le modèle a incorrectement prédit une classe positive (par exemple, il a prédit "chat" mais c'était en réalité un chien). C'est ce qu'on appelle un faux positif.
- **FN (False Negative) :** Le modèle a incorrectement prédit une classe négative (par exemple, il a prédit "pas chat" mais c'était en réalité un chat). C'est un faux négatif.
- **TN (True Negative) :** Le modèle a correctement prédit une classe négative (par exemple, il a prédit "pas chat" et c'était effectivement un chien).

### À quoi sert-elle ?

La matrice de confusion permet de calculer différents **indicateurs de performance** d'un modèle :

- **Taux de vrais positifs (True Positive Rate, TPR) ou sensibilité:** Proportion des exemples positifs correctement identifiés. TPR = TP / (TP + FN)
- **Taux de faux positifs (False Positive Rate, FPR) ou spécificité:** Proportion des exemples négatifs incorrectement identifiés comme positifs. FPR = FP / (FP + TN)
- **Précision:** Proportion des prédictions positives qui sont correctes. Précision = TP / (TP + FP)
- **Rappel:** Proportion des exemples positifs qui sont correctement identifiés. Rappel = TP / (TP + FN) (identique au TPR)
- **F1-score:** Moyenne harmonique de la précision et du rappel. C'est un bon indicateur global de performance.

### Pourquoi c'est important ?

- **Choix du modèle:** En comparant les matrices de confusion de différents modèles, on peut choisir celui qui a les meilleures performances pour un problème donné.
- **Ajustement des hyperparamètres:** On peut ajuster les hyperparamètres d'un modèle pour améliorer ses performances en observant comment évoluent les valeurs dans la matrice de confusion.
- **Analyse des erreurs:** En analysant les erreurs (FP et FN), on peut comprendre les biais du modèle et chercher des moyens de les corriger.

### Au-delà du binaire

Pour les problèmes de classification multi-classe, la matrice de confusion est plus grande et les calculs sont plus complexes, mais le principe reste le même.

### En conclusion

La matrice de confusion est un outil indispensable pour évaluer et comparer des modèles de classification. Elle permet d'avoir une vision précise des forces et des faiblesses d'un modèle et d'orienter les améliorations à apporter.

**Pour aller plus loin:**

- **Courbe ROC:** Un autre outil graphique qui permet de visualiser le compromis entre la sensibilité et la spécificité.
- **Matrice de confusion normalisée:** Une matrice de confusion où les valeurs sont divisées par le nombre total d'observations dans chaque classe.
- **Autres métriques:** Il existe de nombreuses autres métriques pour évaluer les modèles de classification, comme l'accuracy, le kappa de Cohen, etc.