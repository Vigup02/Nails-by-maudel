// Composant du formulaire
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { saveUserData } from '../../assets/userSlice';
import s from './formulaire.module.sass';
import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton'; // Assurez-vous que le chemin est correct

const SignupForm = () => {
  // Initialisation de react-hook-form
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  // Initialisation du hook useDispatch pour envoyer des actions au store Redux
  const dispatch = useDispatch();  
  // État pour gérer le message de confirmation
  const [confirmationMessage, setConfirmationMessage] = useState(''); 
  // État pour gérer l'affichage du modal de confirmation
  // Le modal est initialement caché (false), et sera affiché (true) après la soumission du formulaire
  const [showModal, setShowModal] = useState(false);
  // Fonction appelée lors de la soumission du formulaire
  const onSubmit = data => {
    console.log(data); // Affiche les données du formulaire dans la console pour le débogage
    // Simuler l'envoi de l'email (remplacez par la logique réelle)
    // e.g., axios.post('/send-email', data);

      // Enregistrement des données utilisateur dans le store Redux
      dispatch(saveUserData(data));
       // Mise à jour de l'état pour afficher le message de confirmation
      setConfirmationMessage('Votre message a été envoyé avec succès !');
       // Afficher le modal de confirmation
      setShowModal(true);
      // Réinitialiser les champs du formulaire
      reset();

    // Optionnel :  Réinitialiser le message et cacher le modal après 5 secondes
    setTimeout(() => {
      setConfirmationMessage('');
      
      setShowModal(false);
    }, 5000);
  };

  return (
    <div className={s.formCont}>
      <h3 className={s.formCont_title}>Envie d'en savoir plus ou de partager vos idées?
      Laissez-moi votre message ici</h3>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.nameContainer}>
          <div className={s.formGroup}>
            <input
              {...register('lastName', { required: 'Un nom est requis' })}
              className={s.inputField}
              placeholder="Nom"
            />
            {errors.lastName && <span className={s.errorMessage}>{errors.lastName.message}</span>}
          </div>
          <div className={s.formGroup}>
            <input
              {...register('firstName', { required: 'Un prénom est requis' })}
              className={s.inputField}
              placeholder="Prénom"
            />
            {errors.firstName && <span className={s.errorMessage}>{errors.firstName.message}</span>}
          </div>
        </div>
        <div className={s.formGroup}>
          <input
            {...register('phoneNumber', { required: 'Un numéro de téléphone est requis' })}
            className={s.inputField}
            placeholder="Numéro de téléphone"
          />
          {errors.phoneNumber && <span className={s.errorMessage}>{errors.phoneNumber.message}</span>}
        </div>
        <div className={s.formGroup}>
          <input
            type="email"
            {...register('email', { required: 'Un email est requis' })}
            className={s.inputField}
            placeholder="Email"
          />
          {errors.email && <span className={s.errorMessage}>{errors.email.message}</span>}
        </div>
        <div className={s.formGroup}>
          <textarea
            {...register('about', { required: 'Précisez l\'objet' })}
            className={s.inputField}
            placeholder="À propos de quoi ?"
          />
          {errors.about && <span className={s.errorMessage}>{errors.about.message}</span>}
        </div>
        <div className={s.formGroup}>
          <textarea
            {...register('message', { required: 'Votre message est requis' })}
            className={s.textArea}
            placeholder="Votre message"
          />
          {errors.message && <span className={s.errorMessage}>{errors.message.message}</span>}
        </div>
        </form>
        <SecondaryButton className={s.button} text="Envoyer" onClick={handleSubmit(onSubmit)} />
        
      {/* Affichage du message de confirmation */}
      {showModal && (
        <div className={s.modal}>
          <div className={s.modalContent}>
            <span className={s.close} onClick={() => setShowModal(false)}>&times;</span>
            <p>{confirmationMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupForm;