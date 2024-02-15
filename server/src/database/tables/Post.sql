CREATE TABLE Post (
    PostID INT PRIMARY KEY,
    UserID INT,
    Content TEXT,
    PostDate DATETIME,
    Likes INT,
    Comments INT,
    FOREIGN KEY (UserID) REFERENCES tbl_user(UserID)
);