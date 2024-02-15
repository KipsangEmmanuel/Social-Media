CREATE TABLE Message (
    MessageID INT PRIMARY KEY,
    SenderID INT,
    ReceiverID INT,
    MessageDate DATETIME,
    Content TEXT,
    FOREIGN KEY (SenderID) REFERENCES tbl_user(UserID),
    FOREIGN KEY (ReceiverID) REFERENCES tbl_user(UserID)
);