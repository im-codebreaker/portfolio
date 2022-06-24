import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html
      {...props.htmlAttributes}
      data-theme='light'
      prefix='og: https://ogp.me/ns#'
    >
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <title>Bouchard Mehdi - Portfolio</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta name='author' content='Mehdi Bouchard' />
        <link rel='icon' href='favicon.ico' />
        <link rel='apple-touch-icon' href='favicon.png' />
        <link rel='canonical' href='' />
        {props.headComponents}
        <link
          href='https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css'
          rel='stylesheet'
        ></link>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id='___gatsby'
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
