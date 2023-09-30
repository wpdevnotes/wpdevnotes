document.addEventListener("DOMContentLoaded", function () {
    // Get all the <code> elements inside <pre>
    const codeBlocks = document.querySelectorAll("pre > code");

    codeBlocks.forEach(function (block) {
        // Create a copy button
        const copyButton = document.createElement("button");
        copyButton.innerText = "Copy";
        copyButton.addEventListener("click", function () {
            copyToClipboard(block.innerText, copyButton);
        });

        // Add the copy button to the parent <pre>
        block.parentNode.appendChild(copyButton);
    });
});

function copyToClipboard(text, btn) {
    const tempTextArea = document.createElement("textarea");
    document.body.appendChild(tempTextArea);
    tempTextArea.value = text;
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);

    // Update button text and revert after 3 seconds
    btn.innerText = "Copied!";
    setTimeout(() => {
        btn.innerText = "Copy";
    }, 2000);
}
