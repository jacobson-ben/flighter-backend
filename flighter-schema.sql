CREATE TABLE users (
  username VARCHAR(25) PRIMARY KEY,
  password TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL
    CHECK (position('@' IN email) > 1),
  birthday date,
  is_admin BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE trips (
  trip_id SERIAL PRIMARY KEY,
  username VARCHAR(25) NOT NULL REFERENCES users
);

CREATE TABLE flights (
  trip_id SERIAL NOT NULL
    REFERENCES trips ON DELETE CASCADE,
  flight_number VARCHAR(25) NOT NULL,
  origin VARCHAR(3),
  destination VARCHAR(3),
  depart_at TIMESTAMP,
  arrive_at TIMESTAMP,
  aisle INTEGER,
  seat VARCHAR(1),
  PRIMARY KEY (trip_id, flight_number)
);

