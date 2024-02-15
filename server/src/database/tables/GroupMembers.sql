CREATE TABLE GroupMembers (
    GroupID INT,
    MemberID INT,
    PRIMARY KEY (GroupID, MemberID),
    FOREIGN KEY (GroupID) REFERENCES tbl_group(GroupID),
    FOREIGN KEY (MemberID) REFERENCES tbl_user(UserID)
);