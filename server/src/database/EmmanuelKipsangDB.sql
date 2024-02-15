-- Create Database
CREATE DATABASE social;
USE SocialNetworkDB;

-- Create User Table
CREATE TABLE tbl_user (
    UserID INT PRIMARY KEY,
    Username VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    TagName VARCHAR(50),
    Location VARCHAR(100)
);

SELECT * from tbl_user
DROP TABLE tbl_user




-- Create Post Table
CREATE TABLE Post (
    PostID INT PRIMARY KEY,
    UserID INT,
    Content TEXT,
    PostDate DATETIME,
    Likes INT,
    Comments INT,
    FOREIGN KEY (UserID) REFERENCES tbl_user(UserID)
);

DROP table Post




-- Create Comment Table
CREATE TABLE Comment (
    CommentID INT PRIMARY KEY,
    PostID INT,
    UserID INT,
    CommentDate DATETIME,
    Content TEXT,
    FOREIGN KEY (PostID) REFERENCES Post(PostID),
    FOREIGN KEY (UserID) REFERENCES tbl_user(UserID)
);

DROP TABLE Comment

-- Create Friendship Table
CREATE TABLE Friendship (
    FriendshipID INT PRIMARY KEY,
    User1ID INT,
    User2ID INT,
    FriendshipDate DATETIME,
    FOREIGN KEY (User1ID) REFERENCES tbl_user(UserID),
    FOREIGN KEY (User2ID) REFERENCES tbl_user(UserID)
);

DROP TABLE Friendship

-- Create Photo Table
CREATE TABLE Photo (
    PhotoID INT PRIMARY KEY,
    UserID INT,
    PhotoURL VARCHAR(255),
    UploadDate DATETIME,
    FOREIGN KEY (UserID) REFERENCES tbl_user(UserID)
);

DROP TABLE Photo

-- Create Group Table
CREATE TABLE tbl_group (
    GroupID INT PRIMARY KEY,
    GroupName VARCHAR(255),
    Description TEXT,
    CreatedDate DATETIME
);

DROP TABLE tbl_group

-- Create GroupMembers Table
CREATE TABLE GroupMembers (
    GroupID INT,
    MemberID INT,
    PRIMARY KEY (GroupID, MemberID),
    FOREIGN KEY (GroupID) REFERENCES tbl_group(GroupID),
    FOREIGN KEY (MemberID) REFERENCES tbl_user(UserID)
);


DROP TABLE GroupMembers

-- Create Event Table
CREATE TABLE Event (
    EventID INT PRIMARY KEY,
    EventName VARCHAR(255),
    Description TEXT,
    EventDate DATETIME,
    Location VARCHAR(100),
    EventPosterURL VARCHAR(255)
);

DROP table Event

-- Create EventAttendee Table
CREATE TABLE EventAttendee (
    EventID INT,
    AttendeeID INT,
    PRIMARY KEY (EventID, AttendeeID),
    FOREIGN KEY (EventID) REFERENCES Event(EventID),
    FOREIGN KEY (AttendeeID) REFERENCES tbl_user(UserID)
);

drop TABLE EventAttendee

-- Create Message Table
CREATE TABLE Message (
    MessageID INT PRIMARY KEY,
    SenderID INT,
    ReceiverID INT,
    MessageDate DATETIME,
    Content TEXT,
    FOREIGN KEY (SenderID) REFERENCES tbl_user(UserID),
    FOREIGN KEY (ReceiverID) REFERENCES tbl_user(UserID)
);

DROP TABLE Message

-- Insert Dummy Data (Example for User table)
-- Dummy data for User table
INSERT INTO tbl_user (UserID, Username, Email, Password, TagName, Location)
VALUES 
    (1, 'user1', 'user1@example.com', 'password1', 'tag1', 'Location 1'),
    (2, 'user2', 'user2@example.com', 'password2', 'tag2', 'Location 2'),
    (3, 'user3', 'user3@example.com', 'password3', 'tag3', 'Location 3');

-- Dummy data for Post table
INSERT INTO Post (PostID, UserID, Content, PostDate, Likes, Comments)
VALUES 
    (1, 1, 'Post content 1', GETDATE(), 10, 5),
    (2, 2, 'Post content 2', GETDATE(), 15, 8),
    (3, 3, 'Post content 3', GETDATE(), 20, 12);

-- Dummy data for Comment table
INSERT INTO Comment (CommentID, PostID, UserID, CommentDate, Content)
VALUES 
    (1, 1, 2, GETDATE(), 'Comment on post 1 by user 2'),
    (2, 2, 3, GETDATE(), 'Comment on post 2 by user 3'),
    (3, 3, 1, GETDATE(), 'Comment on post 3 by user 1');

-- Dummy data for Friendship table
INSERT INTO Friendship (FriendshipID, User1ID, User2ID, FriendshipDate)
VALUES 
    (1, 1, 2, GETDATE()),
    (2, 1, 3, GETDATE());

-- Dummy data for Photo table
INSERT INTO Photo (PhotoID, UserID, PhotoURL, UploadDate)
VALUES 
    (1, 1, 'url1', GETDATE()),
    (2, 2, 'url2', GETDATE()),
    (3, 3, 'url3', GETDATE());

-- Dummy data for Group table
INSERT INTO tbl_group (GroupID, GroupName, Description, CreatedDate)
VALUES 
    (1, 'Group 1', 'Description for Group 1', GETDATE()),
    (2, 'Group 2', 'Description for Group 2', GETDATE());

-- Dummy data for GroupMembers table
INSERT INTO GroupMembers (GroupID, MemberID)
VALUES 
    (1, 1),
    (1, 2),
    (2, 2),
    (2, 3);

-- Dummy data for Event table
INSERT INTO Event (EventID, EventName, Description, EventDate, Location, EventPosterURL)
VALUES 
    (1, 'Event 1', 'Description for Event 1', GETDATE(), 'Location 1', 'poster_url_1'),
    (2, 'Event 2', 'Description for Event 2', GETDATE(), 'Location 2', 'poster_url_2');

-- Dummy data for EventAttendee table
INSERT INTO EventAttendee (EventID, AttendeeID)
VALUES 
    (1, 1),
    (1, 2),
    (2, 2),
    (2, 3);

-- Dummy data for Message table
INSERT INTO Message (MessageID, SenderID, ReceiverID, MessageDate, Content)
VALUES 
    (1, 1, 2, GETDATE(), 'Message from user 1 to user 2'),
    (2, 2, 1, GETDATE(), 'Reply from user 2 to user 1'),
    (3, 3, 1, GETDATE(), 'Message from user 3 to user 1');
--------------------------------
-- QUESTION 1 Friday 2/2024 ASSESSMENT
--------------------------------

-- 1. Retrieve all posts with their comments and likes for a specific user

    SELECT Post.*, Comment.*
    FROM Post
    LEFT JOIN Comment ON Post.PostID = Comment.PostID
    WHERE Post.UserID = 1;




-- 2. Retrieve all friends of a user

    SELECT u.UserID, u.Username, u.Email, u.TagName, u.Location
    FROM tbl_user u
    INNER JOIN Friendship f ON u.UserID = 
        CASE 
            WHEN f.User1ID = 1 THEN f.User2ID
            ELSE f.User1ID
        END
    WHERE 1 IN (f.User1ID, f.User2ID);


-- 3. Retrieve all events attended by a specific user
    SELECT e.EventID, e.EventName, e.Description, e.EventDate, e.Location, e.EventPosterURL
    FROM Event e
    INNER JOIN EventAttendee ea ON e.EventID = ea.EventID
    WHERE ea.AttendeeID = 1;


-- 4. To display group members and their details for a certain group
    SELECT u.UserID, u.Username, u.Email, u.TagName, u.Location
    FROM tbl_user u
    INNER JOIN GroupMembers gm ON u.UserID = gm.MemberID
    WHERE gm.GroupID = 1;


-- 5. Retrieve all messages between two users
    SELECT *
    FROM Message
    WHERE (SenderID = 1 AND ReceiverID = 2)
    OR (SenderID = 2 AND ReceiverID = 1);


-- 6. To display event details and the details of their attendees
    SELECT e.EventID, e.EventName, e.Description, e.EventDate, e.Location, e.EventPosterURL,
       u.UserID AS AttendeeID, u.Username AS AttendeeUsername, u.Email AS AttendeeEmail,
       u.TagName AS AttendeeTagName, u.Location AS AttendeeLocation
    FROM Event e
    INNER JOIN EventAttendee ea ON e.EventID = ea.EventID
    INNER JOIN tbl_user u ON ea.AttendeeID = u.UserID;


-- 7. Retrieve all messages between two users
    SELECT *
    FROM Message
    WHERE (SenderID = 1 AND ReceiverID = 2)
    OR (SenderID = 2 AND ReceiverID = 1);








----------------
-- QUESTION 2 THIS WEEK'S ASSIGNMENT
----------------

----------------
--User Table:
----------------
-- Retrieve all users
    SELECT * FROM tbl_user

-- Retrieve user by UserID
     SELECT * FROM tbl_user
     WHERE UserID = 1;

-- Retrieve users in a specific location
     SELECT * FROM tbl_user
     WHERE Location = 'Location 1';

-- Update user information
    UPDATE tbl_user
    SET
        Username = 'Emmanuel Kipsang',
        Email = 'emmanuel@gmail.com',
        Password = '1234',
        TagName = 'Sanny',
        Location = 'Nyeri'
    WHERE UserID = 1


-- Delete a user
    DELETE FROM tbl_user
    WHERE UserID = 2

----------------
--Post Table:
----------------
-- Retrieve all posts
    select * from Post

-- Retrieve posts for a specific user
    select * from Post
    WHERE UserID = 1

-- Retrieve posts with more than 10 likes
    select * from Post
    WHERE Likes > 10

-- Update post content
    UPDATE Post
    SET Content = 'Wozza!!!'
    WHERE PostID = 1;


-- Delete a post
    DELETE from Post 
    WHERE PostID = 3

----------------
--Comment Table:
----------------
-- Retrieve all comments
    select * from Comment

-- Retrieve comments for a specific post
    SELECT * from Comment
    WHERE PostID = 1

-- Retrieve comments by a specific user
    SELECT * FROM Comment
    WHERE UserID = 1

-- Update comment content
    UPDATE Comment
    SET Content = 'Hapo sawa!'
    WHERE CommentID = 2;



-- Delete a comment
    DELETE from Comment
    WHERE CommentID = 2

-------------------
--Friendship Table:
-------------------
-- Retrieve all friendships
    select * from Friendship

-- Retrieve friendships for a specific user
    SELECT *
    FROM Friendship
    WHERE User1ID = 1 OR User2ID = 2;


-- Update friendship date
    UPDATE Friendship
    SET FriendshipDate = 'new_date'
    WHERE FriendshipID = 2;


-- Delete a friendship
    DELETE FROM Friendship
    WHERE FriendshipID = 2;


----------------
--Photo Table:
----------------
-- Retrieve all photos  
    SELECT * FROM Photo

-- Retrieve photos for a specific user
    SELECT *
    FROM Photo
    WHERE UserID = 1;


-- Update photo URL
    UPDATE Photo
    SET PhotoURL = 'new_photo_url'
    WHERE PhotoID = 1;


-- Delete a photo
    DELETE FROM Photo
    WHERE PhotoID = 2;


----------------
--Group Table:
----------------
-- Retrieve all groups
    SELECT * from tbl_group

-- Retrieve a group by GroupID
    SELECT * from tbl_group
    WHERE GroupID = 1

-- Update group information
    UPDATE tbl_group
    SET 
        GroupName = 'Teach2Give',
        Description = 'React Trainees',
        CreatedDate = 'new_date'
    WHERE GroupID = 1;



-- Delete a group
    DELETE FROM tbl_group
    WHERE GroupID = 3;


------------------------
--GroupMembers Table:
-------------------------
-- Retrieve all group members
    SELECT * FROM GroupMembers

-- Retrieve members of a specific group
    SELECT * from GroupMembers
    WHERE GroupID = 1;

-- Remove a member from a group
    DELETE FROM GroupMembers
    WHERE GroupID = 1 AND MemberID = 3;


----------------
--Event Table:
----------------
-- Retrieve all events
    SELECT * from Event

-- Retrieve events with a specific location
    SELECT * FROM Event
    WHERE Location = 'Location 1'

-- Update event information
    UPDATE Event
    SET 
        EventName = 'Birthday',
        Description = 'Party after Party',
        EventDate = 'new_date',
        Location = 'Nairobi',
        EventPosterURL = 'url'
    WHERE EventID = 3;


-- Delete an event
    DELETE FROM Event
    WHERE EventID = 2;


-------------------------
--EventAttendee Table:
-------------------------
-- Retrieve all event 
    select * from Event

-- Retrieve attendees for a specific event
    SELECT u.*
    FROM EventAttendee ea
    JOIN tbl_user u ON ea.AttendeeID = u.UserID
    WHERE ea.EventID = 1;



-- Remove an attendee from an event
    DELETE FROM EventAttendee
    WHERE EventID = 1 AND AttendeeID = 2;

---------------------
--Message Table:
---------------------
-- Retrieve all messages
    SELECT * FROM Message

-- Retrieve messages between two users
    SELECT *
    FROM Message
    WHERE (SenderID = 1 AND ReceiverID = 2)
    OR (SenderID = 2 AND ReceiverID = 1);


-- Update message content
    UPDATE Message
    SET Content = 'new_content'
    WHERE MessageID = 1;


-- Delete a message
    DELETE FROM Message
    WHERE MessageID = 2;

