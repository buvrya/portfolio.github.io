# Guide de Déploiement - GitHub Pages

Votre portfolio est un site statique (HTML/CSS/JS), ce qui le rend très facile à héberger gratuitement. La meilleure solution professionnelle est **GitHub Pages**.

## Étape 1 : Créer un dépôt sur GitHub
1.  Connectez-vous à [github.com](https://github.com).
2.  Cliquez sur le **+** en haut à droite > **New repository**.
3.  Nommez-le (ex: `portfolio` ou `mon-portfolio`).
4.  **Important :** Laissez le dépôt en **Public**.
5.  Ne cochez **pas** "Add a README file" (on va utiliser vos fichiers actuels).
6.  Cliquez sur **Create repository**.

## Étape 2 : Envoyer votre code (Terminal)
Ouvrez votre terminal dans le dossier du projet et lancez ces commandes une par une :

```bash
# 1. Initialiser Git (si ce n'est pas déjà fait)
git init
git add .
git commit -m "Version finale portfolio"

# 2. Relier à GitHub (Remplacez l'URL par la vôtre !)
git branch -M main
git remote add origin https://github.com/VOTRE_PSEUDO/NOM_DU_REPO.git
git push -u origin main
```

## Étape 3 : Activer le Site
1.  Allez dans les **Settings** de votre dépôt GitHub.
2.  Dans le menu à gauche, cliquez sur **Pages**.
3.  Sous **Build and deployment** > **Source**, choisissez `Deploy from a branch`.
4.  Sous **Branch**, sélectionnez `main` et `/ (root)`.
5.  Cliquez sur **Save**.

⏳ Attendez 1 à 2 minutes. Votre site sera accessible à l'adresse :
`https://VOTRE_PSEUDO.github.io/NOM_DU_REPO/`
