# CRM Web - Gestion des Contacts

Application web simple de gestion de contacts (CRM) permettant de stocker et gérer les informations des clients.

## Fonctionnalités

- ✅ Ajouter des contacts (Prénom, Nom, Âge)
- ✅ Afficher la liste des contacts
- ✅ Supprimer des contacts individuellement
- ✅ Effacer tous les contacts
- ✅ Stockage local des données (localStorage)
- ✅ Interface responsive et moderne
- ✅ Notifications en temps réel
- ✅ Protection contre les injections XSS

## Utilisation

### Démarrage rapide

1. Ouvrez le fichier `index.html` dans votre navigateur web
2. Remplissez le formulaire avec :
   - Prénom du contact
   - Nom du contact
   - Âge du contact
3. Cliquez sur "Ajouter le contact"
4. Les contacts apparaîtront dans la liste en dessous

### Fonctionnalités supplémentaires

- **Supprimer un contact** : Cliquez sur le bouton "Supprimer" sur la carte du contact
- **Effacer tous les contacts** : Cliquez sur "Tout effacer" en haut de la liste
- **Données persistantes** : Les contacts sont automatiquement sauvegardés dans le navigateur

## Structure du projet

```
.
├── index.html    # Page principale
├── style.css     # Styles de l'application
├── script.js     # Logique JavaScript
└── README.md     # Documentation
```

## Technologies utilisées

- **HTML5** : Structure de la page
- **CSS3** : Design et animations
- **JavaScript ES6+** : Logique métier et gestion des données
- **localStorage** : Stockage des données côté client

## Compatibilité

L'application fonctionne sur tous les navigateurs modernes :
- Chrome / Edge (version 90+)
- Firefox (version 88+)
- Safari (version 14+)

## Sécurité

- Protection contre les injections XSS avec échappement HTML
- Validation des données côté client
- Stockage sécurisé dans localStorage

## Améliorations possibles

- Export des données en CSV/JSON
- Recherche et filtrage des contacts
- Tri par nom, âge ou date
- Ajout de champs supplémentaires (email, téléphone, adresse)
- Backend pour stockage serveur
- Authentification utilisateur
