#  HDM Todo List Application

Une application de gestion de tâches avec une architecture backend (NestJS + Prisma + MySQL) et frontend (React + Vite + MUI). Cette application permet de gérer des tâches via une interface utilisateur simple. Elle est connectée à une base de données MySQL où les tâches sont stockées.

##  Fonctionnalités

- **Frontend** : Interface utilisateur pour créer, modifier et supprimer des tâches
- **Backend** : API RESTful pour interagir avec les tâches (CRUD)
- **Base de données** : Stockage des tâches dans une base de données MySQL via Prisma
- **DBeaver** : Outil pour interagir avec la base de données MySQL, visualiser les données et exécuter des requêtes SQL

---

##  Architecture

### Backend (NestJS)

- `src/Controllers/TaskController.ts` : Définit les routes de l'API pour gérer les tâches
- `src/Services/TaskService.ts` : Contient la logique métier pour le CRUD des tâches
- `src/UseCase/*` : Implémentation des cas d'usage pour la gestion des tâches
- `prisma/schema.prisma` : Modèle de la base de données
- `PrismaService.ts` : Service d'accès à la base de données via Prisma

### Frontend (React + Vite)

- `src/pages/TodoPage.tsx` : Composant principal de l'application où les utilisateurs peuvent voir et gérer leurs tâches
- `src/hooks/useFetch.ts` : Hook personnalisé pour effectuer des appels API
- `src/index.tsx` : Point d'entrée React pour démarrer l'application

---

##  Prérequis

- Node.js (v16 ou supérieur)
- MySQL (ou MariaDB)
- Prisma ORM
- DBeaver (outil de gestion de base de données)

---

##  Installation

###  1. Clone le repo

```bash
git clone https://github.com/ton-pseudo/hdm-todo-app.git
cd hdm-todo-app

###  2. Structure du projet


hdm-todo-app/
├── backend/               # Backend avec NestJS et Prisma
│   ├── src/               # Code source du backend
│   ├── prisma/            # Fichiers de configuration Prisma
│   ├── .env               # Variables d'environnement pour le backend
│   └── package.json       # Dépendances et scripts backend
└── frontend/              # Frontend avec React et Vite
    ├── src/               # Code source du frontend
    ├── .env               # Variables d'environnement pour le frontend
    └── package.json       # Dépendances et scripts frontend


###  3. Backend – Installation et configuration

##  a. Installer les dépendances
Dans le dossier backend/ :

cd backend
npm install

##  b. Configurer la base de données
Crée un fichier .env dans backend/ avec les informations suivantes :

env
DATABASE_URL="mysql://root:password@localhost:3306/tododb"

##  c. Générer le schéma Prisma

npx prisma migrate dev --name init
##  d. Lancer le serveur NestJS

npm run start:dev
Le backend sera accessible sur http://localhost:3000

###  4. Frontend – Installation et configuration
a. Installer les dépendances
Dans le dossier frontend/ :


cd frontend
npm install
b. Configurer l'URL de l'API
Crée un fichier .env dans frontend/ avec l'URL du backend :


VITE_API_BASE_URL=http://localhost:3000
##  c. Lancer l'application React
bash
Copier
Modifier
npm run dev
Le frontend sera accessible sur http://localhost:5173.

# Utilisation
API Endpoints (Backend)
GET /tasks : Récupérer la liste des tâches

POST /tasks : Créer une nouvelle tâche { name: "Nom de la tâche" }

PUT /tasks/:id : Modifier une tâche existante

DELETE /tasks/:id : Supprimer une tâche existante

Frontend (React)
L'interface permet d'ajouter, de modifier et de supprimer des tâches.

Les modifications sont automatiquement mises à jour en backend après chaque action.

Interface Utilisateur
Liste des tâches : Toutes les tâches sont affichées avec un champ de texte pour chaque tâche.

Édition : Clique sur l'icône de crayon pour modifier une tâche.

Suppression : Clique sur l'icône de la poubelle pour supprimer une tâche.

# .gitignore
Assure-toi que les fichiers suivants sont ignorés par Git :

bash
Copier
Modifier
node_modules/
.env
dist/
prisma/dev.db

 # Exemple d'utilisation de l'API
Récupérer toutes les tâches :

GET /tasks

Exemple de réponse :


[
  { "id": 1, "name": "Faire les courses" },
  { "id": 2, "name": "Répondre aux emails" }
]
Créer une nouvelle tâche :

POST /tasks

Corps de la requête :


{ "name": "Faire du sport" }
Exemple de réponse :


{ "id": 3, "name": "Faire du sport" }
Modifier une tâche :

PUT /tasks/1

Corps de la requête :

{ "name": "Faire les courses et nettoyer" }
Exemple de réponse :


{ "id": 1, "name": "Faire les courses et nettoyer" }
Supprimer une tâche :

DELETE /tasks/2

#  Exemple de réponse :


{ "id": 2, "name": "Répondre aux emails" }

##  Utilisation de DBeaver avec MySQL
Pour interagir avec la base de données MySQL via DBeaver, suivez ces étapes :

### 1. Lancer DBeaver
Télécharge et installe DBeaver (si ce n'est pas déjà fait) à partir de DBeaver.io.

###  2. Se connecter à la base de données
Ouvrir DBeaver et créer une nouvelle connexion :

Clique sur l'icône de base de données en haut à gauche ou dans le menu "Database".

Sélectionne "MySQL" comme type de base de données.

Entre les informations de connexion suivantes :

Host : localhost

Port : 3306 (ou autre si configuré différemment)

Username : root (ou autre selon ta configuration)

Password : password (ou le mot de passe de ton utilisateur MySQL)

Database : todo_app (ou le nom de la base de données utilisée)

Clique sur "Test Connection" pour vérifier si la connexion fonctionne, puis sur "Finish" pour établir la connexion.

###  3. Visualiser et manipuler la base de données
Une fois connecté, tu verras la base de données todo_app dans le panneau latéral.

Voir les tables : Clique sur la base de données et explore les tables, notamment la table Task.

Exécuter des requêtes SQL : Tu peux écrire des requêtes dans l'onglet "SQL Editor" pour interroger ou manipuler les données.

Exemple de requête pour afficher toutes les tâches :


SELECT * FROM Task;

###  4. Modifier la structure de la base de données

Si tu veux ajouter des colonnes ou modifier des tables, tu peux utiliser l'interface graphique de DBeaver ou exécuter des requêtes SQL directement pour modifier la structure de la base de données.










