import React from "react";
import { Helmet } from "react-helmet";

function Meta({ title, description, ogDescription }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:description" content={ogDescription} />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
            <link rel="icon" type="image/png" href="../assets/img/favicon.png" />
            <meta property="og:image:width" content="500" />
            <meta property="og:image:height" content="500" />
            <meta property="og:image" type="image/png" content="/assets/img/favicon.png" />
            <meta property="og:title" content="Veneto Games Corp // VGC Solution" />
            <meta property="og:url" content="" />
            <meta property="og:site_name" content="Vgc Solution" />
            <link rel="stylesheet" href="../../assets/bootstrap/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:200,300,400,700&display=swap" />
            <link rel="stylesheet" href="../../assets/fonts/fontawesome-all.min.css" />
            <link rel="stylesheet" href="../../assets/fonts/font-awesome.min.css" />
            <link rel="stylesheet" href="../../assets/fonts/fontawesome5-overrides.min.css" />
            <link rel="stylesheet" href="../../assets/css/main.css " />
            <link rel="stylesheet" href="../../assets/css/Social-Menu-Sticky.css" />
        </Helmet>
    );
}

export default Meta;
