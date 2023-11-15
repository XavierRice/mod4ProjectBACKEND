DROP DATABASE IF EXISTS studybuddy_dev;
CREATE DATABASE studybuddy_dev;

\c studybuddy_dev;

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(25) NOT NULL,
name TEXT DEFAULT NULL,
email VARCHAR(100) NOT NULL,
password VARCHAR(100) NOT NULL,
membership BOOLEAN NOT NULL,
profilePic TEXT DEFAULT NULL
);

DROP TABLE IF EXISTS subjects;

CREATE TABLE subjects (
    id SERIAL PRIMARY KEY,
    subject_name TEXT UNIQUE,
    membership BOOLEAN NOT NULL
);

DROP TABLE IF EXISTS notes;

CREATE TABLE notes(
note_id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users (id),
subject_name TEXT REFERENCES subjects (subject_name) ,
title TEXT NOT NULL,
videos TEXT[],
content TEXT,
subject_id INTEGER REFERENCES subjects (id)
);