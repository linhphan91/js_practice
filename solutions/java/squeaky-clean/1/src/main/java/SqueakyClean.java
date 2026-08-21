class SqueakyClean {
    static String clean(String identifier) {
        char[] strArr = identifier.toCharArray();
        String result = "";
        boolean upper = false;

        for (char ch: strArr) {
            if (ch == ' '){
               result += "_";
            }
            else if (ch == '-') {
               upper = true;
            }
            else if (upper){
                result += Character.toUpperCase(ch);
                upper = false;
            }
                else if (!Character.isLetter(ch)){
                    switch(ch) {
                        case '4': result += "a";
                            break;
                        case '3': result += "e";
                            break;
                        case '0': result += "o";
                            break;
                        case '1': result += "l";
                            break;
                        case '7': result += "t";
                            break;
                        default: result += "";
                    }
                }
            else {
                result += ch;
            }
                                  
        }
        return result;
    }
}
