// Classe pour gérer le CRM
class CRM {
    constructor() {
        this.contacts = this.loadContacts();
        this.init();
    }

    // Initialisation des événements
    init() {
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addContact();
        });

        document.getElementById('clearAll').addEventListener('click', () => {
            this.clearAllContacts();
        });

        this.displayContacts();
    }

    // Charger les contacts depuis le localStorage
    loadContacts() {
        const stored = localStorage.getItem('crmContacts');
        return stored ? JSON.parse(stored) : [];
    }

    // Sauvegarder les contacts dans le localStorage
    saveContacts() {
        localStorage.setItem('crmContacts', JSON.stringify(this.contacts));
    }

    // Ajouter un nouveau contact
    addContact() {
        const prenom = document.getElementById('prenom').value.trim();
        const nom = document.getElementById('nom').value.trim();
        const age = parseInt(document.getElementById('age').value);

        if (!prenom || !nom || !age) {
            alert('Veuillez remplir tous les champs');
            return;
        }

        const contact = {
            id: Date.now(),
            prenom: prenom,
            nom: nom,
            age: age,
            dateAjout: new Date().toISOString()
        };

        this.contacts.unshift(contact);
        this.saveContacts();
        this.displayContacts();

        // Réinitialiser le formulaire
        document.getElementById('contactForm').reset();
        document.getElementById('prenom').focus();

        // Animation de confirmation
        this.showNotification('Contact ajouté avec succès !');
    }

    // Supprimer un contact
    deleteContact(id) {
        if (confirm('Êtes-vous sûr de vouloir supprimer ce contact ?')) {
            this.contacts = this.contacts.filter(contact => contact.id !== id);
            this.saveContacts();
            this.displayContacts();
            this.showNotification('Contact supprimé');
        }
    }

    // Effacer tous les contacts
    clearAllContacts() {
        if (this.contacts.length === 0) {
            alert('Aucun contact à supprimer');
            return;
        }

        if (confirm(`Êtes-vous sûr de vouloir supprimer tous les ${this.contacts.length} contacts ?`)) {
            this.contacts = [];
            this.saveContacts();
            this.displayContacts();
            this.showNotification('Tous les contacts ont été supprimés');
        }
    }

    // Afficher les contacts
    displayContacts() {
        const contactsList = document.getElementById('contactsList');
        const totalContacts = document.getElementById('totalContacts');

        totalContacts.textContent = this.contacts.length;

        if (this.contacts.length === 0) {
            contactsList.innerHTML = '<p class="empty-message">Aucun contact enregistré</p>';
            return;
        }

        contactsList.innerHTML = this.contacts.map(contact => `
            <div class="contact-card" data-id="${contact.id}">
                <div class="contact-info">
                    <div class="contact-name">${this.escapeHtml(contact.prenom)} ${this.escapeHtml(contact.nom)}</div>
                    <div class="contact-age">Âge: ${contact.age} ans</div>
                    <div class="contact-date">Ajouté le ${this.formatDate(contact.dateAjout)}</div>
                </div>
                <button class="btn-delete" onclick="crm.deleteContact(${contact.id})">
                    Supprimer
                </button>
            </div>
        `).join('');
    }

    // Formatter la date
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    // Échapper le HTML pour éviter les injections XSS
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Afficher une notification
    showNotification(message) {
        // Créer l'élément de notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4caf50;
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;

        // Ajouter l'animation CSS
        if (!document.getElementById('notification-style')) {
            const style = document.createElement('style');
            style.id = 'notification-style';
            style.textContent = `
                @keyframes slideIn {
                    from {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(notification);

        // Retirer la notification après 3 secondes
        setTimeout(() => {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Initialiser le CRM au chargement de la page
let crm;
document.addEventListener('DOMContentLoaded', () => {
    crm = new CRM();
});
