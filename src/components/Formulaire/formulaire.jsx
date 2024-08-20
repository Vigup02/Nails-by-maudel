// Composant du formulaire
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import s from './formulaire.module.sass';
import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton'; // Assurez-vous que le chemin est correct

const SignupForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const onSubmit = data => {
    console.log(data);

    // Simuler l'envoi de l'email (remplacez par la logique réelle)
    // e.g., axios.post('/send-email', data);

    setConfirmationMessage('Votre message a été envoyé avec succès !');
    setShowModal(true);
    reset();

    // Optionnel : Réinitialiser le message après 5 secondes
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