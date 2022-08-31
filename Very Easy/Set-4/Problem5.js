/**
    Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed.
     This is calculated by subtracting the number of downvotes from upvotes.
    
    Examples =>
        getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
        getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31
        getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0
 */

function getVoteCount(v) {
  let votes = v.upvots - v.downvots;
  return votes;
}

let result = getVoteCount({ upvots: 132, downvots: 132 });
console.log("Votes count should be displayed", result);
