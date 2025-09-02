# Site de demande de remboursement (sans collecte de carte)

Ce dépôt contient un site statique simple pour soumettre des demandes de remboursement en toute sécurité. Il est conçu pour être déployé sur GitHub Pages et ne collecte **jamais** de numéros de carte de paiement ni de codes CVV. Les remboursements sont traités via un prestataire de paiement certifié PCI DSS (par exemple Stripe ou Adyen) sur des pages hébergées sécurisées.

## Structure

- `index.html` : page d'accueil avec formulaire de demande de remboursement (nom, email, téléphone, ID de commande, montant, motif).
- `privacy.html` : politique de confidentialité indiquant que nous ne stockons pas de données de carte et expliquant comment les informations sont utilisées.
- `terms.html` : conditions générales d'utilisation de ce service.
- `css/` : fichier `styles.css` contenant les styles du site.
- `js/` : script `app.js` pour la validation du formulaire et l'envoi au backend.
- `assets/` : ressources telles que le logo.

## Déploiement sur GitHub Pages

1. Créez un dépôt GitHub (public ou privé) et copiez-y les fichiers de ce projet.
2. Allez dans **Settings → Pages** et sélectionnez `main` comme branche et `/ (root)` comme dossier.
3. Cliquez sur **Save**. Votre site sera accessible à l'adresse `https://<votre-nom-utilisateur>.github.io/<nom-du-dépôt>/`.

## Utilisation du formulaire

Le formulaire collecte uniquement les informations nécessaires pour traiter votre demande de remboursement. Lorsque vous cliquez sur **Envoyer la demande**, ces données sont envoyées à l'URL de backend spécifiée dans `js/app.js`. Vous devez remplacer `https://your-form-endpoint.example/submit` par l'URL de votre fournisseur de formulaire (Formspree, Getform, Basin, Netlify Forms ou votre propre API).

N'ajoutez pas de champs pour des numéros de carte ou des codes CVV : utilisez toujours des solutions de paiement hébergées pour rester conforme aux normes PCI.
