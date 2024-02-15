CREATE TABLE Event (
    EventID INT PRIMARY KEY,
    EventName VARCHAR(255),
    Description TEXT,
    EventDate DATETIME,
    Location VARCHAR(100),
    EventPosterURL VARCHAR(255)
);