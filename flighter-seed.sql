-- both test users have the password "password"

INSERT INTO users (username, password, first_name, last_name, email, birthday, is_admin)
VALUES ('ben',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Ben',
        'Jacobson',
        'jacobson.ben11@gmail.com',
        '1993-02-11',
        TRUE)
      