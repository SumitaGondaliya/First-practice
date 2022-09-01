/**
    --- Find the Index (Part 1) ---

    Create a function that finds the index of a given item.

    Examples =>
        findIndex([1, 2, 3, 4, 5], 3) ➞ 2
        findIndex([1, 2, 3, 4, 5], 1) ➞ 0
        findIndex([1, 2, 3, 4, 5], 0) ➞ -1
    
    Notes =>
        - Return -1 if the item is not found.

    Hints =>
        - You can use the built-in Array.includes() method to check if an array contains a particular item.
 */

        function findIndex(array,item)
        {
            return array.includes(item)? array.findIndex(array,item) : "-1";
            
        }
        let result=findIndex([1,2,3,4,6],3) 
        console.log("Item is available",result)