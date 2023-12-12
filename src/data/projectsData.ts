import dlsPng from "../Assets/preview.png"
import dlsGif from "../Assets/dls.gif"
import landingPng from "../Assets/landingPreview.png"
import landPrev from "../Assets/landPrev.gif"
import blogGif from "../Assets/blog.gif"
import blogPng from "../Assets/blog.png"
import videoPng from '../Assets/videoChat.png';
import videoGif from '../Assets/videoChat.gif';

export type ProjectInfo = {
    id: number,
    name: string,
    completedYear: number,
    languages: string,
    imgURL: string,
    gifURL: string,
    link: string,
    description: string,
    body: string,
}

export const projects: ProjectInfo[] = [
    {
        id: 2,
        name: "Data Labelling Software",
        completedYear: 2023,
        languages: "React, Javascript, Python, AWS S3, Boto3, mySQL",
        imgURL: dlsPng,
        gifURL: dlsGif,
        link: 'https://github.com/alegbeleye/Data_Labelling_software.git',
        description: 'A software to label images, and properly organize and prepare them for training on machine learning Models.',
        body: `
        <h2>Context</h2>
        <p> Over the summer of 2023 is tasked myself into creating a Data-Labelling software that machine learning engineers could use to better train their models with more precise information. I was able to do so using <b>React</b> for the frontend and <b>python (Django)</b> for the backend. The app takes advantage of the <b>pexels</b> api for retreiving hundreds of images specific to the users search on what he wants to label. I was sure to store users images and data in <b>AWS S3</b> buckets specific to thier given ID, in order to make them easily accessebile. I managed and stored users sign in details with Djangos in-built <b>SQLite</b> database. <br/><br/> The application also features a simple file manager to help users navigate and locate files they have worked on, and make changes accordingly.</p>
        <br>
        <hr>
        <br>
        <h2>Technical Analysis</h2>
        <h3>Challenge 1: Implementing Rectangular Croppers in ReactJS</h3>
        <p>
        One of the main features of the labeling tool was to allow users to create rectangular croppers to label images. The challenge here was to ensure that the cropper was intuitive and responsive, providing pixel-perfect accuracy for the labeling process.
        </p>
        <h3>Solution:</h3>
        <p>
        I utilized a React library specifically designed for image cropping and customized it to fit our use case. I focused on enhancing the user interface to allow for easy manipulation of the crop area, including drag-and-drop resizing and keyboard accessibility for precision. Additionally, ensuring that the coordinates of the cropped area were accurately recorded required a deep dive into the library's documentation and some trial and error with the state management in React.
        </p>
        <h3>Challenge 2: Building a File Manager for AWS S3</h3>
        <p>
        Developing a file manager to handle the retrieval of labeled images from AWS S3 posed multiple challenges, primarily related to efficiently navigating and displaying a potentially large dataset of images and corresponding labels.
        </p>

        <h3>Solution:</h3>
        <p>
        To overcome this, I implemented a virtualized list to render only the items in view, significantly improving the performance. For navigation, I built a directory-like structure within S3 using metadata to simulate folders. To manage state and cache efficiently, I employed AWS SDK's promise-based operations and integrated them with React's context API, which made the state accessible throughout the application without prop drilling.
        </p>
        <h3>Challenge 3: Handling Large Datasets with SQLite</h3>
        <p>
        SQLite is a great lightweight database, but it struggles with concurrency and large datasets, which is often the case in data labeling applications where many records are created and need to be queried efficiently.
        </p>
        <h3>Solution:</h3>
        <p>
        I optimized SQLite usage by batching insert operations and used transactional queries to prevent lock contention. For fast read operations, I denormalized the database schema and used indexed views to speed up common queries. In anticipation of future scaling issues, I designed the backend to be easily portable to a more robust database system like PostgreSQL.
        </p>
        
        <h3>Challenge 4: Integrating with the Pexels API</h3>
        <p>
        Using the Pexels API provided its own set of challenges, including rate limits and handling API response data in an effective way that would suit our labeling tool's data structure.
        </p>
        <h3>Solution:</h3>
        <p>
        I managed the rate limits by implementing caching strategies and a queuing system for API calls, thus avoiding hitting the rate limit and getting temporarily banned. For the API response data, I created an adapter layer that transformed the Pexels data into the format expected by our app, allowing for smoother integration and less complexity in the frontend components.
        </p>
        <h3>Challenge 5: Ensuring Accurate and Secure Communication Between ReactJS and Django</h3>
        <p>
        Integrating ReactJS with Django for backend operations required secure and reliable API endpoints, especially for operations that modified the labeled data.
        </p>
        <h3>Solution:</h3>
        <p>
        I made use of Django Rest Framework to create RESTful endpoints, ensuring they were well-documented and secure. I implemented token-based authentication to secure these endpoints and handled CORS properly to enable the ReactJS frontend to communicate with the Django backend without security warnings.
        </p>
        <hr>
        <br>
        <p>
        The development of the data labeling software with a ReactJS frontend, Django backend, SQLite database, AWS S3 for storage, and Pexels API integration presented multiple challenges. These ranged from frontend user interface design to backend performance and third-party API limitations. Through a combination of third-party libraries, careful architectural decisions, and performance optimizations, each challenge was systematically addressed, resulting in a functional and efficient data labeling tool and file manager. 
        </p>
        ` 
    },

    {
        id: 1,
        name: "Open Blogging Application",
        completedYear: 2023,
        languages: "React, Javascript, Python, AWS S3, Boto3, mySQL",
        imgURL: blogPng,
        gifURL: blogGif,
        link: 'https://github.com/alegbeleye/open-blog.git',
        description: 'An application where users can drop by and post stories of their choice, without the need to sign in or create an account.',
        body: `
                <h2>Context</h2>
                <p>Using React, Aws-S3 and python Django, I developed a blog application where users can stop by to write a story of their choice with the option to include their real name or an alias name. For the image upload, I stored the the thumbnails in an AWS S3 bucket which could then be accessible anytime through a unique ID assigned to the image on upload. <br/> <br/> I implemented a simple algoithm that returned the data specific to its category. Categories included - 'New Post', 'Popular Posts', etc. by doing this, users who upload a story could immediately see what they uploaded in the home page without having to use a search bar. </p>,
                <br>
                <hr>
                <br>
                <h2>Technical Analysis<h2>
                <h3>Challenge 1: Storing Images on AWS</h3>
                <p>
                Initially, integrating AWS services for image storage proved to be a complex task. The primary issues faced included understanding AWS S3 bucket permissions, configuring the AWS SDK correctly within the app, and handling the upload and retrieval process efficiently.
                </p>
        
                <h3>Solution:</h3>
                <p>To overcome these issues, I dedicated time to reading the AWS documentation, which provided a clear understanding of the service. After setting up the S3 bucket with the correct permissions to ensure both privacy and accessibility, I used the AWS SDK to integrate image upload functionality directly from the app. By implementing presigned URLs, I managed to create a secure yet efficient way to handle image uploads and downloads without exposing sensitive data.<p>
                <h3>Challenge 2: Saving User Data with SQLite</h3>
                <p>
                Using SQLite as a database solution presented challenges, particularly in ensuring data integrity and managing concurrent access as the user base grew. The issues were compounded by the limitations of SQLite in handling high transaction volumes and complex queries.
                </p>
                <h3>Solution:</h3>
                <p>
                To tackle these problems, I first optimized the database schema by normalizing the tables and indexing the frequently queried columns to enhance performance. Then, I implemented a robust data caching mechanism to reduce the number of read operations. For write operations, I introduced a queue system that serialized the database transactions, thereby avoiding conflicts and maintaining data integrity. Moreover, I utilized SQLite's Write-Ahead Logging (WAL) mode to allow for concurrent reads and writes.
                </p>
                <hr>
                <br>
                <p>
                These challenges, while significant, served as valuable learning experiences. They pushed me to explore AWS services in-depth, to delve into the intricacies of database management, and to employ creative problem-solving techniques. The result was a blogging app that was not only functional but also robust, scalable, and capable of delivering a pleasant user experience. Through persistence and continuous learning, the obstacles were transformed into stepping stones that led to the successful deployment of the app.
                </p>
                `
            }, 
    {
        id: 3,
        name: "P2P Video Chat Application",
        completedYear: 2023,
        languages: "React, Typescript, socketIO, ExpressJS, Simple-Peer",
        imgURL: videoPng,
        gifURL: videoGif,
        link: 'https://github.com/alegbeleye/Video-Chat-Software.git',
        description: 'A application that allows users to host one-on-one video meetings on the web, using websockets and Typescript.',
        body: "<p>Before embarking on this project, i aimed to develop an easy to use interface that would require little to get started using the application. I decided to take to figma and draw out a prototyope of the application before developing the software. <br/> After prototyping i had a good idea on what the app should look like, so i began developing the software, with the prototype as a reference. <br/>For the development of this program, I made use of the <b>SocketIO</b> library to send signals, and allow the client side interact with the server seamlessly (Mostly for sending chat messages). For the video and audio end, I used the <b>SimplePeer</b> to handle the transfer of audio and video signals, as well as managing the ICE candidates. <br/><br/> The applicaiton was developed using Typescript, React and Node/ExpressJS."
    },
    {
        id: 4,
        name: "Real Estate Landing Page",
        completedYear: 2023,
        languages: "React, Typescript, HTML, CSS",
        imgURL: landingPng,
        gifURL: landPrev,
        link: 'https://github.com/alegbeleye/Real-Estate-Landing-Page.git',
        description: 'A React reacreation of a real estate user interface, displaying several views of the property to be sold.',
        body: "<p>During the summer of 2023, I took off to dribbble to find captivating user interfaces, and see if i could bring the designs to life through code. I stumbled upon a Real Estate landing page which caught my attention and decided to develop a live working version using React and Typescript. At the time I had just begun learning typescript which was more motivation to complete the project."
    },
]