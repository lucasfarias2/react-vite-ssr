const generateTemplate = preloadedState => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>react-vite-ssr</title>
    <link rel="stylesheet" href="./src/style.css" />
    <script>
      window.__PRELOADED_STATE__ = ${preloadedState}
    </script>
  </head>
  <body>
    <div id="root"><!--app-html--></div>
    <script type="module" src="./src/ClientApp.tsx"></script>
  </body>
</html>
`;

export default generateTemplate;
