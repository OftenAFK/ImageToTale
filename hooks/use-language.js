"use client"

import { useState, useEffect } from "react"

export const translations = {
  en: {
    // Navigation
    home: "Home",
    generate: "Generate",
    contact: "Contact",
    signin: "Sign In",
    logout: "Logout",

    // Home Page
    transformImages: "Transform Images into Stories",
    letAiCreativity:
      "Let AI creativity flow. Upload any image and watch as our intelligent system generates a unique, engaging story in seconds.",
    generateStoryNow: "Generate Your Story Now",
    aiPowered: "AI-Powered",
    aiPoweredDesc: "Advanced AI generates unique stories instantly",
    creativeStories: "Creative Stories",
    creativeStoriesDesc: "Each image becomes a compelling narrative",
    community: "Community",
    communityDesc: "Share and read stories from other creators",
    easyToUse: "Easy to Use",
    easyToUseDesc: "Simple interface for anyone to create",
    aboutImageToTail: "About ImageToTail",
    whatWeDo: "What We Do",
    whatWeDoDesc:
      "ImageToTail combines cutting-edge AI with creative storytelling to transform ordinary images into extraordinary narratives. Whether it's a landscape, portrait, or abstract image, we generate unique stories that captivate and inspire.",
    whyChooseUs: "Why Choose Us",
    whyChooseUsDesc:
      "Our platform is designed for creators, writers, and imagination seekers. With our advanced API integration and user-friendly interface, you can generate professional-quality stories in seconds, not hours.",
    communityDriven: "Community Driven",
    communityDrivenDesc:
      "Join thousands of creators sharing their visual stories. Read reviews, discover new perspectives, and engage in meaningful conversations with our vibrant community of storytellers.",
    meetOurTeam: "Meet Our Team",
    founderDeveloper: "Founder & Developer",
    teamMember: "Team Member",
    footer: "© 2025 ImageToTail. All rights reserved.",
    reviews: "Reviews",

    // Generate Page
    generateStory: "Generate Story",
    generating: "Generating...",
    yourGeneratedStory: "Your Generated Story",
    readyToCreate: "Ready to create?",
    uploadImageAndKey: "Upload an image and add your API key to generate a beautiful story",
    shareStory: "Share Story",
    submitReview: "Submit Review",
    copyStory: "Copy Story",
    storyOnClipboard: "Story copied to clipboard!",
    dropImageHere: "Drop your image here",
    orClickToBrowse: "or click to browse",
    yourApiKey: "Your API Key",
    enterApiKey: "Enter your API key",
    apiKeyNotStored: "Your API key is used locally and never stored on our servers",
    pleaseFillFields: "Please fill in all required fields",
    pleaseUploadImage: "Please upload an image first",
    pleaseEnterApiKey: "Please enter your API key",
    clickToChangeImage: "Click to change image",
    failedToGenerate: "Failed to generate story. Please check your API key and try again.",
    apiProvider: "AI API Provider",

    // Contact Page
    getInTouch: "Get In Touch",
    haveQuestions: "Have questions? We'd love to hear from you. Send us a message!",
    emailLabel: "Email",
    nameLabel: "Name",
    yourName: "Your name",
    yourEmail: "your@email.com",
    location: "Location",
    yourLocation: "Your location",
    mobileNumber: "Mobile Number",
    yourMobile: "Your mobile number",
    subjectLabel: "Subject",
    howCanWeHelp: "How can we help?",
    messageLabel: "Message",
    tellUsMore: "Tell us more about your inquiry...",
    sendMessage: "Send Message",
    contactEmail: "hello@imagetotail.com",
    contactPhone: "+1 (555) 123-4567",
    contactLocation: "San Francisco, CA",
    messageSuccess: "Thank you for your message! We'll get back to you soon.",

    // Reviews Page
    communityReviews: "Community Reviews",
    shareYourExperience: "Share Your Experience",
    shareYourExperienceDesc: "Share your experience with ImageToTail and read what others have to say",
    ratingLabel: "Rating",
    yourReviewLabel: "Your Review",
    reviewPlaceholder: "Share your thoughts about ImageToTail...",
    postReview: "Post Review",
    reviewPosted: "Thank you! Your review has been posted.",
    pleaseLoginToReview: "Please login to submit a review and join our community",
    noReviewsYet: "No reviews yet. Be the first to share your experience!",
    beFirstToShare: "Be the first to share your experience!",
    reply: "Reply",
    replies: "Replies",
    writeReply: "Write a reply...",
    pleaseLoginToReply: "Please login to reply",

    // Language
    language: "Language",
  },
  fr: {
    // Navigation
    home: "Accueil",
    generate: "Générer",
    contact: "Contact",
    signin: "Se connecter",
    logout: "Déconnexion",

    // Home Page
    transformImages: "Transformer les images en histoires",
    letAiCreativity:
      "Laissez la créativité de l'IA couler. Téléchargez n'importe quelle image et voyez comment notre système intelligent génère une histoire unique et engageante en quelques secondes.",
    generateStoryNow: "Générez votre histoire maintenant",
    aiPowered: "Alimenté par l'IA",
    aiPoweredDesc: "L'IA avancée génère des histoires uniques instantanément",
    creativeStories: "Histoires créatives",
    creativeStoriesDesc: "Chaque image devient un récit captivant",
    community: "Communauté",
    communityDesc: "Partagez et lisez les histoires d'autres créateurs",
    easyToUse: "Facile à utiliser",
    easyToUseDesc: "Interface simple pour que quiconque puisse créer",
    aboutImageToTail: "À propos d'ImageToTail",
    whatWeDo: "Ce que nous faisons",
    whatWeDoDesc:
      "ImageToTail combine la technologie d'IA de pointe avec la narration créative pour transformer des images ordinaires en récits extraordinaires. Qu'il s'agisse d'un paysage, d'un portrait ou d'une image abstraite, nous générons des histoires uniques qui captiven et inspirent.",
    whyChooseUs: "Pourquoi nous choisir",
    whyChooseUsDesc:
      "Notre plateforme est conçue pour les créateurs, les écrivains et les chercheurs d'imagination. Avec notre intégration API avancée et notre interface conviviale, vous pouvez générer des histoires de qualité professionnelle en quelques secondes, pas en heures.",
    communityDriven: "Basé sur la communauté",
    communityDrivenDesc:
      "Rejoignez des milliers de créateurs partageant leurs histoires visuelles. Découvrez de nouvelles perspectives et engagez-vous dans des conversations significatives avec notre vibrante communauté de conteurs.",
    meetOurTeam: "Rencontrez notre équipe",
    founderDeveloper: "Fondateur et développeur",
    teamMember: "Membre de l'équipe",
    footer: "© 2025 ImageToTail. Tous droits réservés.",
    reviews: "Avis",

    // Generate Page
    generateStory: "Générer une histoire",
    generating: "Génération...",
    yourGeneratedStory: "Votre histoire générée",
    readyToCreate: "Prêt à créer?",
    uploadImageAndKey: "Téléchargez une image et ajoutez votre clé API pour générer une belle histoire",
    shareStory: "Partager l'histoire",
    submitReview: "Soumettre un avis",
    copyStory: "Copier l'histoire",
    storyOnClipboard: "Histoire copiée dans le presse-papiers!",
    dropImageHere: "Déposez votre image ici",
    orClickToBrowse: "ou cliquez pour parcourir",
    yourApiKey: "Votre clé API",
    enterApiKey: "Entrez votre clé API",
    apiKeyNotStored: "Votre clé API est utilisée localement et n'est jamais stockée sur nos serveurs",
    pleaseFillFields: "Veuillez remplir tous les champs obligatoires",
    pleaseUploadImage: "Veuillez d'abord télécharger une image",
    pleaseEnterApiKey: "Veuillez entrer votre clé API",
    clickToChangeImage: "Cliquez pour changer d'image",
    failedToGenerate: "Impossible de générer l'histoire. Veuillez vérifier votre clé API et réessayer.",
    apiProvider: "Fournisseur API IA",

    // Contact Page
    getInTouch: "Nous contacter",
    haveQuestions: "Vous avez des questions? Nous aimerions vous entendre. Envoyez-nous un message!",
    emailLabel: "E-mail",
    nameLabel: "Nom",
    yourName: "Votre nom",
    yourEmail: "votre@email.com",
    location: "Localisation",
    yourLocation: "Votre emplacement",
    mobileNumber: "Numéro de téléphone",
    yourMobile: "Votre numéro de téléphone",
    subjectLabel: "Sujet",
    howCanWeHelp: "Comment pouvons-nous vous aider?",
    messageLabel: "Message",
    tellUsMore: "Parlez-nous davantage de votre demande...",
    sendMessage: "Envoyer le message",
    contactEmail: "hello@imagetotail.com",
    contactPhone: "+1 (555) 123-4567",
    contactLocation: "San Francisco, CA",
    messageSuccess: "Merci pour votre message! Nous vous répondrons bientôt.",

    // Reviews Page
    communityReviews: "Avis communautaires",
    shareYourExperience: "Partagez votre expérience",
    shareYourExperienceDesc: "Partagez votre expérience avec ImageToTail et lisez ce que les autres ont à dire",
    ratingLabel: "Évaluation",
    yourReviewLabel: "Votre avis",
    reviewPlaceholder: "Partagez vos pensées sur ImageToTail...",
    postReview: "Publier l'avis",
    reviewPosted: "Merci! Votre avis a été publié.",
    pleaseLoginToReview: "Veuillez vous connecter pour soumettre un avis et rejoindre notre communauté",
    noReviewsYet: "Pas encore d'avis. Soyez le premier à partager votre expérience!",
    beFirstToShare: "Soyez le premier à partager votre expérience!",
    reply: "Répondre",
    replies: "Réponses",
    writeReply: "Écrivez une réponse...",
    pleaseLoginToReply: "Veuillez vous connecter pour répondre",

    // Language
    language: "Langue",
  },
  es: {
    // Navigation
    home: "Inicio",
    generate: "Generar",
    contact: "Contacto",
    signin: "Iniciar sesión",
    logout: "Cerrar sesión",

    // Home Page
    transformImages: "Transforma imágenes en historias",
    letAiCreativity:
      "Deja que la creatividad de la IA fluya. Carga cualquier imagen y observa cómo nuestro sistema inteligente genera una historia única y atractiva en segundos.",
    generateStoryNow: "Genera tu historia ahora",
    aiPowered: "Impulsado por IA",
    aiPoweredDesc: "La IA avanzada genera historias únicas al instante",
    creativeStories: "Historias creativas",
    creativeStoriesDesc: "Cada imagen se convierte en una narrativa convincente",
    community: "Comunidad",
    communityDesc: "Comparte y lee historias de otros creadores",
    easyToUse: "Fácil de usar",
    easyToUseDesc: "Interfaz simple para que cualquiera pueda crear",
    aboutImageToTail: "Acerca de ImageToTail",
    whatWeDo: "Qué hacemos",
    whatWeDoDesc:
      "ImageToTail combina la tecnología de IA de punta con la narración creativa para transformar imágenes ordinarias en narrativas extraordinarias. Ya sea un paisaje, retrato o imagen abstracta, generamos historias únicas que cautivan e inspiran.",
    whyChooseUs: "Por qué elegirnos",
    whyChooseUsDesc:
      "Nuestra plataforma está diseñada para creadores, escritores y buscadores de imaginación. Con nuestra integración API avanzada e interfaz fácil de usar, puedes generar historias de calidad profesional en segundos, no en horas.",
    communityDriven: "Impulsado por la comunidad",
    communityDrivenDesc:
      "Únete a miles de creadores que comparten sus historias visuales. Descubre nuevas perspectivas e involúcrate en conversaciones significativas con nuestra vibrante comunidad de narradores.",
    meetOurTeam: "Conoce a nuestro equipo",
    founderDeveloper: "Fundador y desarrollador",
    teamMember: "Miembro del equipo",
    footer: "© 2025 ImageToTail. Todos los derechos reservados.",
    reviews: "Reseñas",

    // Generate Page
    generateStory: "Generar historia",
    generating: "Generando...",
    yourGeneratedStory: "Tu historia generada",
    readyToCreate: "¿Listo para crear?",
    uploadImageAndKey: "Carga una imagen y añade tu clave API para generar una hermosa historia",
    shareStory: "Compartir historia",
    submitReview: "Enviar reseña",
    copyStory: "Copiar historia",
    storyOnClipboard: "¡Historia copiada al portapapeles!",
    dropImageHere: "Suelta tu imagen aquí",
    orClickToBrowse: "o haz clic para examinar",
    yourApiKey: "Tu clave API",
    enterApiKey: "Ingresa tu clave API",
    apiKeyNotStored: "Tu clave API se utiliza localmente y nunca se almacena en nuestros servidores",
    pleaseFillFields: "Por favor completa todos los campos requeridos",
    pleaseUploadImage: "Por favor carga una imagen primero",
    pleaseEnterApiKey: "Por favor ingresa tu clave API",
    clickToChangeImage: "Haz clic para cambiar la imagen",
    failedToGenerate: "Error al generar la historia. Por favor verifica tu clave API e intenta de nuevo.",
    apiProvider: "Proveedor de API de IA",

    // Contact Page
    getInTouch: "Ponte en contacto",
    haveQuestions: "¿Tienes preguntas? ¡Nos gustaría escucharte! Envíanos un mensaje.",
    emailLabel: "Correo electrónico",
    nameLabel: "Nombre",
    yourName: "Tu nombre",
    yourEmail: "tu@email.com",
    location: "Ubicación",
    yourLocation: "Tu ubicación",
    mobileNumber: "Número de teléfono",
    yourMobile: "Tu número de teléfono",
    subjectLabel: "Asunto",
    howCanWeHelp: "¿Cómo podemos ayudarte?",
    messageLabel: "Mensaje",
    tellUsMore: "Cuéntanos más sobre tu consulta...",
    sendMessage: "Enviar mensaje",
    contactEmail: "hello@imagetotail.com",
    contactPhone: "+1 (555) 123-4567",
    contactLocation: "San Francisco, CA",
    messageSuccess: "¡Gracias por tu mensaje! Nos comunicaremos pronto.",

    // Reviews Page
    communityReviews: "Reseñas comunitarias",
    shareYourExperience: "Comparte tu experiencia",
    shareYourExperienceDesc: "Comparte tu experiencia con ImageToTail y lee lo que otros tienen que decir",
    ratingLabel: "Calificación",
    yourReviewLabel: "Tu reseña",
    reviewPlaceholder: "Comparte tus pensamientos sobre ImageToTail...",
    postReview: "Publicar reseña",
    reviewPosted: "¡Gracias! Tu reseña ha sido publicada.",
    pleaseLoginToReview: "Por favor inicia sesión para enviar una reseña y únete a nuestra comunidad",
    noReviewsYet: "Aún no hay reseñas. ¡Sé el primero en compartir tu experiencia!",
    beFirstToShare: "¡Sé el primero en compartir tu experiencia!",
    reply: "Responder",
    replies: "Respuestas",
    writeReply: "Escribe una respuesta...",
    pleaseLoginToReply: "Por favor inicia sesión para responder",

    // Language
    language: "Idioma",
  },
}

export function useLanguage() {
  const [language, setLanguage] = useState("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("language")
    if (saved) setLanguage(saved)
    setMounted(true)
  }, [])

  const setLang = (lang) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key) => {
    return translations[language][key] || key
  }

  return { language, setLanguage: setLang, t, mounted }
}
