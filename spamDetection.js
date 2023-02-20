/*
 * Complete the 'getSpamEmails' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY subjects
 *  2. STRING_ARRAY spam_words
 */

// input: two arrays of strings
// output: array of strings "spam" or "not_spam" for each subject element
// not case sensitive so must .tolowercase or .touppercase before comparing
// create empty array to hold our answer
// need for loop to loop through the subjects
// once we have our first subject, we will want to split the string into an array and store into a new variable
// that way, we can run another for loop looping through each element in this new array

// in this for loop, we will take each word and see if it is a spam word (.includes)
// if it is, we will increase the counter 
// before ending loop, we will check to see if counter is >== 2. if it is, we push spam into answer array, if not we continue with loop
// once this subject has been completely looped through we will push not_spam to answer array
// return ans array

// spam_words contains words we will be looking for in our subjects


function getSpamEmails(subjects, spam_words) {
    // Write your code here
    const ans = []
    const spamWordsString = spam_words.join(" ").toLowerCase()
    const spamWordsArray = spamWordsString.split(" ")
    
    for (let i = 0; i < subjects.length; i++) { // looping through subjects
        let subjectArr = subjects[i].split(" ").join(" ").toLowerCase().split(" ")
        let count = 0
        
        for (let j = 0; j < subjectArr.length; j++) { // looping through words in a subject
            let word = subjectArr[j]
            
            if (spamWordsArray.includes(word) == true) {
                count += 1
            }
        }
        
        if (count >= 2) ans.push("spam")
        else ans.push("not_spam")
    }
    
    return ans
}

// a/a hackerrank walkthrough


