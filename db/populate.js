const populate = `
    CREATE TABLE IF NOT EXISTS stock (StockID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, Name VARCHAR(25), System CHAR(3), Quantity INT, Price DEC(4,2));

    CREATE TABLE IF NOT EXISTS game_details (GameID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, Developer VARCHAR(25), Publisher VARCHAR(25), Genre VARCHAR(25), ReleaseYear INT, StockID INT, CONSTRAINT fk_stock FOREIGN KEY (StockID) REFERENCES stock(StockID));

    INSERT INTO stock (Name, System, Quantity, Price) 
    VALUES ('Final Fantasy 7', 'PS1', 15, 69.99), 
           ('Zelda OOT', 'N64', 12, 69.99), 
           ('Road Rash', '3DO', 8, 49.99);

    INSERT INTO game_details (Developer, Publisher, Genre, ReleaseYear, StockID) 
    VALUES ('Monkey Do Productions', 'Electonic Arts', 'Racing', 1994, 3),
           ('SquareSoft', 'SquareSoft', 'RPG', 1997, 1),
           ('Nintendo', 'Nintendo', 'Action-Adventure', 1998, 2);
`;
