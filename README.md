# Ugram

[![Build Status](https://travis-ci.com/GLO3112-H18/ugram-team-06.svg?token=oFRzF26Q45xGBoB8qvZi&branch=dev)](https://travis-ci.com/GLO3112-H18/ugram-team-06)
[Site prod](http://u-gram-dev.s3-website.ca-central-1.amazonaws.com)
[API](http://ugram-env.us-east-2.elasticbeanstalk.com/)
> Clone d'instagram pour le cours GLO3112.

# Pour la correction

Quand vous arrivez sur l'application en prod, faites attention à bien vérifier que vous avez bien la bonne version de l'app et pas une vieille version en cache (CTRL + F5 sur Windows / Linux ou SHIFT + Clique sur le bouton pour refresh sur Mac).

## Base de données
Nous utilisons MongoDB, vous pouvez créer un compte sur mLab pour avoir une petite base de données gratuite ou en lancer une local (**Ne pas oublier de mettre les variabes d'environnement**)

## Cloudwatch
Pour accéder à nos logs Cloudwatch vous pouvez vous rendre sur [CloudWatchConsole](https://977610490635.signin.aws.amazon.com/console)  et utiliser les credentials suivant:
- Username: correcteur
- Password: &'}KlUQT$]^C

Nos logs se trouve sur le serveur: **US East (Ohio)**

## Fonctionnalités avancées

### Unsplash
Nous avons intégré le fournisseur de photos [Unsplash](https://unsplash.com/).

Vous pouvez:
- Afficher des photos random
- Afficher les photos de l'utilisateur

### Webcam
Vous pouvez prendre une photo avec votre Webcam.

**Attention**:

Cette fonctionnalité n'est pas fonctionnelle sur chrome car celui-ci bloque l'utilisation de la Webcam quand une application Web n'est pas en **HTTPS**. Vous pouvez utiliser **Firefox** pour tester cette fonctionnalité.

### Discussion en temps réel (chatbox)
Avec Socket.IO, les utilisateurs peuvent discuter en temps réel.

### Notifications en temps réel
Les notifications sont en temps réel grâce à Socket.IO

## Analytics
Vous devez utiliser ce [lien](https://analytics.google.com/analytics/web/template?uid=ADzRCOhETsmnNlWol4LuJg) pour accéder aux analytics.

Si le lien ne fonctionne pas, nous avons aussi mis un rapport sous format PDF des analytics dans le dossier **analytics** à la racine du projet.

## API

[Api documentation](https://documenter.getpostman.com/view/4118771/ugram-team06/RW1XK1QH)

## Installation

```sh
git clone https://github.com/GLO3112-H18/ugram-team-06.git
```
# Frontend:

```sh
cd frontend
cp env-sample .env
npm install
```
**Modifier le fichier .env en y ajoutant les valeurs.**

Pour démarrer le frontend de l'application à l'aide d'un serveur local:

```sh
npm start
```

Pour vérifier le lint:
```sh
npm run lint
```

# Backend:
```sh
cd backend
sudo mkdir -p /data/db
cp env-sample .env
npm install
```
**Modifier le fichier .env en y ajoutant les valeurs.**

Pour démarrer le serveur en local (Après avoir démarré MongoDB):
```sh
npm start:local
```

# Tests
1. Télécharger [mongodb](https://www.mongodb.com/download-center?_ga=2.118641097.1175779120.1520910751-1426939000.1520370737#production) et suivre l'installation sur le site.
2. Écrire un fichier de test finissant par le mot **.test**.
3. Exécuter la commande ```mongod``` pour démarrer un serveur de test.
4. Exécuter dans une autre fenêtre la commande  ```npm test```

## Pour contribuer

1. Cloner le repo et se mettre sur la branche dev (<https://github.com/GLO3112-H18/ugram-team-06.git>)
2. Se créer une branche pour sa fonctionnalité (`git checkout -b feature/fooBar`)
3. Commiter ses changements (`git commit -am 'Add some fooBar'`)
4. Pousser sa branche (`git push origin feature/fooBar`)
5. Créer un pull request
6. Si les tests passent et le pull request est accepté par un membre de l'équipe, la branche est prête à être merger

## Runkit

[runkit](https://runkit.com/gabswim/ugram)
