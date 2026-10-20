# Python pas à pas : version publique

Ce dossier est l'appli complète, prête à être mise en ligne sur n'importe quel hébergement de site
« statique ». Une fois en ligne, n'importe qui peut l'ouvrir avec un lien normal, sans compte
Claude, sur ordinateur, tablette ou téléphone. Sur téléphone, on peut l'ajouter à l'écran d'accueil
comme une appli, et elle marche ensuite même sans connexion.

**Différence avec la version Claude :** la bibliothèque à codes courts n'existe pas ici (elle dépend
du stockage de Claude). Tout le reste est identique, et les codes de partage complets (PPA1.…)
fonctionnent dans les deux versions.

## Mettre l'appli en ligne avec GitHub Pages (gratuit)

1. Crée un compte gratuit sur github.com.
2. Crée un nouveau dépôt (« New repository »), par exemple `python-pas-a-pas`, en **Public**.
3. Dans le dépôt, clique sur « Add file » puis « Upload files ».
4. Glisse **le contenu** de ce dossier (index.html, sw.js, les dossiers lessons, pyodide, icons…),
   pas le dossier lui-même. Valide avec « Commit changes ».
5. Va dans « Settings » puis « Pages ». Dans « Build and deployment », choisis « Deploy from a
   branch », la branche `main` et le dossier `/ (root)`, puis « Save ».
6. Après une ou deux minutes, l'adresse du site apparaît en haut de cette page, du type
   `https://ton-nom.github.io/python-pas-a-pas/`. C'est ce lien que tu partages.

## Mettre à jour l'appli plus tard

Recommence l'étape 3 avec les nouveaux fichiers (ils remplacent les anciens). Les élèves reçoivent
la nouvelle version à leur prochaine visite avec une connexion.

## Bon à savoir

- La première visite télécharge environ 14 Mo (Python est inclus dans l'appli). Ensuite, tout est
  gardé sur l'appareil.
- La progression de chaque élève est enregistrée dans son navigateur, sur son appareil.
- L'appli ne fonctionne pas en ouvrant `index.html` directement depuis l'ordinateur (double-clic) :
  il faut passer par une adresse web.
