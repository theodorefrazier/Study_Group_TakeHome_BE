DROP DATABASE IF EXISTS groups_dev;
CREATE DATABASE groups_dev;

\c groups_dev

CREATE TABLE groups (
    id SERIAL PRIMARY KEY,
    name TEXT,
    city TEXT,
    state TEXT,
    events TEXT,  
)