function wordWrap(text, limit) {
    if (text.length <= limit) return text;
    
    var wrappedText = text.substring(0, limit) + "\n";
    var rest = text.substring(limit);
    return wrappedText + wordWrap(rest, limit);
}

module.exports = wordWrap
