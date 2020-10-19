import React from "react";
import Head from "next/head";
import { DEFAULT_TITLE } from "@/constants/SEO";

import { SEOProps } from "./types";

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  shouldExcludeTitleSuffix = false,
  shouldIndexPage = true,
}) => {
  const suffix = !shouldExcludeTitleSuffix ? `| ${DEFAULT_TITLE}` : "";

  const pageTitle = `${title} ${suffix}`;

  const pageImage = image
    ? `${process.env.NEXT_PUBLIC_BASE_URL}${image}`
    : null;

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>

        {description && <meta name="description" content={description} />}

        {image && <meta name="image" content={pageImage} />}

        {!shouldIndexPage && <meta name="robots" content="noindex, nofollow" />}

        <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="theme-color" content="primary.color" />
        <meta name="msapplication-TileColor" content="primary.color" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="google" content="notranslate" />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={pageTitle} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:image:secure_url" content={pageImage} />
        <meta property="og:image:alt" content="Thumbnail" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
    </div>
  );
};

export default SEO;
