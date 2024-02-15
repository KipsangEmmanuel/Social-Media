CREATE TABLE Comment (
    CommentID INT PRIMARY KEY,
    PostID INT,
    UserID INT,
    CommentDate DATETIME,
    Content TEXT,
    FOREIGN KEY (PostID) REFERENCES Post(PostID),
    FOREIGN KEY (UserID) REFERENCES tbl_user(UserID)
);