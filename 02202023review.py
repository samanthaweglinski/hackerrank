# zigzag    
def convert(s: str, numRows: int) -> str:
        rows = [''] * numRows
        step = 1
        pointer = 0
        
        for char in s:
            rows[pointer] += char
            
            if pointer == len(rows)-1:
                step = -1
            elif pointer <= 0:
                step = 1
            
                
            pointer += step
        
        return ''.join(rows)
     
    
# longest substring    
def lengthOfLongestSubstring(s):
    cur = dict()
    count = ans = 0

    for i, c in enumerate(s):
        if c in cur and count <= cur[c]:
            count = cur[c] + 1
        else:
            ans = max(ans, i - count + 1)

        cur[c] = i

    return ans
  
# get spam emails
def getSpamEmails(subjects, spam_words):
    spam_words = set(word.lower() for word in spam_words)
    ans = list()
    
    for email in subjects:
        count = sum(word.lower() in spam_words for word in email.split())            
        
        ans.append('spam' if count >= 2 else 'not_spam')
            
    return ans

# two line solution if youre feeling crazy
def getSpamEmails(subjects, spam_words):
    spam_words_lower = {word.lower() for word in spam_words}
    return ['spam' if sum(word.lower() in spam_words_lower for word in email.split()) >= 2 else 'not_spam' for email in subjects]
