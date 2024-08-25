import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignupForm from './formulaire'; 
import { Provider } from 'react-redux';
import { testStore } from '../../store/testStore';

// Décrire un ensemble de tests pour le composant SignupForm
describe('SignupForm', () => {

  // Test pour vérifier que le formulaire se rend correctement et que la soumission fonctionne
  test('renders the form and submits successfully', async () => {
    
    // Rendre le composant SignupForm en l'encapsulant dans un Provider pour accéder au store Redux
    render(
      <Provider store={testStore}>
        <SignupForm />
      </Provider>
    );

    // Vérifier que tous les champs du formulaire sont présents dans le DOM
    expect(screen.getByPlaceholderText('Nom')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Prénom')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Numéro de téléphone')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('À propos de quoi ?')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Votre message')).toBeInTheDocument();

    // Remplir les champs du formulaire avec des valeurs de test
    fireEvent.change(screen.getByPlaceholderText('Nom'), { target: { value: 'BROBAN' } });
    fireEvent.change(screen.getByPlaceholderText('Prénom'), { target: { value: 'Virginie' } });
    fireEvent.change(screen.getByPlaceholderText('Numéro de téléphone'), { target: { value: '123456' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'vig@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('À propos de quoi ?'), { target: { value: 'Objet' } });
    fireEvent.change(screen.getByPlaceholderText('Votre message'), { target: { value: 'Hello' } });

    // Simuler un clic sur le bouton "Envoyer" pour soumettre le formulaire
    fireEvent.click(screen.getByText('Envoyer'));

    // Attendre que le message de confirmation apparaisse et vérifier qu'il est affiché
    await waitFor(() => expect(screen.getByText('Votre message a été envoyé avec succès !')).toBeInTheDocument());
  });

  // Test pour vérifier que les erreurs de validation sont affichées lorsque les champs sont laissés vides
  test('shows validation errors when fields are left empty', async () => {
    
    // Rendre le composant SignupForm en l'encapsulant dans un Provider pour accéder au store Redux
    render(
      <Provider store={testStore}>
        <SignupForm />
      </Provider>
    );

    // Simuler un clic sur le bouton "Envoyer" sans remplir les champs du formulaire
    fireEvent.click(screen.getByText('Envoyer'));

    // Attendre et vérifier que les messages d'erreur de validation appropriés sont affichés
    expect(await screen.findByText('Un nom est requis')).toBeInTheDocument();
    expect(await screen.findByText('Un prénom est requis')).toBeInTheDocument();
    expect(await screen.findByText('Un numéro de téléphone est requis')).toBeInTheDocument();
    expect(await screen.findByText('Un email est requis')).toBeInTheDocument();
    expect(await screen.findByText('Précisez l\'objet')).toBeInTheDocument();
    expect(await screen.findByText('Votre message est requis')).toBeInTheDocument();
  });
});
