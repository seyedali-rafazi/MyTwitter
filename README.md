## Project Overview
### see [Live](https://mytwitter-98j2.onrender.com)

This repository contains code for a Twitter-like social media platform built with React and Next.js. Below is an overview of the main components and features implemented in this project.

### technology
The provided code is primarily written using React, a popular JavaScript library for building user interfaces. Here's a breakdown of the technologies and libraries used:

1. **React**: The core library for building user interfaces in JavaScript.

2. **Next.js**: Next.js is a React framework used for server-side rendering (SSR), static site generation (SSG), and other advanced features like routing and API routes. It simplifies the setup and configuration of React applications.

3. **react-icons**: A library providing a collection of popular icons as React components, used for displaying icons throughout the application.

4. **date-fns**: A library for manipulating dates and formatting them. It's used here for formatting the creation date of a user.

5. **axios**: A promise-based HTTP client for making AJAX requests, used for handling API requests in the application.

6. **react-hot-toast**: A lightweight notification library for React applications, used for displaying toast notifications.

7. **react-dropzone**: A React component for handling file uploads via drag-and-drop or file selection.

8. **tailwindcss**: For style

These technologies work together to create a robust and efficient user interface, handling state management, data fetching, routing, and other essential functionalities of a modern web application.

### Components

1. **FollowBar**
   - This component displays a list of users to follow. It fetches user data using the `useUsers` hook and renders a list of avatars with user information.

2. **Sidebar**
   - The Sidebar component provides navigation links and actions such as Home, Notifications, Profile, and Logout. It also includes a Tweet button for creating new posts.

3. **SidebarItem**
   - SidebarItem is a reusable component used in the Sidebar to render individual navigation items.

4. **SidebarLogo**
   - SidebarLogo displays the application logo (Twitter icon) and handles navigation to the home page.

5. **SidebarTweetButton**
   - This component renders a Tweet button that opens a modal for composing new posts.

6. **EditModal**
   - EditModal allows users to edit their profile information including profile image, cover image, name, username, and bio.

7. **LoginModal**
   - LoginModal provides a login form for users to sign in. It includes functionality for toggling between login and registration forms.

8. **RegisterModal**
   - RegisterModal allows new users to register for an account. It includes form fields for email, name, username, and password.

9. **CommentFeed**
   - CommentFeed renders a list of comments associated with a post.

10. **CommentItem**
    - CommentItem displays individual comments within the CommentFeed.

11. **PostFeed**
    - PostFeed renders a list of posts either for the current user or a specific user.

12. **PostItem**
    - PostItem displays individual posts within the PostFeed. It includes features for liking posts and viewing comments.
   
  The provided code consists of several React components and utility functions. Here's a breakdown of the components and their functionalities:

13. **UserBio**: This component displays user information such as name, username, bio, joined date, following count, and followers count. It also includes a button to follow/unfollow a user and an edit button for the current user's profile.

14. **UserHero**: This component displays the cover image and avatar of a user.

15. **Avatar**: This component displays the avatar of a user. It is also clickable and redirects to the user's profile page.

16. **Button**: A customizable button component used throughout the application for various actions like following, editing, etc.

17. **Form**: This component represents a form used for creating posts or comments. It includes text areas for inputting text and buttons for submitting the form.

18. **Header**: A header component used to display a title and, optionally, a back button.

19. **ImageUpload**: A component for uploading images. It allows users to drop an image file or click to select one.

20. **Input**: A reusable input component for text input fields.

21. **Layout**: This component represents the overall layout of the application, including a sidebar, main content area, and follow bar.

22. **Modal**: A reusable modal component used for displaying pop-up dialogs. It includes a title, body content, and footer actions.

23. **NotificationsFeed**: This component displays a list of notifications for the current user. If there are no notifications, it shows a message indicating that there are none.

Each component is designed to handle specific aspects of the user interface and application logic, promoting modularity and reusability.

### Hooks

- **useUsers**: Fetches a list of users for the FollowBar component.
- **useCurrentUser**: Retrieves information about the currently logged-in user.
- **useLoginModal**: Manages the state and functionality of the login modal.
- **useRegisterModal**: Manages the state and functionality of the registration modal.
- **useLike**: Handles liking/unliking posts.
- **usePosts**: Fetches a list of posts, optionally filtered by user ID.
- **useEditModal**: Manages the state and functionality of the profile edit modal.
- **useUser**: Fetches information about a specific user.

### Other Libraries

- **axios**: Used for making HTTP requests.
- **react-icons**: Provides a collection of icons used throughout the application.
- **react-hot-toast**: Displays toast notifications for user feedback.

### How to Run

To run this project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

Make sure you have Node.js and npm installed on your machine.

Feel free to explore and modify the code to suit your needs. If you have any questions or need further assistance, please don't hesitate to reach out. Happy coding!
