const populate = `
    CREATE TABLE stock (StockID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, Name VARCHAR(50), Console CHAR(3), Quantity INT, Price DEC(4,2));

CREATE TABLE game_details (GameID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, Developer CHAR(50), Publisher CHAR(50), Genre CHAR(50), ReleaseYear INT, StockID INT, CONSTRAINT fk_stock FOREIGN KEY (StockID) REFERENCES stock(StockID));

INSERT INTO stock (Name, Console, Quantity, Price) 
    VALUES ('Final Fantasy 7', 'PS1', 15, 69.99), 
           ('Zelda OOT', 'N64', 12, 69.99), 
           ('Road Rash', '3DO', 8, 49.99);

INSERT INTO game_details (Developer, Publisher, Genre, ReleaseYear, StockID) 
    VALUES ('Monkey Do Productions', 'Electonic Arts', 'Racing', 1994, 3),
           ('SquareSoft', 'SquareSoft', 'RPG', 1997, 1),
           ('Nintendo', 'Nintendo', 'Action-Adventure', 1998, 2);
`;
