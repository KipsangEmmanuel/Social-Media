CREATE TABLE tbl_user (
    user_id VARCHAR(255) PRIMARY KEY,
    Username VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    TagName VARCHAR(50),
    Location VARCHAR(100)
);

DROP TABLE tbl_user

select * from tbl_user