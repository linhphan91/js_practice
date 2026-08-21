class CalculatorConundrum {
    public String calculate(int operand1, int operand2, String operation) {
    int result;
    String strNum1 = String.valueOf(operand1);
    String strNum2 = String.valueOf(operand2);

    if (operation == null) {
        throw new IllegalArgumentException("Operation cannot be null");
}
    if (operation == "") {
          throw new IllegalArgumentException("Operation cannot be empty");  
} 
       
    switch(operation) {
            case "+": 
                result = operand1 + operand2;
                break;
            case "*": 
                result = operand1 * operand2;
                break;
            case "/": 
                try {
                    result = operand1 / operand2;
                }
                catch (ArithmeticException e) {
                    throw new IllegalOperationException("Division by zero is not allowed", e);
            }
                break;
            default:
                throw new IllegalOperationException("Operation '" + operation + "' does not exist");
        }
        String strResult = String.valueOf(result);
        return strNum1 + " " + operation + " " + strNum2 + " = " + strResult;
    }  
        

      
        
}
