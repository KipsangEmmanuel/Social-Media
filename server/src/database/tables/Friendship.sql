CREATE TABLE Friendship (
    FriendshipID INT PRIMARY KEY,
    User1ID INT,
    User2ID INT,
    FriendshipDate DATETIME,
    FOREIGN KEY (User1ID) REFERENCES tbl_user(UserID),
    FOREIGN KEY (User2ID) REFERENCES tbl_user(UserID)
);