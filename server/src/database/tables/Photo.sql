CREATE TABLE Photo (
    PhotoID INT PRIMARY KEY,
    UserID INT,
    PhotoURL VARCHAR(255),
    UploadDate DATETIME,
    FOREIGN KEY (UserID) REFERENCES tbl_user(UserID)
);