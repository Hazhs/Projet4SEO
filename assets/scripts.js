$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});


const richSnippet = document.createElement('script');
richSnippet.type = "application/ld+json";

let jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nina Carducci",
    "jobTitle": "Photographe",
    "url": "https://ninacarducci.com",
    "image": "https://ninacarducci.com/nina.webp",
    "description": "Photographe professionnel spécialisé en portraits et événements.",
    "telephone": "+33 5 56 67 78 89",
    "contactType": "general inquiry",
    "hoursAvailable": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
    ],
    "opens": "10:00",
    "closes": "19:00"
    },
    "sameAs": [
        "https://www.instagram.com/ninacarducci.photo/?hl=fr"
    ],
    "workLocation": {
        "@type": "Place",
        "name": "Nina Carducci Photographie",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "68 avenue Alsace-Lorraine",
            "addressLocality": "Bordeaux",
            "postalCode": "33200",
            "addressCountry": "FR"
        }
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de Photographie",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Photographie de Mariage",
                    "description": "Captures élégantes et intemporelles de votre journée spéciale."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Photographie de Portrait",
                    "description": "Portraits professionnels en studio ou en extérieur."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Photographie événementiel",
                    "description": "clichés professionnels de concerts ou d'entreprises"
                }
            }
        ]
    },
};

richSnippet.text = JSON.stringify(jsonLdData);

document.head.appendChild(richSnippet);
