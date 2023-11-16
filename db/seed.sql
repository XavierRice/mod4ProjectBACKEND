
\c studybuddy_dev

INSERT INTO users ( username, name, email, password, membership, profilePic)
VALUES
('user1', 'Professor X', 'user1@anEmail.com','passwordOne1', true, 'https://tinyurl.com/3ed239xn' ),
('user2', 'Mister Rogers', 'user2@anotherEmail.com', 'passwordTwo2', false, 'https://tinyurl.com/p7cfp5zy' );

INSERT INTO notes (user_id, subject_name, subject_id, title, videos, content, is_favorite)
VALUES
(1, 'React', 1,  'React Basics: components, state and props', ARRAY['https://www.youtube.com/watch?v=omphzcP6wf4'], 'github link', true),
(2, 'Higher Order Functions', 2, 'Functions: Cantrips and Useful Spells', ARRAY['https://www.youtube.com/results?search_query=react+prerequisites+js+higher+order+functions+javascript'], 'https://docs.google.com/document/d/1dsv2S1YGDP9plqR7UiOUkNuvp3y7lFsdtf4LWWIjLgs/edit', false),
(1, 'Figma', 3, 'Figma Introduction: Beginner Collection', ARRAY['https://www.youtube.com/watch?v=Cx2dkpBxst8&list=PLXDU_eVOJTx7QHLShNqIXL1Cgbxj7HlN4'], 'https://docs.google.com/document/d/1X3kA9GPCDfHL-eQwTml7Ju9RyMreVAKy-KeD6qdpitw/edit', true),
(1, 'React', 1, 'React Hooks: There is more that use state?', ARRAY['https://www.youtube.com/watch?v=TNhaISOUy6Q'], 'https://docs.google.com/document/d/14MzdlZjcUq_1owCSotPfPgl2TVMALF1Anp6qMpV_wLk/edit', false);