### Tâche 1 : Création d'un notebook Jupyter avec Amazon SageMaker

Dans cette tâche, j'ai accédé à Amazon SageMaker via la console de gestion AWS et j'ai créé un notebook Jupyter en suivant les étapes suivantes :

1. **Accès à Amazon SageMaker** : J'ai ouvert la console de gestion AWS et sélectionné **Amazon SageMaker** dans le menu des services.
2. **Instances de Notebook** : Dans le menu de navigation à gauche, j'ai développé la section **Notebook** et cliqué sur **Instances de notebook**.
3. **Création de l'instance** : J'ai cliqué sur **Create notebook instance**.
4. **Nom de l'instance** : Dans la case **Notebook instance name**, j'ai saisi **Mynotebook**.
5. **Type d'instance** : J'ai choisi **ml.m4.xlarge** dans la liste déroulante **Notebook instance type**.
6. **Système d'exploitation** : J'ai sélectionné **notebook-al2-v1** pour utiliser Amazon Linux 2 comme type de système d'exploitation.
7. **Configuration du cycle de vie** : Sous **Additional configuration**, j'ai sélectionné une configuration de cycle de vie contenant **ml-pipeline**, pour ajouter automatiquement les notebooks Jupyter corrects à l'instance.
8. **Création de l'instance** : J'ai laissé les autres paramètres par défaut et cliqué sur **Create notebook instance**.

Une fois l'instance créée, elle est apparue dans la liste avec le statut **Pending**, qui a changé en **InService** après quelques minutes. J'ai alors pu ouvrir JupyterLab en cliquant sur **Open JupyterLab**.

---

### Tâche 2 : Exploration de JupyterLab

Dans cette tâche, j'ai exploré l'interface de JupyterLab sur Amazon SageMaker et ouvert un notebook d'exemple appelé **PythonCheatSheeet.ipynb**. J'ai pu naviguer dans les différents éléments de l'interface, notamment :

1. **Barre de menu** : J'ai utilisé les options **File**, **Edit**, **Run**, et **Kernel** pour interagir avec le notebook.
2. **Barre latérale** : J'ai accédé aux fichiers, aux noyaux (kernels), et aux commandes via les icônes de la barre latérale gauche.
3. **Zone de travail principale** : J'ai réorganisé les onglets et les panneaux pour personnaliser la disposition du notebook.

J'ai également examiné les types de cellules (Code, Markdown, Raw NBConvert) et appris à exécuter du code en appuyant sur **SHIFT + ENTER**.

---

### Tâche 3 : Ouverture d'un notebook d'exemple

J'ai ensuite parcouru un notebook d'exemple nommé **linear_learner_mnist.ipynb**. Après l'avoir chargé dans JupyterLab, j'ai créé une copie du fichier pour l'explorer. Je n'ai pas pu exécuter toutes les étapes car un bucket Amazon S3 était requis.

---

### Tâche 4 : Importation des données

Pour cette tâche, j'ai créé un nouveau notebook et ajouté du code pour télécharger et extraire un jeu de données médicales sur la colonne vertébrale à partir du **UC Irvine Machine Learning Repository**. Voici les étapes que j'ai suivies :

1. **Création du notebook** : J'ai choisi **File > New > Notebook** et sélectionné le noyau **conda_python3**.
2. **Ajout de texte** : J'ai changé le type de cellule en **Markdown** pour ajouter un titre au notebook.
3. **Téléchargement et extraction des données** : J'ai utilisé la bibliothèque **requests** pour télécharger le fichier zip, et **zipfile** pour l'extraire.
4. **Chargement des données** : J'ai ensuite utilisé **pandas** et **scipy** pour charger les données au format ARFF et les afficher dans un DataFrame.

---

### Tâche 5 : Téléchargement du notebook et sauvegarde du travail (Optionnel)

Enfin, j'ai sauvegardé mon notebook en le téléchargeant sur mon ordinateur local. Si nécessaire, je pourrai réimporter ce notebook dans SageMaker plus tard.