const profanityChar = "*";
const profanityWord = [ "fuck", "shit", "ass", "damn", "bitch", "bastard", "dammit" ];

const walker = document.createTreeWalker(
    document.getRootNode(), 
    NodeFilter.SHOW_TEXT,
    null,
    false
);

let node;
while (node = walker.nextNode()) {
    for (let x=0; x < profanityWord.length; ++x) {
        let currWord = profanityWord[x];

        if (node.nodeValue.includes(currWord)) {

            let replaceWord = currWord[0] + "";
            for (let x=1; x < currWord.length; ++x) {
                replaceWord += profanityChar;
            }

            node.nodeValue = node.nodeValue.replace(new RegExp(currWord, 'g'), replaceWord);
        }
    }
}
