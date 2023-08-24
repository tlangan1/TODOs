## Installation

1. To initiate this SolidJS application I executed `npx degit solidjs/templates/js TODOs`
1. A README.md was created and I renamed it to DefaultREADME.md.
1. I next executed `npm i` to install the required packages.
1. Next I executed `npm i mysql` and `npm i promise`

## Debugging

1. See D:\Computer Science\NEED TO REVIEW\Compound Debug Configuration\.vscode for a compound debug configuration.

## Configuration

1. The Express server is responding to all requests on port 3001 and should only be receiving data requests. To start this server run the following command:

   ```
   node server.js

   or

   node --inspect server.js if you wish to debug the server side
   ```

1. The SolidJS server (actually I am not sure what the server actually is) is responding to all requests on port 3000. To start the application run the following command:
   ```
   npm run dev
   ```

## TODOs

1. Write code to handle database errors.
1. If an error occurs on a fetch change the "...loading" to "unable to process this request at this time." This could include the request for an invalid route. The fetcher.error works in App2.jsx but not in App1.jsx???
1. Finish code to add a TODO. See the mysql README lines 808 through 813 for a useful `insert` technique.
1. Try to create a declarative interface to writing data to the database to avoid rewriting the same plumbing
