/**
 * @file club_board/index.js
 * @info All the models related to creating messageboards in clubs.
 * We should never have done this.
 */
import Board from "./Board.js";
import Topic from "./Topic.js";
import Post from "./Post.js";
import PostReply from "./PostReply.js";
import Poll from "./Poll.js";
import PollItem from "./PollItem.js";
import Club from "../club/Club.js";
import ClubMember from "../club/ClubMember.js";

// TODO: Make sure these relationships are correct

// A club has many boards
Club.hasMany(Board,{
    foreignKey: 'club_id'
});
// A board belongs to a club
Board.belongsTo(Club,{
    foreignKey: 'club_id'
});
// A board was created by a club member
Board.belongsTo(ClubMember,{
    foreignKey: 'created_by'
});
// TODO: A club can be moderated by many ClubMembers who are moderators

// A board has many topics
Board.hasMany(Topic,{
    foreignKey: 'board_id'
});
// A topic belongs to one board
Topic.belongsTo(Board,{
    foreignKey: 'board_id'
});
// A topic has many posts
Topic.hasMany(Post,{
    foreignKey: 'post_id' 
});
// A topic is started by a club member
Topic.hasOne(ClubMember,{
    foreignKey: 'created_by'
});

// A topic can have a poll
Topic.hasOne(Poll,{
    foreignKey: 'poll_id'
});
// A poll belongs to a topic
Poll.belongsTo(Topic,{
    foreignKey: 'topic_id'
});
// A club member creates a poll
Poll.belongsTo(ClubMember,{
    foreignKey: 'created_by'
});
// A poll has several choices
Poll.hasMany(PollItem,{
    foreignKey: 'poll_id'
});

// A post is part of a topic
Post.belongsTo(Topic,{
    foreignKey: 'topic_id'
});
// A post is written by a Club Member
Post.belongsTo(ClubMember,{
    foreignKey: 'created_by'
});

// A post can have many replies
Post.hasMany(PostReply,{
    foreignKey: 'post_id'
});

// A post reply is in response to another post
PostReply.belongsTo(Post,{
    foreignKey: 'reply_id'
});

export default {Board, Topic, Post, PostReply, Poll, PollItem}