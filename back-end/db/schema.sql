DROP DATABASE IF EXISTS groups;
CREATE DATABASE groups;

\c groups

CREATE TABLE groups (
    id SERIAL PRIMARY KEY,
    name TEXT,
    city TEXT,
    state TEXT,
    events TEXT,  
    is_free boolean
)