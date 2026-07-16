\# Full-Stack MERN E-Commerce Application



A full-stack e-commerce platform built with React, Node.js, Express, and MongoDB. The application is deployed on AWS using S3, CloudFront, EC2, Nginx, and PM2, with automated deployments through GitHub Actions.



\## Live Application



\[View the live application](https://d3da9y7horw4rv.cloudfront.net)



\## Technology Stack



\### Frontend



\- React

\- Vite

\- React Router

\- Axios

\- Tailwind CSS



\### Backend



\- Node.js

\- Express.js

\- MongoDB Atlas

\- Mongoose

\- JWT authentication

\- Stripe

\- Cloudinary



\### AWS and DevOps



\- Amazon S3

\- Amazon CloudFront

\- Amazon EC2

\- Nginx

\- PM2

\- GitHub Actions

\- IAM



\## AWS Architecture



```text

Users

&#x20; |

&#x20; v

Amazon CloudFront

&#x20; |

&#x20; |-- Default route /\* ----------------> Amazon S3

&#x20; |                                      React frontend

&#x20; |

&#x20; |-- API route /api/\* ----------------> Amazon EC2

&#x20;                                          |

&#x20;                                          v

&#x20;                                        Nginx

&#x20;                                          |

&#x20;                                          v

&#x20;                                    Node.js / Express

&#x20;                                          |

&#x20;                     +--------------------+--------------------+

&#x20;                     |                                         |

&#x20;                     v                                         v

&#x20;               MongoDB Atlas                             Cloudinary / Stripe







###### **Deployment Architecture**



CloudFront acts as the public HTTPS entry point for the application.



* Frontend requests are routed to the private Amazon S3 bucket.
* Requests beginning with /api/ are routed to the EC2 backend.
* Nginx reverse proxies API traffic to the Express application on port 4000.
* PM2 keeps the Node.js server running and restarts it after failures or deployments.
* MongoDB Atlas stores application data.
* Cloudinary stores product images.
* GitHub Actions automatically deploys frontend and backend changes.
* CI/CD Pipelines
* Frontend Deployment



When frontend code is pushed to main, GitHub Actions:



1.Installs dependencies.

2.Builds the React application.

3.Uploads the build files to Amazon S3.

4.Invalidates the CloudFront cache.

5.Backend Deployment



When backend code is pushed to main, GitHub Actions:



1.Connects to EC2 through SSH.

2.Pulls the newest source code.

3.Installs production dependencies.

4.Restarts the Express server with PM2.

5.Performs an API health check.





###### **Local Development**



Frontend

cd frontend

npm install

npm run dev



Backend

cd backend

npm install

npm start



Create a local .env file inside the backend directory containing the required environment variables.



###### **Security**



Sensitive credentials are stored in environment variables and GitHub repository secrets. Environment files are excluded from Git source control.

