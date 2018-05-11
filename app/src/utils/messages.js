const messages = {
  OK: 'Ok',
  CANCEL: 'Chiudi',
  EDIT: 'Modifica',
  DELETE: 'Elimina',
  SUCCESS: '',
  ERROR: 'Si è verificato un errore',
  ERROR_LOGIN: 'Il Nome utente o la password non sono corretti',
  SUCCESS_LOGIN: 'Login effettuato correttamente',
  SUCCESS_LOGOUT: "Sei stato disconnesso correttamente dall'applicazione",
  SUCCESS_PWD_RESET:
    "E' stata inviata una password all'indirizzo email indicato",
  ERROR_PWD_RESET:
    'Si è verificato un errore durante la procedura di richiesta Password',
  SUCCESS_SIGNUP: 'Registrazione avvenuta correttamente',
  ERROR_SIGNUP:
    'Si è verificato un errore durante la procedura di Registrazione utente',
  ERROR_DELETE: 'Si è verificato un errore durante la cancellazione',
  SUCCESS_UPDATE_USER: 'Modifica avvenuta correttamente',
  ERROR_INSERT_OBLIGED_SUBJECT_LIMIT:
    'Non è possibile aggiungere altri soggetti obbligati.',
  ERROR_EDIT_OBLIGED_SUBJECT:
    'Si è verificato un errore durante il salvataggio del soggetto obbligato',
  SUCCESS_EDIT_OBLIGED_SUBJECT: 'Soggetto Obbligato salvato correttamente',
  SUCCESS_SEND_COMMUNICATION: 'Comunicazione Inviata Correttamente',
  ERROR_SEND_COMMUNICATION:
    "Si è verificare un errore durante l'invio della Comunicazione",
  SUCCESS_DELETE_OBLIGED_SUBJECT: 'Soggetto Obbligato cancellato correttamente',
  ERROR_DELETE_OBLIGED_SUBJECT:
    'Si è verificato un errore durante la cancellazione del Soggetto Obbligato',
  SUCCESS_DELETE_USER: 'Utente cancellato correttamente',
  ERROR_DELETE_USER:
    "Si è verificato un errore durante la cancellazione dell'utente",
  ERROR_UPDATE_USER:
    "Si è verificato un errore durante la modifica dell'utente",
  navMenu: {
    home: 'Home',
    users: 'Gestione Utenti',
    obligedSubjects: 'Soggetti Obbligati',
    settings: 'Impostazioni',
    profile: 'Profilo',
    help: 'Aiuto',
    logout: 'Logout'
  },
  login: {
    title: "Effettua l'accesso alla applicazione",
    emailValidation: "Inserire un'email valida",
    passwordValidation: 'Inserire una Password',
    loginButton: 'Accedi'
  },
  pwdReset: {
    title:
      "Inserisci l'indirizzo Email di registrazione<br />Riceverai un'email con le istruzioni con cui resettare la password di accesso.",
    button: 'Invia Richiesta',
    backToLogin: 'Torna alla Schermata Iniziale'
  },
  users: {
    labels: {
      title: 'Gestione Utenti',
      addNewUser: 'Aggiungi Nuovo',
      deleteConfirmation: "Confermi la cancellazione dell'utente?"
    }
  },
  userRegistration: {
    labels: {
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Conferma Password',
      newPassword: 'Nuova Password',
      confirmNewPassword: 'Conferma Nuova Password',
      companyName: 'Ragione Sociale',
      obligedSubjects: 'Numero Soggetti Obbligati',
      name: 'Nome',
      surname: 'Cognome',
      createPassword: 'Genera una nuova password',
      registerUser: 'Registra Utente',
      updateUser: 'Aggiorna Utente',
      expiryDate: 'Data di scadenza sottoscrizione',
      subscriptionStatus: 'Stato sottoscrizione',
      phone1: 'Recapito Telefonico 1',
      phone2: 'Recapito Telefonico 2',
      actions: 'Azioni'
    },
    errors: {
      emailValidation: "Inserire un'email valida",
      passwordValidation:
        'Inserire una Password costituita da almeno 8 caratteri, un simbolo, una lettera maiuscola, una lettera minuscola ed un numero.',
      companyName: 'Campo obbligatorio',
      mandatorySubjects: 'Campo obbligatorio',
      nameValidation: 'Nome non valido',
      surnameValidation: 'Cognome non valido',
      expiryDate: 'Data non valida'
    }
  },
  userProfile: {
    labels: {
      email: 'Email',
      currentPassword: 'Password attuale',
      password: 'Nuova Password',
      confirmPassword: 'Conferma Nuova Password',
      companyName: 'Ragione Sociale',
      name: 'Nome',
      surname: 'Cognome',
      saveUser: 'Salva',
      deleteAccount: 'Elimina Account',
      confirmDelete:
        'Per confermare la cancellazione, è necessario inserire la propria password',
      messageDelete:
        'Attenzione! Confermando la propria cancellazione, verranno eliminati TUTTI i dati relativi alla propria utenza, e non sarà più possibile recuperarli. Desideri procedere?'
    },
    errors: {
      currentPassword: 'Password obbligatoria',
      passwordValidation:
        'Inserire una Password costituita da almeno 8 caratteri, un simbolo, una lettera maiuscola, una lettera minuscola ed un numero.',
      confirmPassword: 'Le password non coincidono',
      confirmationPassword: 'La password inserita non è valida'
    }
  },
  obligedSubjects: {
    title: 'Gestione Soggetti Obbligati',
    CHECK_COMMUNICATION: 'Controlla Comunicazione',
    labels: {
      addNewSubject: 'Aggiungi Soggetto Obbligato',
      sidAccreditationNumber: 'Numero Accreditamento SID',
      certificatesPassword: 'Password Certificati di Firma',
      emailList: 'Indirizzo EMAIL',
      email:
        'Indirizzo EMAIL a cui spedire le comunicazioni (MITTENTE, normalmente la PEC del soggetto obbligato)',
      companyName: 'Ragione Sociale',
      district: 'Provincia',
      zip: 'Cap',
      city: 'Città',
      address: 'Indirizzo',
      vatNumber: 'Partita IVA',
      identityCode: 'Codice Fiscale',
      registerUser: 'Registra soggetto',
      closeDialog: 'Annulla'
    },
    errors: {
      certificatesError:
        'Impossibile procedere al caricamento dei file. Verifica di aver caricato 2 file con estensione .p12 e un file con estensione .ks',
      certificates: {
        maxFileError: 'Puoi caricare un massimo di 3 certificati',
        extensionError: 'Estensione %s non valida',
        maxP12Error:
          'Puoi caricare un massimo di 2 certificati con estensione .p12',
        maxKSError: 'Puoi caricare un solo certificato con estensione .ks',
        sameFileError: 'Non puoi aggiungere lo stesso file'
      }
    }
  },
  communicationForm: {
    labels: {
      sendMail: 'Invia Mail con Esiti',
      title: 'Controllo File da Comunicare',
      sendCommunication: 'Controlla Comunicazione',
      closeDialog: 'Annulla',
      parseConfirm: {
        title: 'Elaborazione SID completata con esito POSITIVO.',
        message:
          'Comunicazione elaborata correttamente. Cliccando il tasto "Invia", una mail verrà spedita all\'indirizzo $1 con allegati i file per esito positivo, da inoltrare all\'Agenzia delle entrate'
      },
      sentConfirm: {
        title: 'Esiti inviati con successo',
        message:
          "Gli esiti sono stati spediti via mail all'indirizzo $1 con allegati i file per esito positivo, da inoltrare all'Agenzia delle entrate"
      },
      progress: {
        title: 'Elaborazione in corso',
        message: "Attendi fino al completamento dell'operazione"
      },
      sentError: {
        title: 'Elaborazione SID completata con esito NEGATIVO.',
        message:
          "Verrà spedita una email all'indirizzo $1 con i dettagli dell'errore"
      }
    },
    errors: {
      files: {
        maxFilesError: 'Puoi caricare un massimo di 1 file',
        maxTXTError: 'Puoi caricare un solo file con estensione .txt',
        extensionError: 'Estensione %s non valida',
        sameFileError: 'Non puoi aggiungere lo stesso file'
      }
    }
  },
  fileUpload: {
    dragFile: 'Trascina i files da caricare',
    clickButton: 'oppure clicca qui per selezionare i files',
    deleteFile: 'Elimina File'
  },
  searchField: {
    placeholder: 'Cerca...'
  }
};

export default messages;
