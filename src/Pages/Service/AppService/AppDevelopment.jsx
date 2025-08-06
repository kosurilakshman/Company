import React, { useEffect } from "react";

const AppService = () => {
  useEffect(() => {
    document.title = "App Development Services | Sanjit Tech Solutions";

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Professional app development services in Mangalagiri. We build high-quality, scalable, and user-friendly mobile applications.";
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content = "App Development, Mobile Apps, Android, iOS, Mangalagiri, Scalable Apps";
    document.head.appendChild(metaKeywords);

    const canonicalLink = document.createElement("link");
    canonicalLink.rel = "canonical";
    canonicalLink.href = "https://www.sanjittechsolutions.in/services/App-development";
    document.head.appendChild(canonicalLink);

    // Optional: console log to confirm it's running
    console.log("App Service SEO applied");

    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
      document.head.removeChild(canonicalLink);
    };
  }, []);

  return (
    <>
      <h1>App Development Services</h1>
    </>
  );
};

export default AppService;


console.log("App Service SEO applied");