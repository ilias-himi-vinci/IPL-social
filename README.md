# IPL Social – Examen DevOps Janvier 2026

## Informations Étudiant
**Nom:** Himi  
**Prénom:** Ilias  
**Email (Vinci):** ilias.himi@student.vinci.be

## Repository GitHub
https://github.com/ilias-himi-vinci/IPL-social

## Description du projet
Ce projet met en place un environnement **DevOps** avec **GitHub Actions** pour créer une **pipeline d'intégration continue (CI)**.  
Il contient une fonction **TypeScript** pour **valider des adresses email**, développée selon la méthodologie **TDD**.

La pipeline CI s'exécute automatiquement à chaque **push** ou **pull request**, installe les **dépendances** et lance les **tests**.

## Fonction de validation d'email
La fonction vérifie si une adresse email est **valide** selon les règles suivantes :

- Contient exactement un **symbole @**  
- Texte présent **avant et après le @**  
- Le **domaine** contient au moins un **point (.)**  
- Le point n'est pas le **dernier caractère** du domaine  
- L'adresse ne contient pas d'**espaces**

## Exécution des tests
Pour installer les dépendances et lancer les tests :

```bash
npm install
npm test
