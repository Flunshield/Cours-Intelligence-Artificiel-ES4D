![!\[\[Pasted image 20240925094929.png\]\]](<Images/Pasted image 20240925094929.png>)

![alt text](<Images/Pasted image 20240925094951.png>)

**Qu'est-ce que la sensibilité ?**

La sensibilité, également appelée taux de vrais positifs (TPR), mesure la capacité d'un modèle à identifier correctement tous les exemples positifs d'une classe donnée. Dans notre cas, il s'agit de la capacité du modèle à identifier correctement tous les chats.

**Comment l'image explique-t-elle cela ?**

- **La matrice de confusion:** C'est le tableau au centre de l'image. Il compare les prédictions du modèle (les lignes) avec les valeurs réelles (les colonnes).
    - **TP (True Positive):** Nombre de cas où le modèle a correctement prédit qu'il s'agissait d'un chat (107).
    - **FP (False Positive):** Nombre de cas où le modèle a incorrectement prédit un chat alors que c'était autre chose (23).
    - **FN (False Negative):** Nombre de cas où le modèle a incorrectement prédit que ce n'était pas un chat alors que c'en était un (69).
    - **TN (True Negative):** Nombre de cas où le modèle a correctement prédit que ce n'était pas un chat (42).
- **La formule de la sensibilité:** La formule montre comment calculer la sensibilité à partir des valeurs de la matrice de confusion. On divise le nombre de vrais positifs (TP) par la somme des vrais positifs et des faux négatifs (TP+FN).
- **Le résultat:** Dans cet exemple, la sensibilité est de 0.6079, ce qui signifie que le modèle a correctement identifié environ 60% des chats.

**En résumé:**

L'image montre que le modèle utilisé pour identifier les chats n'est pas parfait. Il parvient à identifier correctement 60% des chats, mais il en "manque" 40%. Cela signifie que le modèle pourrait être amélioré pour mieux détecter les chats.

**Pourquoi est-ce important ?**

La sensibilité est une métrique cruciale dans de nombreux domaines, notamment la médecine (où il est important de détecter toutes les maladies), la détection de fraudes, etc. Un modèle avec une faible sensibilité peut entraîner des conséquences négatives si l'on manque des cas positifs importants.

**En conclusion:**

L'image nous donne une idée de la performance d'un modèle de classification en se concentrant sur sa capacité à identifier correctement les exemples positifs. En comprenant la sensibilité, on peut mieux évaluer la qualité d'un modèle et identifier les domaines où il peut être amélioré.