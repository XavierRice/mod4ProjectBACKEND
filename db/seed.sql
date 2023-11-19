
\c studybuddy_dev

INSERT INTO users ( username, name, email, password, membership, profilePic)
VALUES
('user1', 'Professor X', 'user1@anEmail.com','passwordOne1', true, 'Professor' ),
('user2', 'Mister Rogers', 'user2@anotherEmail.com', 'passwordTwo2', false, 'User2' );

INSERT INTO notes (user_id, subject_name, title, videos, content, is_favorite)
VALUES
 (1, 'JavaScript', 'Introduction to JavaScript Basics', 'https://www.youtube.com/watch?v=N8ap4k_1QEQ', 'This video covers fundamental concepts in JavaScript such as variables, data types, and basic syntax.', true),
  (2, 'JavaScript', 'Intermediate JavaScript Concepts', 'https://www.youtube.com/watch?v=BwyFLRVYbvU', 'This video explores intermediate JavaScript concepts like functions, closures, and higher-order functions.', false),
  (1, 'HTML', 'HTML5 Fundamentals', 'https://www.youtube.com/watch?v=salY_Sm6mv4', 'An introduction to HTML5 covering its new features and improvements over previous versions of HTML.', true),
  (1, 'CSS', 'CSS Layout Techniques', 'https://www.youtube.com/watch?v=1PnVor36_40', 'Learn various CSS layout techniques including Flexbox and Grid for building responsive web layouts.', false),
  (2, 'Python', 'Python Basics for Beginners', 'https://www.youtube.com/watch?v=kqtD5dpn9C8', 'Introduction to Python programming covering basic syntax, variables, and control structures.', true),
  (1, 'React', 'Getting Started with React', 'https://www.youtube.com/watch?v=O6P86uwfdR0&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h', 'A beginner-friendly guide to getting started with React, a popular JavaScript library for building user interfaces.', false),
  (2, 'Node.js', 'Node.js Essentials', 'https://www.youtube.com/watch?v=6g0qAx_4CXM&list=PLpc_YvcwbxaRl8WOTamrAD78jnsuNqM1C', 'Explore the fundamentals of Node.js, an event-driven JavaScript runtime, for building scalable network applications.', true);