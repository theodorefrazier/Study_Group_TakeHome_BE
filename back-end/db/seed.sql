\c groups;

INSERT INTO groups (name, city, state, events, is_free) VALUES
('Porsche 911 Fan Club', 'New York', 'NY',  false),
('Men Knit Too', 'Boston', 'MA',  true),
('Front End Developers of East Coast', 'Charlotte', 'NC', true),
('Cat fans 🐈‍⬛', 'South Orange', 'NJ', true),
('High Fashion Lovers Club', 'New York', 'NY', true);

INSERT INTO events (eventID, name) VALUES
(1, 'Upstate Porsche Race'),
(2, 'Sweater knitting class'),
(3, 'Learn React!'),
(4, 'ASPCA volunteering - Cat Visit Day!🐱'),
(5, 'Architect of Fashion: Gianfranco Ferre Appreciation Panel');
