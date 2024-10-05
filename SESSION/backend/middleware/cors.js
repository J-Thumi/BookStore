const cors = require('cors');

const whiteList = new Set(['http://se.com']);
const corsOptions = {
  optionsSuccessStatus: 200,
  origin: (origin, callback) => {
    // Allow requests with no origin, like mobile apps or curl requests
    if (!origin || whiteList.has(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

const corsMw = cors(corsOptions);

module.exports = corsMw;


//The cors middleware is configured with origin set to the domain of your frontend application and credentials set to true. This allows the frontend to make authenticated requests to the backend.

//The frontend must include credentials in requests to make authenticated requests. This can be done using credentials: 'include' in the fetch API or withCredentials: true in Axios.

//When handling CORS (Cross-Origin Resource Sharing) in a Node.js application, the credentials option is crucial for allowing the frontend to send cookies and authentication information along with the requests. This is particularly important for maintaining user sessions and performing authenticated requests.

// Importance of credentials: true
// The credentials: true option in the CORS configuration allows the browser to include credentials (such as cookies, authorization headers, or TLS client certificates) in requests to the server. This is necessary for scenarios where the frontend needs to authenticate users or maintain sessions across different domains.

// When credentials: true is Set:
// Session Handling: Cookies required for session management are included in the requests, allowing the server to recognize the user and maintain their session.
// Authentication: Authorization headers and other credentials are sent with the requests, enabling secure communication between the frontend and backend.
// Security: It ensures that sensitive information like cookies or tokens is correctly handled, making it possible to implement security features like CSRF protection.
// When credentials: true is Not Set:
// No Cookies: Cookies will not be sent with requests, making it impossible to maintain user sessions. The server will not recognize returning users, leading to issues with authentication and session management.
// No Authorization Headers: Any authorization headers included in requests will be ignored, making it difficult to secure the application and protect sensitive data.
// Failed Requests: Requests that depend on cookies or authentication information will fail, leading to a poor user experience and potentially making the application unusable for authenticated actions.